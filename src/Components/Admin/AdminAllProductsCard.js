import React, { useState } from "react";
import { Col, Card, Row, Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions/productAction";
import { productURL } from "../../Api/baseURL";
const AdminAllProductsCard = ({ item }) => {
  // console.log(item);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handelDelete = async () => {
    await dispatch(deleteProduct(item._id));
    setShow(false);
    window.location.reload();
  };

  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {" "}
            <div className="font">Confirm deletion</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="font">
            Are you sure about the product deletion process?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="font text-dark"
            variant="success"
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            className="font text-dark"
            variant="dark"
            onClick={handelDelete}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">
              Delete
            </div>
            <Link
              to={`/admin/editproduct/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-inline item-delete-edit">Edite</div>
            </Link>{" "}
          </Col>
        </Row>
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <div
            style={{
              height: "228px",
              width: "100%",
            }}
          >
            <Card.Img
              style={{
                height: "100%",
                maxWidth: "100%",
                width: "fit-content",
                display: "block",
                margin: "auto",
              }}
              src={productURL + item.imageCover}
            />
          </div>
          <Card.Body className="bg-white" style={{ borderRadius: "8px" }}>
            <Card.Title>
              <div className="card-title">
                {item.title.length > 30
                  ? `${item.title.slice(0, 100)}...`
                  : item.title}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{item.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">Dirham</div>
                  <div className="card-price">{item.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProductsCard;
