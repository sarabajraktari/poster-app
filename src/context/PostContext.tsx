import { create } from "api/poster";
import { AxiosResponse } from "axios";
import { LayoutProps } from "interfaces/LayoutProps";
import { PostsProps } from "interfaces/Posts.props";
import { createContext } from "react";
import { PostContextProps } from "./PostContext.props";

export const PostContext = createContext<PostContextProps>({
  createPost: (_data: Partial<PostsProps>) => null,
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
  };
  return (
    <PostContext.Provider value={{ createPost }}>
      {children}
    </PostContext.Provider>
  );
};
