import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllOrders from "../../Components/Admin/AdminAllOrders";
import Pagination from "../../Components/Uitily/Pagination";
import AdminViewProducts from "../../hook/admin/admin-view-products.-hook.js";
const AdminAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="3" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="9" md="10">
          <AdminAllOrders />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminAllOrdersPage;
