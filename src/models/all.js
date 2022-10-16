import { typeDefs as itemTypes, resolvers as itemResolvers } from './item';
import { typeDefs as contractorTypes, resolvers as contractorResolvers } from './contractor';


const typeDefs = [ itemTypes, contractorTypes ]
const resolvers = Object.assign({}, itemResolvers, contractorResolvers)


export { typeDefs, resolvers }
