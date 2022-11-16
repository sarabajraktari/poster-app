import { PostsProps } from "interfaces/Posts.props";

export interface PostContextProps {
    createPost: (data: PostsProps) => void;
}