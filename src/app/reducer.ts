import { initialState } from "./data";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeStatus: {
      reducer: (state, action: PayloadAction<ActionType>) => {
        state.forEach((todo) => {
          if (todo.id === action.payload.id)
            todo.status = action.payload.newStatus;
        });
      },
      prepare: (id: number, newStatus: statusType) => {
        return { payload: { id, newStatus } };
      },
    },
  },
});

export const { changeStatus } = todoSlice.actions;
export const { reducer } = todoSlice;
/* selector  for useAppSelect inside TodoList Component, createSelector function also provides
memoization */
export const selectByStatus = createSelector(
  [(state: RootState) => state.todos, (_state, status: string) => status],
  (todos, status) => todos.filter((todo) => todo.status === status)
);
