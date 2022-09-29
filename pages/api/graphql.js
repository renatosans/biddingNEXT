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
}`


const resolvers = {
  Query: {
    allItems: () => {
      return prisma.item.findMany();
    }
  }
}

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
})

const handler = createGraphQLHandler({
  schema
})


export default handler
