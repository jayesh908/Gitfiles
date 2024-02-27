import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { Authcontext } from "../../context/Auth";
import Spinner from "../Spinner";

const Adminroute = () => {
  const [ok, setok] = useState(false);
  const { auth, setauth, baseurl } = useContext(Authcontext);

  useEffect(() => {
    const autocheck = async () => {
      const res = await axios.get(`${baseurl}/admin`, {
        headers: {
          Authorization: auth?.token,
        },
      });
      if (res.data.ok) {
        setok(true);
      } else {
        setauth(false);
      }
    };
    if (auth?.token) autocheck();
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner path=""/>;
};

export default Adminroute;
