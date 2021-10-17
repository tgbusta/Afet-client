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
      
      <Container className="py-5">
      <h3>Kullanıcılar</h3>
        <Table className="table table-secondary table-hover" responsive="md">
          <thead>
            <tr>
              <th scope="col">Sıra No</th>
              <th scope="col">Personel Adı</th>
              <th scope="col">Personel Soyadı</th>
              <th scope="col">E-Posta Adresi</th>
              <th scope="col">İşlem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
              <td>Sil Güncelle</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserScreen;
