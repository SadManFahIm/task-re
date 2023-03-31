import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import { Alert, Card } from "react-bootstrap";
import { useEffect } from "react";
const UserPosts = () => {
  const { posts, loadingPosts, getUserPosts } = useUser();
  const params = useParams();
  useEffect(() => {
    getUserPosts(params.userID);
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Users Post</h1>
      {loadingPosts && (
        <Alert variant='info' style={{ textAlign: "center" }}>
          Loading Posts...
        </Alert>
      )}
      {!loadingPosts &&
        posts.map((post, index) => {
          return (
            <div
              key={index}
              style={{ marginTop: "10px", marginBottom: "10px" }}>
              <Card>
                <Card.Header>{post.title}</Card.Header>
                <Card.Body>{post.body}</Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default UserPosts;
