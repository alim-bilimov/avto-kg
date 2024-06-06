import React from "react";
import Home from "../pages/home";
import { Route, Routes } from "react-router-dom";

const PUBLIC = [{ path: "/", elmenet: <Home />, key: 1 }];
const MainRoute = () => {
  return (
    <>
      <Routes>
        {PUBLIC.map((el) => (
          <Route path={el.path} element={el.elmenet} key={el.key} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoute;
