import { useState } from "react";
import Axios from "../config";

const useUser = () => {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const getUserPosts = (userId) => {
    setLoadingPosts(true);
    Axios.get(`users/${userId}/posts`)
      .then((res) => {
        setPosts(res.data.posts);
        setLoadingPosts(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingPosts(false);
      });
  };

  return { posts, loadingPosts, getUserPosts };
};

export default useUser;
