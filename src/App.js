/*
 * @Author: weiyayun
 * @Date: 2022-05-13 14:40:27
 * @Interface:
 * @Description:
 */
import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Page/Home";
import About from "./Page/About";
function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/home">去home</Link>
        <Link to="/about">去about</Link>
      </div>
      <div>
        <Suspense>
          <Routes>
            {/* <Route strict exact path="/home" element={<Home></Home>}></Route> */}
            {/* <Route path="/home/:homeType?" element={<Home></Home>}></Route> */}
            {/* 嵌套路由 */}
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            {/* <Route strict exact path="/home2" element={<Home></Home>}></Route>
            <Route strict exact path="/home3" element={<Home></Home>}></Route>
            <Route strict exact path="/home4" element={<Home></Home>}></Route> */}
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}
export default App;
