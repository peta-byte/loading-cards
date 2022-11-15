import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

interface User {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture?: {
    large?: string;
  }
}

interface GraphQLResponse {
  data: {
    user?: User;
    users?: User[];
    demographics?: unknown;
    nationalities?: unknown;
  }
}

@Component({
  selector: 'graphql-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: User[] = []

  user$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('/api/user')
  users$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('/api/users')
  gender$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('/api/gender')
  demographics$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('/api/demographics')
  nationalities$: Observable<GraphQLResponse> = this.http.get<GraphQLResponse>('/api/nationalities')

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    lastValueFrom(this.users$).then((res) => {
      this.users = res.data.users ?? []
    })
  }

  getDemographics() {
    lastValueFrom(this.demographics$).then((val) => {
      console.log(val)
    })
  }

  getGender() {
    lastValueFrom(this.gender$).then((val) => {
      console.log(val)
    })
  }

  getNationalities() {
    lastValueFrom(this.nationalities$).then((val) => {
      console.log(val)
    })
  }
}
