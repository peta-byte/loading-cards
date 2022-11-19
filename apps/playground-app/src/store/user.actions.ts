import { Usr } from "@graphql-playground/api-interfaces";
import { createAction, props } from "@ngrx/store";

export const getUsers = createAction(`[User] Get Users`);

export const setUsers = createAction(`[User] Set Users`, props<{ users: Usr[] }>());
