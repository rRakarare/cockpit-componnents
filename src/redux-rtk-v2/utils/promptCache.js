import { libraryType } from "@/config-v2/constants";
import { apiSlice } from "@/redux-rtk-v2/features/api/apiSlice";

/**
 * Updates the cache for a specific query in the Redux store.
 *
 * @param {Function} dispatch - The Redux dispatch function.
 * @param {string} cacheName - The name of the cache to update.
 * @param {Object} queryArgs - The arguments for the query to identify the cache.
 * @param {string} updateType - The type of update to perform ("like" or "library").
 * @param {Object} payload - The payload containing update details.
 */
export const updateCache = (
  dispatch,
  cacheName,
  queryArgs,
  updateType,
  payload,
) => {
  // Dispatch an action to update the query data in the Redux cache
  dispatch(
    apiSlice.util.updateQueryData(cacheName, queryArgs, (draft) => {
      // Find the index of the prompt to be updated based on the promptId in the payload
      const promptIndex = draft.data.findIndex(
        (item) => item._id === payload.promptId,
      );

      // If the prompt is found in the cache, perform the update based on the updateType
      if (promptIndex !== -1) {
        switch (updateType) {
          case "like":
            // Handle updates related to likes
            if (payload.type === "like") {
              // If the payload type is "like", add a new like to the prompt's likes array
              draft.data[promptIndex].likes.push({
                userId: payload.userId,
                promptId: payload.promptId,
              });
            } else {
              // If the payload type is not "like", remove the like from the prompt's likes array
              const { shouldRemovePrompt } = payload;
              if (shouldRemovePrompt) {
                // If shouldRemovePrompt is true, remove the prompt from the cache
                draft.data.splice(promptIndex, 1);
                return;
              }
              // Filter out the like by the userId from the prompt's likes array
              draft.data[promptIndex].likes = draft.data[
                promptIndex
              ].likes.filter((like) => like.userId !== payload.userId);
            }
            break;
          case "library":
            // Handle updates related to the library type
            if (
              payload.newLibraryType !== libraryType.private &&
              payload.libraryTypeValue === libraryType.private
            ) {
              // If the new library type is not private and the current library type is private, remove the prompt from the cache
              draft.data.splice(promptIndex, 1);
            } else {
              // Otherwise, update the prompt's library type
              draft.data[promptIndex].library = payload.newLibraryType;
            }
            break;
          default:
            break;
        }
      }
    }),
  );
};
