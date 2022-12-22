import React from "react";
import { ContextProvider } from "../context/ContextProvider";

export default function Navbar() {
  const { register } = React.useContext(ContextProvider);

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_logo">Messenger</div>
        <div className="navbar_links">
          <li>
            <span className="navbar_img"></span>
          </li>
          <li>
            <button className="navbar_btn" onClick={register}>
              Register
            </button>
          </li>
        </div>
      </div>
    </div>
  );
}
