import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductAdminEdit from "../components/AdminProduct/ProductAdminEdit";
import ProductAdminList from "../components/AdminProduct/ProductAdminList";
import ProductAdminPost from "../components/AdminProduct/ProductAdminPost";
import { Checkout } from "../components/Checkout";
import AdminHomePage from "./AdminHomePage";
import Cart from "./Cart";
import { Home } from "./Home";
import { Productpage } from "./Productpage";
import SingleProduct from "./SingleProduct";

import { PrivateRoute } from "../components/PrivateRoute";
import UsersAdmin from '../components/AdminProduct/UsersAdmin'

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/adminedit/:id" element={<ProductAdminEdit />} />
      <Route path="/adminhome" element={<AdminHomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element="" />
      <Route path="*" element={<h1>404 page not found</h1>} />
      <Route path="/productpage" element={<Productpage />} />
      <Route path="/productpage/:id" element={<SingleProduct />} />
      <Route path="/adminget" element={<ProductAdminList />} />
      <Route path="/adminpost" element={<ProductAdminPost />} />
      <Route path="/useradmin" element={<UsersAdmin/>} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};
