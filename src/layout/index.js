import React from "react";
import { NavLink } from "react-router-dom";
import { path } from "../routes/constant";

function Layout({ children }) {
  return (
    <div>
      <ul className="horizontal ho2">
        <div className="container">
          <li>
            <NavLink exact to={path.home}>
              หน้าหลัก
            </NavLink>
          </li>
          <li>
            <NavLink to={path.createBook}>สร้างหนังสือ</NavLink>
          </li>
        </div>
      </ul>
      <div className="container content">{children}</div>
    </div>
  );
}

export default Layout;
