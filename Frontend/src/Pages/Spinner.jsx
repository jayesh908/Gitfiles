import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate,useLocation } from "react-router-dom";
const Spinner = ({path="login"}) => {
  const [count, setcount] = useState(5);
  const navigate = useNavigate();
const location = useLocation()
  useEffect(() => {
    const interval = setInterval(() => {
      setcount((prevvalue) => --prevvalue);
    }, 1000);
    count === 0 && navigate(`/${path}`,{
        state:location.pathname
    });
    return () => clearInterval(interval);
  }, [navigate, count,location,path]);
  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <h1 className="text-3xl">Redirecting to you in {count} second</h1>
        <div className="spinner-border " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </Container>
  );
};

export default Spinner;
