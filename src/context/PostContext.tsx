import { create, update } from "@api";
import { PostsProps, LayoutProps } from "@interfaces";
import { createContext } from "react";
import { PostContextProps } from "./PostContext.props";

export const PostContext = createContext<PostContextProps>({
  createPost: (_data: Partial<PostsProps>) => null,
  updatePost: (_id: string, _data: Partial<PostsProps>) => null,
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

  return (
    <PostContext.Provider value={{ createPost, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};
