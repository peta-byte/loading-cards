import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GraphQLResponse, queries, Usr } from "@graphql-playground/api-interfaces";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getUsers } from "../store/user.actions";
import { UserState } from "../store/user.reducer";
import { selectUsers } from "../store/user.selectors";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('graphql')
  users$: Observable<GraphQLResponse> = this.http.post<GraphQLResponse>('/graphql', {
    query: queries.users,
    operationName: '',
    variables: null
  })

  constructor(private http: HttpClient, private store: Store<UserState>) {}

  loadUsers(): void {
    this.store.dispatch(getUsers());
  }

  getUsers$(): Observable<Usr[]> {
    return this.store.select(selectUsers);
  }

}
