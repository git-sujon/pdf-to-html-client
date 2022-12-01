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
     
    </div>
  );
};

export default ApplyForPosition;
