const initState = {
  posts: [
    {id: '1',title: 'Squirtle', body: 'Lorem Ipsum'},
    {id: '2',title: 'Charmander', body: 'Lorem Ipsum'},
    {id: '3',title: 'Pikachu', body: 'Lorem Ipsum'}
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action)
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id
    });
    return {
      ...state,
      posts: newPosts
    }
  }
  return state;
};

export default rootReducer;