import React from "react";
import { Authcontext } from "../../context/Auth";
import { useContext } from "react";
import { Container } from "react-bootstrap";
const Admindetail = () => {
  const { auth, setauth } = useContext(Authcontext);
  return (
    <Container>
      <div className="row ">
            <div  className="my-3"><h1 className="text-4xl">Admin Details</h1></div>
        <div className="card p-4">
          <h2 className="text-2xl">Admin-Name:{auth?.user?.name}</h2>
          <h2 className="text-2xl">Admin Email:{auth?.user?.email}</h2>
          <h2 className="text-2xl">Admin Mobile:{auth?.user?.phone}</h2>
        </div>
      </div>
    </Container>
  );
};

export default Admindetail;
