const INITIAL_USER = {
  username: null,
  name: null,
  token: null,
  avatarUrl: null,
};

export const userLogs = (state = INITIAL_USER, action = null) => {
  switch (action.type) {
    case "LOGGING_IN":
      return {
        ...state,
        username: action.payload.username,
        name: action.payload.name,
        token: action.payload.token,
        avatarUrl: action.payload.avatarUrl,
      };
    case "LOGGING_OUT":
      return {
        ...state,
        username: null,
        name: null,
        token: null,
        avatarUrl: null,
      };
  }
  return state;
};
