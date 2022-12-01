import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LoginAndLogoutButton from "../../components/LoginAndLogoutButton/LoginAndLogoutButton";

const ApplyForPosition = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      {/* apply position  */}
      <div className="w-2/5 mx-auto my-20 space-y-4">
        {/* Login Button */}
        <div>
          <LoginAndLogoutButton></LoginAndLogoutButton>
        </div>
        <div className="">
          <h2 className="text-2xl text-red-500 font-semibold">
            Apply for Position
          </h2>
        </div>
 
      </div>
    </div>
  );
};

export default ApplyForPosition;
