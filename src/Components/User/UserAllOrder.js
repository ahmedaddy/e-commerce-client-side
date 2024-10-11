import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrderItem from "./UserAllOrderItem";
import UserGetAllOrders from "../../hook/user/user-get-all-orders";

const UserAllOrder = () => {
  const [userName, data] = UserGetAllOrders();
  // console.log(userName);
  return (
    <div>
      <div className="admin-content-text pb-4">Hello {userName}</div>
      <Row className="justify-content-between">
        {data &&
          data.map((item) => {
            return <UserAllOrderItem order={item} />;
          })}
        {/* <UserAllOrderItem />
        <UserAllOrderItem /> */}
      </Row>
    </div>
  );
};

export default UserAllOrder;
