import { Form, Table } from "react-bootstrap";
import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const { users, searchUser } = useUsers();
  const navigate = useNavigate();
  const getUsersView = () => {
    if (users.length < 1) {
      return (
        <tr>
          <td style={{ textAlign: "center" }} colSpan={4}>
            No Data Found
          </td>
        </tr>
      );
    }
    return users.map((user, index) => {
      return (
        <tr key={index} onClick={() => navigate(`${user.id}/posts`)}>
          <td>{index + 1}</td>
          <td>{`${user.firstName} ${user.lastName}`}</td>
          <td>{user.email}</td>
          <td>{user.company.name}</td>
        </tr>
      );
    });
  };
  return (
    <div style={{ margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>All Users</h1>
      <Form>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            type='text'
            placeholder='name'
            onChange={(e) => searchUser(e.target.value)}
          />
        </Form.Group>
      </Form>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>#</tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
        </thead>
        <tbody>{getUsersView()}</tbody>
      </Table>
    </div>
  );
};

export default Users;
