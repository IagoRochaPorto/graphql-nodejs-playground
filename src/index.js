import { GraphQLServer } from 'graphql-yoga'
import path from 'path'
import resolvers from './resolvers'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/graphqltest')

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
})

server.start()
