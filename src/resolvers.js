import User from './User'

export default {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email })
  }
}
