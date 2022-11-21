import { create, update } from "@api";
import { PostsProps, LayoutProps } from "@interfaces";
import { createContext } from "react";
import { PostContextProps } from "./PostContext.props";

export const PostContext = createContext<PostContextProps>({
  createPost: (_data: Partial<PostsProps>) => null,
  // updatePost: (_data: Partial<PostsProps>) => null,
});
export const PostProvider: React.FC<LayoutProps> = ({ children }) => {
  const createPost = async ({
    title,
    description,
    image,
  }: Partial<PostsProps>) => {
    create({
      title,
      description,
      image,
    });

    const updatePost = async ({
      title,
      description,
      image,
    }: Partial<PostsProps>) => {
      update({ title, description, image });
    };
  };
  return (
    <PostContext.Provider value={{ createPost }}>
      {children}
    </PostContext.Provider>
  );
};
