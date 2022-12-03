import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const ProfileSection = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    

  return (
    <div className=" text-gray-700 h-44 border">
      <div className="flex justify-center">
        <div className="block  bg-white max-w-sm text-center">
            <div>
                <img src="https://resumespice.com/wp-content/uploads/2021/03/38.png" alt="" />
            </div>
           <div className="p-5 flex flex-col justify-center mt-[-64px]">
           <div>
                { user?.picture ?
                    <img className="rounded-full w-24 mx-auto" src={user?.picture} alt="" />
                    :
                    <img className="rounded-full w-24 mx-auto" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" />
                }
            </div>
            <p className="font-semibold text-medium ">{user?.name}</p>
            <p className="font-semibold text-sm">Software Engineer</p>
           </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
