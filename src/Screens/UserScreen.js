import React from "react";
import { Container, Table, Dropdown } from "react-bootstrap";
import SubmitUser from "../Components/SubmitUser";

const UserScreen = () => {
  return (
    <div>
      <Container>
        <SubmitUser />
      </Container>
      <Dropdown.Divider/>
      <Container>
        <Table class="table table-hover table-success">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Active</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Default</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Primary</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
            <tr>
              <th scope="row">Secondary</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserScreen;
