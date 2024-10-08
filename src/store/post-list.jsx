import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (newPostList === "1") {
    console.log("how are you");
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (userID, title, postBody, reaction, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: postBody,
        reaction: reaction,
        userId: userID,
        tag: tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = ({}) => {};
  return (
    <PostList.Provider
      value={{ addPost, postList, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
