import { PostContext } from "context/PostContext";
import { useContext } from "react";

export const usePost = () => {
  const postContext = useContext(PostContext);

  return postContext;
};
