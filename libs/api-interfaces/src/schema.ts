import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLOutputType, GraphQLString } from 'graphql'

export const Name: GraphQLOutputType = new GraphQLObjectType({
  name: 'Name',
  fields: {
    title: { type: GraphQLString },
    first: { type: GraphQLString },
    last: { type: GraphQLString }
  }
})

export const Login: GraphQLOutputType = new GraphQLObjectType({
  name: 'Login',
  fields: {
    uuid: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    md5: { type: GraphQLString },
    sha1: { type: GraphQLString },
    sha256: { type: GraphQLString },
    salt: { type: GraphQLString },
  }
})

export const DateAge: GraphQLOutputType = new GraphQLObjectType({
  name: 'DateAge',
  fields: {
    date: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
})

export const Timezone: GraphQLOutputType = new GraphQLObjectType({
  name: 'TimeZone',
  fields: {
    offset: { type: GraphQLString },
    description: { type: GraphQLString }
  }
})

export const Street: GraphQLOutputType = new GraphQLObjectType({
  name: 'Street',
  fields: {
    number: { type: GraphQLInt },
    name: { type: GraphQLString }
  }
})

export const Coordinates: GraphQLOutputType = new GraphQLObjectType({
  name: 'Coordinates',
  fields: {
    latitude: { type: GraphQLString },
    longitude: { type: GraphQLString }
  }
})

export const Location: GraphQLOutputType = new GraphQLObjectType({
  name: 'Location',
  fields: {
    street: { type: Street },
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    country: { type: GraphQLString },
    postcode: { type: GraphQLString },
    coordinates: { type: Coordinates },
    timezone: { type: Timezone }
  }
})

export const UserID: GraphQLOutputType = new GraphQLObjectType({
  name: 'UserID',
  fields: {
    name: { type: GraphQLString },
    value: { type: GraphQLString }
  }
})

export const Picture: GraphQLOutputType = new GraphQLObjectType({
  name: 'Picture',
  fields: {
    large: { type: GraphQLString },
    medium: { type: GraphQLString },
    thumbnail: { type: GraphQLString }
  }
})

export const User: GraphQLOutputType = new GraphQLObjectType({
  name: 'User',
  fields: {
    gender: { type: GraphQLString },
    name: { type: Name },
    location: { type: Location },
    email: { type: GraphQLString },
    login: { type: Login },
    dob: { type: DateAge },
    registered: { type: DateAge },
    phone: { type: GraphQLString },
    cell: { type: GraphQLString },
    id: { type: UserID },
    picture: { type: Picture },
    nat: { type: GraphQLString },
  }
})

export const Users: GraphQLOutputType = new GraphQLList(User)

export const Nationalities: GraphQLOutputType = new GraphQLObjectType({
  name: 'Nationalities',
  fields: {
    nationalities: { type: new GraphQLList(GraphQLString) },
  }
})

export const Gender: GraphQLOutputType = new GraphQLObjectType({
  name: 'Gender',
  fields: {
    gender: { type: new GraphQLList(GraphQLString) }
  }
})

export const Demographics: GraphQLOutputType = new GraphQLObjectType({
  name: 'Demographics',
  fields: {
    nationalities: { type: new GraphQLList(GraphQLString) },
    gender: { type: new GraphQLList(GraphQLString) }
  }
})

export const queries = {
  user: `{
          user {
              gender
              name {
                  title
                  first
                  last
              }
              email
              picture {
                large
              }
          }
  }`,
  users: `{
          users {
              gender
              name {
                  title
                  first
                  last
              }
              email
              picture {
                  large
              }
          }
  }
  `,
  demographics: `{
      demographics {
          nationalities
          gender
      }
  }
  `,
  gender: `{
      gender { gender }
  }
  `,
  nationalities: `{
      nationalities { nationalities }
  }
  `,
  mergedDemographics: `{
     nationalities
     gender
 }
  `,
  aliasedGender: `{
     male: gender(filter: "male") {
         gender
     }
     female: gender(filter: "female") {
         gender
     }
 }`
}
