import { PostContext } from "@context";
import { useContext } from "react";

export const usePost = () => {
  const postContext = useContext(PostContext);

  return postContext;
};
