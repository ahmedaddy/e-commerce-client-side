import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminEditProducts from "../../Components/Admin/AdminEditProducts";
const AdminEditProductsPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="3" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="9" md="10">
          <AdminEditProducts />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminEditProductsPage;
