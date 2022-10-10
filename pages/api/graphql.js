import prisma from '../../config/db'
import { ApolloServer, gql } from 'apollo-server-micro'


const typeDefs = gql`

type Item {
    id: ID!
    name: String!
    description: String
    avgPrice: Float!
    image: String
    banner: String
    unitOfMeasurement: String!
    itemGroup: Int
}

type Query {
    allItems: [Item!]!
}

type Mutation {
  # createItem(id: ID!, name: String!, avgPrice: Float!): Item!
  deleteItem(id: Int!): Int
  # updateItem(id: Int!): Int
}
`

const resolvers = {
  Query: {
    allItems: () => {
      return prisma.item.findMany();
    }
  },

  Mutation: {
    deleteItem: async (parent, args) => {
      await prisma.item.delete({
        where: { id: args.id },
      })
      return args.id;
    },
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
