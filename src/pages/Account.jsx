import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

export default function Account() {
  const { user, logout } = UserAuth();
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user === null) {
  //     history.go("/");
  //   }
  // }, [user]);
  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div>
        <p>Welcome, {user?.displayName} </p>
      </div>
      <button className="border py-2 px-5 mt-10" onClick={handleSignOut}>
        Logout
      </button>
    </div>
  );
}
