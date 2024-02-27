  import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../context/Auth";
import { toast } from "react-toastify";
import "./Comp.css";
function Navbaar() {
  const { auth, setauth } = useContext(Authcontext);
  const   handleclick = () => {
    setauth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >🛒Ecommerce APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav">
            <Link to="/">Home</Link>
            {!auth.user ? (
              <>
                {" "}
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </>
            ) : (
              <>
                <NavDropdown title={auth?.user?.name} id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                    >
                      Dashboard
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link onClick={handleclick} to="/login">
                      Logout
                    </Link>{" "}
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            <Link to="/cart">Cart(0)</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
