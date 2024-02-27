import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Authcontext } from "../../../context/Auth";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../../Spinner";
const Private = () => {
  const [ok, setok] = useState(false);
  const { auth, setauth, baseurl } = useContext(Authcontext);

  useEffect(() => {
    const autocheck = async () => {
      const res = await axios.get(`${baseurl}/auth`, {
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
  return ok ? <Outlet /> : <Spinner/>;
};

export default Private;
