import { Layout } from "@components";
import PostList from "components/posts/PostList";
import { PostsProps } from "interfaces/Posts.props";
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
  }, [posts]);
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};
