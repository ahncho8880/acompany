import { prisma } from "../../../../generated/prisma-client";
import { USER_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    me: async (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      const userProfile = prisma.user({ id: user.id });
      const posts = prisma.user({ id: user.id }).posts();
      return {
        user: userProfile,
        posts,
      };
    },
  },
};
