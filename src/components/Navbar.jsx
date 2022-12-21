import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_logo">Messenger</div>
        <div className="navbar_links">
          <li>
            <span className="navbar_img"></span>
          </li>
          <li>
            <button>Register</button>
          </li>
        </div>
      </div>
    </div>
  );
}
