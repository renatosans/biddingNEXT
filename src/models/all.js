import { typeDefs as itemTypes, resolvers as itemResolvers } from './item';
import { typeDefs as contractorTypes, resolvers as contractorResolvers } from './contractor';


const typeDefs = [ `type Query { version: String }`, itemTypes, contractorTypes ]

// Object.assign( ) não é recursivo como o lodash.merge( )  e isso causa o override dos resolvers
// a solução foi usar o Object.assign( ) para Query e Mutation separadamente
const resolvers = {
    Query: Object.assign({}, itemResolvers.Query, contractorResolvers.Query),
    Mutation: Object.assign({}, itemResolvers.Mutation, contractorResolvers.Mutation)
}

export { typeDefs, resolvers }
