import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GraphQLResponse, queries } from "@graphql-playground/api-interfaces";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, mergeMap, Observable, map } from "rxjs";
import { getUsers, setUsers } from "./user.actions";

@Injectable({
  providedIn: 'root'
})
export class UserEffects {
  users$: Observable<GraphQLResponse> = this.http.post<GraphQLResponse>('/graphql', {
    query: queries.users,
    operationName: undefined,
    variables: null
  })

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(getUsers),
    mergeMap(() => this.users$.pipe(
      map((res) => {
        return setUsers({ users: res.data.users ?? []})
      }),
      catchError(() => EMPTY)
    ))
  ));

  constructor(private actions$: Actions, private http: HttpClient) {}
}
