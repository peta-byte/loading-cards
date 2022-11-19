import { HttpService } from "@nestjs/axios";
import { Resolver, Query } from "@nestjs/graphql";
import { lastValueFrom } from "rxjs";

const apiURL = 'https://randomuser.me/api/?format=json';

@Resolver('User')
export class UserResolver {

  constructor(
    private httpService: HttpService
  ) {}

  @Query()
  async user() {
    return (await lastValueFrom(this.httpService.get(apiURL, { responseType: 'json' })))?.data['results'][0]
  }

  @Query()
  async users() {
    return (await lastValueFrom(this.httpService.get(`${apiURL}&results=6`, { responseType: 'json' })))?.data['results']
  }
}
