// const getIsAuthenticated = state => Boolean(state.auth.token);
const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

export { getIsAuthenticated, getUserName };
