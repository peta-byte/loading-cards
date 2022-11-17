import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usr, GraphQLResponse } from '@graphql-playground/api-interfaces';
import { Observable, lastValueFrom } from 'rxjs';

@Component({
  selector: 'graphql-playground-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
