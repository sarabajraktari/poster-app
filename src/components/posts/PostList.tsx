import { PostsProps } from "interfaces/Posts.props";
import { ReactElement } from "react";
import PostItem from "./PostItem";
import { PostsPropsArr } from "./Posts.props";

const PostList = (props: PostsPropsArr): ReactElement => {
  return (
    <ul className="list-none">
      {props.posts.map((post: PostsProps) => (
        <PostItem
          key={post.id}
          id={post.id}
          image={post.image}
          title={post.title}
          content={post.content}
        />
      ))}
    </ul>
  );
};

export default PostList;
