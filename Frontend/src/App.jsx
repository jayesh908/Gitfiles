import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Navbaar from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
// import Lay from "./Pages/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Pages/auth/Register";
import Login from "./Pages/auth/Login";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
// import { Authcontext } from "./context/Auth";
import Authprovider from "./context/AuthProvider";
import Private from "./Pages/User/Routes/Private";
import ForgetPass from "./Pages/auth/ForgetPass";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Adminroute from "./Pages/Admin/Adminroute";
import Admindetail from "./Pages/Admin/Admindetail";
import CreateCategory from "./Pages/Admin/CreateCategory";
import User from "./Pages/User/User";
import CreateProduct from "./Pages/Admin/CreateProduct";
import Navbaar from "./PAges/Navbar";
import UserDashboard from "./Pages/User/UserDashboard";
import Profile from "./Pages/User/Profile";
import Orders from "./Pages/User/Orders";
function App() {
  const baseurl = "http://localhost:8000";
  return (
    <Authprovider>
      <Router>
        <Navbaar />
        <ToastContainer />
        <Routes>  
          <Route path="/" element={<Home/>}></Route>

          {/* <Route path="/dashboard" element={<Private/>}>
          </Route> */}
          <Route path="/dashboard" element={<Private/>}>
            <Route path="user" element={<UserDashboard/>}>
              <Route path="profile" element={<Profile/>}></Route>
              <Route path="Order" element={<Orders/>}></Route>
            </Route>
          </Route>
          <Route path="/dashboard" element={<Adminroute/>}>
            <Route path="admin" element={<AdminDashboard/>}>
            <Route path="Admindetail" element={<Admindetail/>}></Route>
            <Route path="category" element={<CreateCategory/>}></Route>
            <Route path="user" element={<User/>}></Route>
            <Route path="product" element={<CreateProduct/>}></Route>

            </Route>
          </Route>


          <Route path="/contact" element={<Contact/>}></Route>
          <Route
            path="/register"
            element={<Register baseurl={baseurl} />}
          ></Route>
          <Route path="/Login" element={<Login baseurl={baseurl} />}></Route>
          <Route path="/forget" element={<ForgetPass/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </Authprovider>
  );
}
export default App;
