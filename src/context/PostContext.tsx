import { create } from "api/poster";
import { LayoutProps } from "interfaces/LayoutProps";
import { PostsProps } from "interfaces/Posts.props";
import { createContext } from "react";
import { PostContextProps } from "./PostContext.props";

export const PostContext = createContext<PostContextProps>({
  createPost: (data: Partial<PostsProps>) => null,
});
export const PostProvider: React.FC<LayoutProps> = ({ children }) => {
  const createPost = async ({
    title,
    description,
    image,
  }: Partial<PostsProps>) => {
    await create<Partial<PostsProps>>({ title, description, image });

    // alert("Post create successfully!");
  };
  return (
    <PostContext.Provider value={{ createPost }}>
      {children}
    </PostContext.Provider>
  );
};
