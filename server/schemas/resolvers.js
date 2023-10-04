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
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw  AuthenticationError;
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw AuthenticationError;
            }
            const token = signToken(user);
            return { token, user };
        },

        addUser:  async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

        removeRestraunt:  async (parent, { restrauntId }, { user }) => {
            const updatedUser = await User.findOneAndUpdate(
              { _id: user._id },
              { $pull: { savedRestraunt: { restrauntId } } },
              { new: true }
            );
            return updatedUser;
        },

        saveRestraunt:  async (parent, { input }, { user }) => {
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedRestraunt: input } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            } catch (error) {
                console.error(error);
                throw new Error('Failed to update user');
            }
        },

    
    },
};