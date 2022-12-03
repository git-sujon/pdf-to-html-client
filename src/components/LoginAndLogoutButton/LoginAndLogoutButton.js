import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const LoginAndLogoutButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>

      {
            !user ?
        
        <button
        onClick={() => loginWithRedirect()}
        className="flex items-center justify-between rounded-lg border border-red-400 bg-red-400 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"

      >
        <span className="text-sm font-medium text-white hover:text-black"> Apply With Linkedin</span>
      </button>

     :
      <button
      onClick={() => logout({ returnTo: window.location.origin })}

        className="flex items-center justify-between rounded-lg border border-red-400 bg-red-400 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"

      >
        <span className="text-sm font-medium text-white hover:text-black"> Logout From Linkedin</span>
      </button>}
     
    </>
  );
};

export default LoginAndLogoutButton;
