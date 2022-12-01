import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const LoginAndLogoutButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <button
        onClick={() => loginWithRedirect()}
        className="flex items-center justify-between rounded-lg border border-red-400 bg-red-400 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"

      >
        <span className="text-sm font-medium text-white hover:text-black"> Apply With Linkedin</span>
      </button>



      {/* <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className="inline-flex items-center rounded border border-red-400 px-8 py-3 text-red-400 hover:bg-red-400 hover:text-white focus:outline-none focus:ring active:bg-red-500"
      href="/download"
    >
      <span className="text-sm font-medium"> Logout</span>

      <svg
        className="ml-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button> */}
    </>
  );
};

export default LoginAndLogoutButton;
