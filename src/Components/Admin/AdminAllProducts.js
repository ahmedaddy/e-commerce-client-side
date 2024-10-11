import React from "react";
import { Row } from "react-bootstrap";
import AdminAllProductsCard from "./AdminAllProductsCard";

const AdminAllProducts = ({ products }) => {
  return (
    <div>
      <div className="admin-content-text">Manage all products</div>
      <Row className="justify-content-start">
        {products ? (
          products.map((item, index) => {
            return <AdminAllProductsCard key={index} item={item} />;
          })
        ) : (
          <h2>There is no product for management.</h2>
        )}
        {/* <AdminAllProductsCard /> */}
      </Row>
    </div>
  );
};

export default AdminAllProducts;
