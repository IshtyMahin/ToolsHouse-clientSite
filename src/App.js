import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview";
import AllUser from "./Pages/Dashboard/AllUser";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageAllOrder from "./Pages/Dashboard/ManageAllOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";

import Home from "./Pages/Home/Home";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import SignUp from "./Pages/Login/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer";
import MyPortfolio from "./Pages/MyProfolio/MyPortfolio";
import Payment from "./Pages/Dashboard/Payment";
import Blogs from "./Pages/Blogs/Blogs";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="blog" element={<Blogs />}></Route>
        <Route path="portfolio" element={<MyPortfolio />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="product/:id" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>}>
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <AllUser></AllUser>
            </RequireAdmin>
          }></Route>
          <Route path="addProduct" element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>
          }></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="orders" element={<MyOrders></MyOrders>}></Route>
          
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
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
