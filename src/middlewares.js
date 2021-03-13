export const isAuthenticated = (request) => {
  if (!request.user) {
    throw Error("do login");
  }
  return;
};
