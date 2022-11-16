export interface PostsProps {
    id: string
    title: string;
    description: string;
    image: string;
    categories?: string[];
    createdBy?: string;
    userId?: string;
}