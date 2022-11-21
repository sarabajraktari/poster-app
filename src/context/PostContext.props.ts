import { PostsProps } from "@interfaces";

export interface PostContextProps {
    createPost: (data: PostsProps) => void;
    // updatePost: (data: PostsProps) => void;
}