import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSideBar from "../../Components/Admin/AdminSideBar";
import AdminAllProducts from "../../Components/Admin/AdminAllProducts";
import Pagination from "../../Components/Uitily/Pagination";
import AdminViewProducts from "../../hook/admin/admin-view-products.-hook.js";
const AdminAllProductsPage = () => {
  const [items, pagination, onPress] = AdminViewProducts();
  // console.log(items);

  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="3" md="2">
          <AdminSideBar />
        </Col>

        <Col sm="9" xs="9" md="10">
          <AdminAllProducts products={items} />
          <Pagination pageCount={pagination} onPress={onPress} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
