import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useHistory } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function SignIn() {
  const { googleSignIn, user } = UserAuth();
  const history = useHistory();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) {
      history.push("/account");
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-8">SignIn</h1>
      <div className="max-w-[240px] m-auto py-4">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
}
