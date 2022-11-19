export * from './schema';

export interface Usr {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large?: string;
  };
  nat: string;
}

export interface GraphQLResponse {
  data: {
    user?: Usr;
    users?: Usr[];
    gender?: { gender: string[]; };
    demographics?: { gender: string[]; nationalities: string[]; };
    nationalities?: { nationalities: string[]; };
  }
}
