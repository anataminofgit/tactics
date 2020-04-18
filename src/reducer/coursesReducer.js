// in the hook, initialize the state
// initial state
const post = {
    id: params.id,
    : params.title,
    clientId: CLIENTID,
    markdown: '# Loading...'
  }


  function reducer(state, action) {
    switch (action.type) {
      case 'updateMarkdown':
        return { ...state, markdown: action.markdown, clientId: CLIENTID };
      case 'updateTitle':
        return {  ]...state, title: action.title, clientId: CLIENTID };
      case 'updatePost':
        return action.post
      default:
        throw new Error();
    }
  }



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
