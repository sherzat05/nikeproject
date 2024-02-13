import React from "react";
import Admin from "../components/admin/Admin";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";
import Register from "../components/autent/register";
import SignIn from "../components/autent/signIn";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/", element: <ProductsPage />, id: 2 },
    { link: "register", element: <Register/>, id: 3},
    { link: "sign_in", element: <SignIn/>, id: 4}

  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
