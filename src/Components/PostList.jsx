import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list";
import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

export default function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <div>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <Message />}

      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}
