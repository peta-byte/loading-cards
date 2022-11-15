import { Injectable } from '@nestjs/common';
import { graphql, GraphQLFieldConfig, GraphQLObjectType, GraphQLSchema } from 'graphql'
import { HttpService } from '@nestjs/axios'
import { lastValueFrom } from 'rxjs';
import { Demographics, Gender, Nationalities, queries, User, Users } from '@graphql-playground/api-interfaces'

const apiURL = 'https://randomuser.me/api/?format=json';

@Injectable()
export class AppService {
  schema: GraphQLSchema;
  users = [];
  nationalities = [];
  gender = [];
  userDetails = {}

  constructor(private httpService: HttpService) {
    this.buildSchema()
  }

  getUser() {
    return graphql({ schema: this.schema, source: queries.user })
  }

  getUsers() {
    return graphql({ schema: this.schema, source: queries.users })
  }

  getGender() {
    return graphql({ schema: this.schema, source: queries.gender })
  }

  getDemographics() {
    return graphql({ schema: this.schema, source: queries.demographics })
  }

  getNationalities() {
    return graphql({ schema: this.schema, source: queries.nationalities })
  }

  private getUserField(): GraphQLFieldConfig<unknown, unknown, unknown> {
    const httpService = this.httpService
    return {
      type: User,
      resolve: async () => {
        return (await lastValueFrom(httpService.get(apiURL, { responseType: 'json' })))?.data['results'][0]
      }
    }
  }

  private getUsersField(): GraphQLFieldConfig<unknown, unknown, unknown> {
    return {
      type: Users,
      resolve: async () => {
        this.users = (await lastValueFrom(this.httpService.get(`${apiURL}&results=6`, { responseType: 'json' })))?.data['results']
        this.gender = this.users.map((user) => user['gender'])
        this.nationalities = this.users.map((user) => user['nat'])
        return this.users
      }
    }
  }

  private getGenderField(): GraphQLFieldConfig<unknown, unknown, unknown> {
    return {
      type: Gender,
      resolve: async (src, args, context, info) => {
        const genderAlts = ['female', 'male'];
        const filteredData = { ...this.userDetails }
        if (this.gender.length) {
          filteredData['gender'] = [...this.gender];
          if (args && args['filter'] && genderAlts.includes(args['filter'])) {
            filteredData['gender'] = filteredData['gender'].filter(gender => gender === args['filter']);
          }
        }
        return filteredData
      }
    }
  }

  private getDemographicsField(): GraphQLFieldConfig<unknown, unknown, unknown> {
    return {
      type: Demographics,
      resolve: () => {
        if (this.gender.length) {
          this.userDetails['gender'] = [...this.gender];
        }
        if (this.nationalities.length) {
          this.userDetails['nationalities'] = [...this.nationalities];
        }
        return { ...this.userDetails }
      }
    }
  }

  private getNationalitiesField(): GraphQLFieldConfig<unknown, unknown, unknown> {
    return {
      type: Nationalities,
      resolve: async () => {
        if (this.nationalities.length !== 0) {
          this.userDetails['nationalities'] = [...this.nationalities];
        }
        return { ...this.userDetails }
      }
    }
  }

  private buildSchema(): void {
    this.schema = new GraphQLSchema({
      types: [],
      query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
          user: this.getUserField(),
          users: this.getUsersField(),
          gender: this.getGenderField(),
          demographics: this.getDemographicsField(),
          nationalities: this.getNationalitiesField()
        }
      })
    })
  }
}
