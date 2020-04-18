export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.auth.user,
        group: action.auth.group
      };

    case "LOGOUT":
      return {
        user: action.auth.user,
        group: action.auth.group
      };
    default:
      return state;
  }
};
