/*import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
const postList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id}/>
      ))}
    </>
  );
};
export default postList;*/



import { useContext } from "react";
import Post from "./Post";
import { PostList as postListData } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(postListData);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;