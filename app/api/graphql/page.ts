import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs } from './schema/indexSchema';
import { resolvers } from './resolvers';

const schema = createSchema({
  typeDefs,
  resolvers
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
});