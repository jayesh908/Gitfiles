import React from "react";
import "./Admin.css";
// import { Sidebardata } from './Sidebardata';
import { Link, Outlet } from "react-router-dom";
// import NavScrollExample from "./NavScrollExample";
import PersonIcon from "@mui/icons-material/Person";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Authcontext } from "../../context/Auth";
import { useContext } from "react"; 
const AdminDashboard = () => {
  const { auth, setauth } = useContext(Authcontext);

  return (
    <div className="app">
      <div className="sidebar">
        <ul className="sidebarlist">
          <li className="head">
            <h4>Admin Panel</h4>
          </li>
          <Link to="Admindetail">
            <li className="row">
              <div id="icon">
                <AccountCircleIcon />
              </div>
              <div id="title">Admin</div>
            </li>
          </Link>
          <Link to="user">
            <li className="row">
              <div id="icon">
                <PersonIcon />
              </div>
              <div id="title">User</div>
            </li>
          </Link>
          <Link to="product">
            <li className="row">
              <div id="icon">
                <ProductionQuantityLimitsIcon />
              </div>
              <div id="title">Create Product</div>
            </li>
          </Link>
          <Link to="category">
            <li className="row">
              <div id="icon">
                <CategoryIcon />
              </div>
              <div id="title">Create Category</div>
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

export default AdminDashboard;
