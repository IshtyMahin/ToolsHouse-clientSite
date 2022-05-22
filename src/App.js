import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview";
import AllUser from "./Pages/Dashboard/AllUser";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ContactUs from "./Pages/Home/ContactUs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import SignUp from "./Pages/Login/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addProduct" element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>
          }></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={<AllUser></AllUser>}></Route>
          <Route
            path="manageOrder"
            element={
              <RequireAdmin>
                <ManageAllOrder></ManageAllOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProduct"
            element={
            <RequireAdmin>
              <ManageProduct></ManageProduct>
            </RequireAdmin>
          }
          ></Route>
        </Route>

        <Route path="contact" element={<ContactUs />}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
