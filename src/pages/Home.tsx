import { Layout, AddPost, PostList, Ternary } from "@components";
import { PostsProps } from "@interfaces";
import { ReactElement, useEffect, useState } from "react";
import { getPosts } from "../api/poster";

export const HomePage = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<PostsProps[] | []>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const result = await getPosts<PostsProps[]>().finally(() =>
        setIsLoading(false)
      );
      setPosts(result);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <AddPost />

      <Ternary condition={!isLoading} fallback={<p>Loading...</p>}>
        <PostList posts={posts} />
      </Ternary>
    </Layout>
  );
};
