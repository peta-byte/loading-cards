import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { join } from 'path';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    HttpModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    })
  ],
  providers: [UserResolver],
})
export class AppModule {}
