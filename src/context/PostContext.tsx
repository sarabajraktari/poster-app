import { create, deletePost, update } from "@api";
import { PostsProps, LayoutProps } from "@interfaces";
import { createContext } from "react";
import { PostContextProps } from "./PostContext.props";

export const PostContext = createContext<PostContextProps>({
  createPost: (_data: Partial<PostsProps>) => null,
  updatePost: (_id: string, _data: Partial<PostsProps>) => null,
  removePost: (_id: string) => null,
});
export const PostProvider: React.FC<LayoutProps> = ({ children }) => {
  const createPost = ({ title, description, image }: Partial<PostsProps>) => {
    create({
      title,
      description,
      image,
    });
  };

  const updatePost = (
    id: string,
    { title, description, image }: Partial<PostsProps>
  ) => {
    update(id || "", { title, description, image });
  };

  const removePost = (id: string) => {
    deletePost(id);
    // alert("Post deleted successfully!");
  };

  return (
    <PostContext.Provider value={{ createPost, updatePost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};
