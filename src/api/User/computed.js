import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    fullName: (parent) => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    amIFollowing: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return prisma.$exists.user({
        AND: [{ id: parentId }, { followers_some: user.id }],
      });
    },
  },
};
