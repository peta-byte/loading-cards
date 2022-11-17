import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { Usr, GraphQLResponse } from '@graphql-playground/api-interfaces';

@Component({
  selector: 'graphql-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: Usr[] = [];

  user$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('/api/user')
  users$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('/api/users')

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    lastValueFrom(this.users$).then((res) => {
      this.users = res.data.users ?? []
    })
  }
}
