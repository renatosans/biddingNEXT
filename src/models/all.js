import { typeDefs as itemTypes, resolvers as itemResolvers } from './item';
import { typeDefs as contractorTypes, resolvers as contractorResolvers } from './contractor';


const typeDefs = [ `type Query { version: String }`, contractorTypes, itemTypes]
const resolvers = Object.assign({}, contractorResolvers, itemResolvers)


export { typeDefs, resolvers }
