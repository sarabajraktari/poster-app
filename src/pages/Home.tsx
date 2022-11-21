import { Layout, AddPost, PostList } from "@components";
import { PostsProps } from "@interfaces";
import { ReactElement, useEffect, useState } from "react";
import { getPosts } from "../api/poster";

export const HomePage = (): ReactElement => {
  const [posts, setPosts] = useState<PostsProps[] | []>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts<PostsProps[]>();
      setPosts(result);
    };
    fetchPosts();
  }, []);
  return (
    <Layout>
      <AddPost />

      <PostList posts={posts} />
    </Layout>
  );
};
