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
  createItem(name: String, description: String, avgPrice: Float, image: String, banner: String, unitOfMeasurement: String, itemGroup: Int): Item
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
    createItem: async (parent, args) => {
      const item = await prisma.item.create({data: args})
      return item;
    },
    deleteItem: async (parent, args) => {
      const item = await prisma.item.delete({ where: { id: parseInt(args.id) }, })
      return item.id;
    },
  }
}

export { typeDefs, resolvers }
