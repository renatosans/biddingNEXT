import prisma from '../utils/connection'
import { gql } from 'apollo-server-micro'


const typeDefs = gql`
type ItemGroup {
    id: ID!
    name: String!
}

extend type Query {
  getItemGroup(id: Int!): ItemGroup!
  allItemGroups: [ItemGroup!]!
}

extend type Mutation {
  createItemGroup(name: String!): ItemGroup
  # deleteItem(id: Int!): Int
  # updateItem(id: Int!): Int
}
`

const resolvers = {
  Query: {
    getItemGroup: (parent, args) => {
      return prisma.itemgroup.findUnique({ where: { id: parseInt(args.id) } })
    },
    allItemGroups: () => {
      return prisma.itemgroup.findMany()
    }
  },

  Mutation: {
    createItemGroup: async (parent, args) => {
      const { name } = args;
      const itemGroup = await prisma.itemgroup.create({ data: { name } })
      return itemGroup;
    },
  }
}

export { typeDefs, resolvers }
