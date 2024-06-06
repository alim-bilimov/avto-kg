import React from "react";
import logo from "../../assets/image 1.svg";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { ImBubbles2 } from "react-icons/im";
import { FaHandshake } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";

const Header = () => {
  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header">
            <div className="header--div">
              <img src={logo} alt="" width={60} />
              <div className="column--div">
                <h1 className="header--h1">
                  ВЫКУП
                  <span className="header--span" style={{ color: "orange" }}>
                    .KG
                  </span>
                </h1>
                <p>срочный выкуп авто в Кыргызстане</p>
                <h1>alimsssss</h1>
              </div>
            </div>
            <nav>
              <NavLink
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                to="/sale"
              >
                {" "}
                <FaHandshake
                  style={{ color: "#027777", fontSize: "27px" }}
                />{" "}
                Выкуп
              </NavLink>
              <NavLink
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                to="/WriteUs"
              >
                {" "}
                <ImBubbles2 style={{ color: "#027777" }} /> Написать нам
              </NavLink>
              <NavLink
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                to="/"
              >
                {" "}
                <TiHome style={{ color: "#027777" }} /> Главная
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
