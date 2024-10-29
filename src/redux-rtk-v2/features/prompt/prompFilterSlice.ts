/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PromptType = "chat" | "data" | "project";

export interface PromptFilter {
  searchValue?: string | null;
  labels?: string[] | null;
  type?: PromptType[] | null;
  list?: "created" | "liked" | null;
  customList?: string | null;
  isPrivate?: boolean;
}

type PromptState = {
  filter: PromptFilter | null;
  isList: boolean;
  page: number;
};

export const initialPromptState: PromptState = {
  filter: {
    searchValue: null,
    labels: null,
    type: null,
    list: null,
    customList: null,
    isPrivate: false,
  },
  isList: false,
  page: 0,
};

const promptFilterSlice = createSlice({
  name: "promptFilter",
  initialState:initialPromptState,
  reducers: {
    setFilter: (state, action: PayloadAction<Partial<PromptFilter>>) => {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    },
    setTypeFilter: (state, action: PayloadAction<PromptType>) => {
      let type = state.filter?.type;

      switch (true) {
        case type === null:
          type = [action.payload];
          break;
        case type && type.includes(action.payload) && type.length === 1:
          type = null;
          break;
        case type && type.includes(action.payload):
          type = type.filter((t) => t !== action.payload);
          break;
        case type && !type?.includes(action.payload):
          type = [...type, action.payload];
          break;
      }

      state.filter = {
        ...state.filter,
        type,
      };
    },
    setLabelFilter: (state, action: PayloadAction<string>) => {
      let labels = state.filter?.labels;

      switch (true) {
        case labels === null:
          labels = [action.payload];
          break;
        case labels && labels.includes(action.payload) && labels.length === 1:
          labels = null;
          break;
        case labels && labels.includes(action.payload):
          labels = labels.filter((l) => l !== action.payload);
          break;
        case labels && !labels?.includes(action.payload):
          labels = [...labels, action.payload];
          break;
      }

      state.filter = {
        ...state.filter,
        labels,
      };
    },
    setListFilter: (state, action: PayloadAction<"created" | "liked" | null>) => {
      if (action.payload === state.filter?.list) {
        state.filter = {
          ...state.filter,
          list: null,
        };
      } else {
      state.filter = {
        ...state.filter,
        list: action.payload,
      };
      }
    },
    setCustomListFilter: (state, action: PayloadAction<string>) => {
      if (action.payload === state.filter?.customList) {
        state.filter = {
          ...state.filter,
          customList: null,
        };
      } else {
      state.filter = {
        ...state.filter,
        customList: action.payload,
      };
      }
    },
    resetFilter: (state) => {
      state.filter = initialPromptState.filter;
    },
    toggleListView: (state) => {
      state.isList = !state.isList;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { resetFilter, setFilter, setPage, toggleListView, setTypeFilter, setLabelFilter, setCustomListFilter, setListFilter } =
  promptFilterSlice.actions;
export const promptFilterReducer = promptFilterSlice.reducer;
