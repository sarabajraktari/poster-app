import { ReactElement } from "react";
import PostItem from "./PostItem";

const PostList = (props: any): ReactElement => {
  return (
    <>
      <ul className="list-none">
        {props.posts.map((post: any) => (
          <PostItem
            key={post.id}
            id={post.id}
            image={post.image}
            title={post.title}
            content={post.content}
          />
        ))}
      </ul>
    </>
  );
};

export default PostList;
