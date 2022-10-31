import { Layout } from "@components/layout/Layout";
import { ReactElement, useEffect, useState } from "react";
import { getPosts } from "../api/poster";
import PostList from "../components/posts/PostList";
import { PostsProps } from "../interfaces/Posts.props";

export const HomePage = (): ReactElement => {
  const [posts, setPosts] = useState<PostsProps[] | []>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts<PostsProps[]>();
      setPosts(result);
    };
    fetchPosts();
  }, [posts]);
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};
