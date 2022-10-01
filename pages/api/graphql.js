import prisma from '../../config/db'
import { ApolloServer, gql } from 'apollo-server-micro'


const typeDefs = gql`
type Item {
    id: ID!
    name: String!
    avgPrice: Float!
    unitOfMeasurement: String!
    itemGroup: Int
}

type Query {
    allItems: [Item!]!
}

type Mutation {
  createItem(id: ID!, name: String!, avgPrice: Float!): Item!
  # deleteItem
  # updateItem
}
`

const resolvers = {
  Query: {
    allItems: () => {
      return prisma.item.findMany();
    }
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
