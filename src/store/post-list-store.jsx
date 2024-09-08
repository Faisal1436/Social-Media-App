/*import { createContext, useReducer } from "react";
export const PostList = createContext({
  //contract/Api designing
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({children}) => {
  const [PostList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{ PostList, addPost, deletePost }} >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Lahore",
    body: "Hi freinds , I am going to Lahore for my vacations , hope to enjoy a lot.Peace out.",
    Reactions: 2,
    userid: "user_9",
    tags: ["vactions", "Lahore", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass hoon bhai",
    body: "4 saal ki masti k baad b ho gaye hain pass.Hard to beleive.",
    Reactions: 15,
    userid: "user_12",
    tags: ["Congratulations", "Graduating", "unbelievable"],
  },
];
export default PostListProvider;*/
  

import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
if(action.type==="DELETE_POST"){

  newPostList = currPostList.filter(Post => Post.id !== action.payload.PostId);
} else if(action.type === "ADD_POST"){
  newPostList =[action.payload, ...currPostList];
}
  return newPostList;
    
  } ;

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId , postTitle , postBody , reactions , tags) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload:{
    id:Date.now() ,
    title: postTitle,
    body: postBody,
    reactions: reactions,
    userId: userId,
    tags: tags,
      }
    })
  };

  const deletePost = (PostId) => {;
  dispatchPostList({
type: 'DELETE_POST',
payload:{
  PostId,
} ,
})
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Lahore",
    body: "Hi Friends, I am going to Lahore for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Lahore", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas ho bhai",
    body: "4 saal ki masti k baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;