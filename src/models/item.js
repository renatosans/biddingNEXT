import prisma from '../utils/connection'
import { gql } from 'apollo-server-micro'


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

extend type Query {
    allItems: [Item!]!
}

extend type Mutation {
  # createItem(id: ID!, name: String!, avgPrice: Float!): Item!
  deleteItem(id: Int): Int
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

export { typeDefs, resolvers }
