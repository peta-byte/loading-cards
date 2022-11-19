import { Usr } from "@graphql-playground/api-interfaces";
import { createReducer, on } from "@ngrx/store";
import * as UserActions from "./user.actions";

export interface AppState {
  userState: UserState;
}

export interface UserState {
  users: Usr[];
}

export const initialState: AppState = {
  userState: { users: [] }
};

export const userReducer = createReducer(
  initialState.userState,
  on(UserActions.setUsers, (state, { users }) => ({ ...state, users }))
);
