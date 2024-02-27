import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { toast } from "react-toastify";

import "./authstyle/Auth.css";
import { useState } from "react";
function Register({ baseurl }) {
  const [data, setdata] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    question: "",
  });

  const onhandlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseurl}/setuser`, data);
      console.log(res.data);
      console.log(data);
      toast.success("Registered Successfull");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    // <h3 className="text-center mt-5">Register</h3>
    <div className="form-container">
      <Form onSubmit={handlesubmit}>
        <h4 className="title">REGISTER FORM</h4>
        <Row className="my-2">
          <Col>
            <Form.Control
              placeholder="Name"
              type="text"
              name="name"
              value={data.name}
              onChange={onhandlechange}
            />
          </Col>
        </Row>
        <Row className="my-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={data.email}
              onChange={onhandlechange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="text"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={onhandlechange}
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control
            placeholder="1234 Main St"
            name="address"
            value={data.address}
            onChange={onhandlechange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control
            type="number"
            placeholder="Mobile NO"
            name="phone"
            value={data.phone}
            onChange={onhandlechange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control
            type="number"
            placeholder="your mobile number for password recovery"
            name="question"
            value={data.question}
            onChange={onhandlechange}
          />
        </Form.Group>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Button variant="primary" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
