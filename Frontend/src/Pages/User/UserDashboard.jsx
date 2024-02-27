import React from "react";
import "../Admin/Admin.css";
import { Link, Outlet } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Authcontext } from "../../context/Auth";
import { useContext } from "react";
const UserDashboard = () => {
  const { auth, setauth } = useContext(Authcontext);

  return (
    <div className="app">
      <div className="sidebar">
        <ul className="sidebarlist">
          <li className="head">
            <h4>User Dashboard</h4>
          </li>
          <Link to="profile">
            <li className="row">
              <div id="icon">
                <AccountCircleIcon />
              </div>
              <div id="title">Profile</div>
            </li>
          </Link>
          <Link to="order">
            <li className="row">
              <div id="icon">
                <ProductionQuantityLimitsIcon />
              </div>
              <div id="title">Order</div>
            </li>
          </Link>
          <Link to="wishlist">
            <li className="row">
              <div id="icon">
                < FavoriteBorderOutlinedIcon/>
              </div>
              <div id="title">Wishlist</div>
            </li>
          </Link>
        </ul>
      </div>

      <div id="main">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
