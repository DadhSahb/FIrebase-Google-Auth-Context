import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const { register } = React.useContext(ContextProvider);

  return (
    <div className="flex justify-between bg-gray-200 w-full p-4">
      <h1 className="text-center text-2xl font-bold">
        Firebase Google Auth & Context
      </h1>
      <Link to="/signin">Sign In</Link>
    </div>
  );
}
