import { PostsProps } from "@interfaces";
import { ReactElement } from "react";
import { PostItem } from "./PostItem";
import { PostsPropsArr } from "./Posts.props";

export const PostList = ({ posts }: PostsPropsArr): ReactElement => {
  return (
    <ul className="list-none">
      {posts.map((post: PostsProps) => (
        <PostItem
          key={post.id}
          id={post.id}
          image={post.image}
          title={post.title}
          description={post.description}
        />
      ))}
    </ul>
  );
};
