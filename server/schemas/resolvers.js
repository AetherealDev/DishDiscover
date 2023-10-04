const { User } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password') // exclude the __v and password fields
                return userData;
            }
            throw AuthenticationError;
        },
    },
    Mutation: {
    },
};