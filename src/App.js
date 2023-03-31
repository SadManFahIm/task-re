import "./App.css";
import { Route, Routes } from "react-router-dom";
import Users from "./page/users";
import UserPosts from "./page/userPosts";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='users' element={<Users />}></Route>
        <Route path='users/:userID/posts' element={<UserPosts />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
