import React, { useState, useEffect } from "react";
import { Authcontext } from "./Auth";

const Authprovider = ({ children }) => {
  const baseurl = "http://localhost:8000";
  const [auth, setauth] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedata = JSON.parse(data);
      setauth({
        ...auth,
        user: parsedata.user,
        token: parsedata.token,
      });
    }
    //eslint-disable-next-line
  }, []);
  return (
    <Authcontext.Provider value={{ auth, setauth,baseurl }}>
      {children}
    </Authcontext.Provider>
  );
};
export default Authprovider;
