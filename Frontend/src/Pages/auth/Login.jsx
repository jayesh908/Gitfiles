import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Authcontext } from "../../context/Auth";
import "./authstyle/Auth.css";
import { useState } from "react";

function Login({ baseurl }) {
  const { auth, setauth } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setdata] = useState({
    email: "",
    password: "",
  });

  const onhandlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseurl}/setlogin`, data);
      console.log(res.data);
      console.log(data);
      toast.success("Login Successfull");
      setauth({
        ...auth,
        user: res.data.user,
        token: res.data.token,
      });
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate(location.state || "/");
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  return (
    // <h3 className="text-center mt-5">Register</h3>
    <div className="form-container">
      <Form onSubmit={handlesubmit}>
        <h4 className="title">LOGIN</h4>
        <Row className="my-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
              value={data.email}
              onChange={onhandlechange}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              type="text"
              required
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={onhandlechange}
            />
          </Form.Group>
        </Row>

        <div className="my-3">
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              navigate("/forget");
            }}
          >
            Forget Password
          </Button>
        </div>
        <div className="my-3">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
