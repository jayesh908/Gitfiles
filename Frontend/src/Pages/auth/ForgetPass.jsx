import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useContext } from "react";
import { Authcontext } from "../../context/Auth";
import { toast } from "react-toastify";
import "./authstyle/Auth.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Forgotpass() {
  const [data, setdata] = useState({
    email: "",
    newpassword: "",
    question: "",
  });
  const { baseurl } = useContext(Authcontext);
  const onhandlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseurl}/forget`, data);
      console.log(res.data);

      console.log(data);
      toast.success("Registered Successfull");
      navigate("/login");
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
              placeholder="New-Password"
              name="newpassword"
              value={data.newpassword}
              onChange={onhandlechange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="number"
              placeholder="Enter your phone Number"
              name="question"
              value={data.question}
              onChange={onhandlechange}
            />
          </Form.Group>
        </Row>

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
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Forgotpass;
