import React from "react";
import { Row } from "react-bootstrap";
import AdminAllOrdersItem from "./AdminAllOrdersItem";
import Pagination from "../../Components/Uitily/Pagination";
import GetAllOrdersHook from "../../hook/orders/get-all-orders-hook";

const AdminAllOrders = () => {
  const [data, results, pagination] = GetAllOrdersHook();
  // console.log(data);
  // console.log(results);
  // console.log(pagination);
  return (
    <div>
      <div className="admin-content-text">Manage all orders</div>
      <Row className="justify-content-start">
        {data ? (
          data.map((item, index) => {
            return <AdminAllOrdersItem orderItem={item} />;
          })
        ) : (
          <h2>There is no order.</h2>
        )}
      </Row>
    </div>
  );
};

export default AdminAllOrders;
