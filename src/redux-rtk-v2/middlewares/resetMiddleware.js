import { apiSlice } from "../features/api/apiSlice";

const resetMiddleware = (store) => (next) => (action) => {
  if (action.type === "RESET") {
    store.dispatch(apiSlice.util.resetApiState());
    return next({ type: "RESET_STATE" });
  }
  return next(action);
};

export default resetMiddleware;
