import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      const user = prisma.user({ id });
      const posts = prisma.user({ id }).posts();
      return {
        user,
        posts,
      };
    },
  },
};
