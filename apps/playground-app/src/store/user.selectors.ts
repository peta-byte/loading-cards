import { createSelector } from "@ngrx/store";

export const selectUsers = createSelector(
  ({ users }) => users,
  ({ users }) => users
);
