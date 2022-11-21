import { PostsProps } from "@interfaces";

export interface PostContextProps {
  createPost: (data: PostsProps) => void;
  updatePost: (id: string, data: PostsProps) => void;
}
