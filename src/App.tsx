import { ReactElement, useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPosts } from "./api/poster";
import { PostsProps } from "./interfaces/Posts.props";

const App = (): ReactElement => {
  const [posts, setPosts] = useState<PostsProps[] | []>([]);

  const navigate = useNavigate();

  const handleEditPost = (id: string) => () => navigate(`/posts/${id}`);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPosts<PostsProps[]>();
      setPosts(result);
    };
    fetchPosts();
  }, [posts]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route
          path="/posts"
          element={
            <ul className="text-red-500 ">
              {posts.map((post) => (
                <>
                  <li>{post.title}</li>
                </>
              ))}
            </ul>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
