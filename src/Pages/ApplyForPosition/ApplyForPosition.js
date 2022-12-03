import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../../components/Loader/Loader";
import LoginAndLogoutButton from "../../components/LoginAndLogoutButton/LoginAndLogoutButton";
import ViewDetails from "../ViewDetails/ViewDetails";
import  './ApplyForPosition.css'

const ApplyForPosition = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [open, setOpen ] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const skills = [
    "PHP",
    "Python",
    "SQL",
    "CSS",
    "HTML5",
    "JavaScript",
    "React",
  ];

  const formHandler = (event) => {


    let skills={}
   const userInfo=  {
        name: user?.name,
        email: user?.email,
        phone: event.phone,
        linkedin: event.linkedin,

        skills : [
       event.PHP && 'PHP',
         event.Python && 'Python',
      event.SQL && "SQL",
     event.CSS && 'CSS',
    event.HTML5 && 'HTML5',
        event.JavaScript && 'JavaScript',
event.React && 'React',
        ],

       
        uploadCV: event.uploadCV[0],
    }

   

    setUserDetails(userInfo)


    // if(user &&  userInfo) {
    //   fetch(`http://localhost:5000/usersInfo`, {
    //     method:'POST',
    //     headers:{
    //       "content-type" : "application/json"
    //     },
    //     body: JSON.stringify(userInfo)
    //   })
    //   .then(res=> res.json())
    //   .then(data=> {
    //     console.log(data)
    //     setOpen(false)
    //   })
    // }

 


  }

  if (isLoading){
    return <Loader></Loader>
  }

  return (
    <div className="w-2/5 mx-auto my-20">
      {/* apply position  */}
      <div className=" space-y-4">
        {/* Login Button */}
        <div>
          <LoginAndLogoutButton></LoginAndLogoutButton>
        </div>
        <div className="">
          <h2 className="text-2xl text-red-500 font-semibold">
            Apply for Position
          </h2>
        </div>
        <form onSubmit={handleSubmit(formHandler)} className="space-y-4">
          {/* Name  */}
          <div className="flex items-center justify-between ">
            <label
              htmlFor="UserName"
              className="block asterisk text-sm font-semibold  text-gray-700  "
            >
              Name
            </label>

            <input
              type="text"
              id="UserName"
              {...register("name")}
              defaultValue={user?.name}
              required
              placeholder="Type your full name"
              className="mt-1   rounded-md block w-4/5 border-2 border-gray-300 shadow-sm sm:text-sm py-2 px-2"
            />
          </div>

          {/* Email  */}
          <div className="flex items-center justify-between ">
            <label
              htmlFor="UserEmail"
              className="block asterisk text-sm font-semibold  text-gray-700  "
            >
              Email
            </label>

            <input
              type="email"
              id="UserEmail"
              {...register("email")}
              defaultValue={user?.email}
              required
              placeholder="Type your full name"
              className="mt-1  rounded-md block w-4/5 border-2 border-gray-300 shadow-sm sm:text-sm py-2 px-2 "
            />
          </div>
          {/* Phone  */}
          <div className="flex items-center justify-between ">
            <label
              htmlFor="UserPhone"
              className="block asterisk  text-sm font-semibold  text-gray-700  "
            >
              Phone
            </label>

            <input
              type="tel"
              id="UserPhone"
              {...register("phone")}
              required
              placeholder="Type a valid number e.g 01812345678"
              className="mt-1  rounded-md block w-4/5 border-2 border-gray-300 shadow-sm sm:text-sm py-2 px-2"
            />
          </div>
          {/* Linkedin  */}
          <div className="flex items-center justify-between ">
            <label
              htmlFor="UserLinkedin"
              className="block asterisk text-sm font-semibold  text-gray-700  "
            >
              Linkedin
            </label>

            <input
              type="url"
              id="UserLinkedin"
              {...register("linkedin")}
              required
              placeholder="Paste Your Linkedin profile"
              className="mt-1  rounded-md block w-4/5 border-2 border-gray-300 shadow-sm sm:text-sm py-2 px-2"
            />
          </div>

          <div>
            <div className="flex text-gray-600">
            <h4 className="asterisk  font-medium">
              Select Your Skill</h4> <p className="font-medium text-normal"> (You have to select a minimum of one skill to submit)</p>
            </div>

            {/* select tag  */}
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center mt-3">
                <input
                  type="checkbox"
               
                  {...register(`${skill}`)}
                  className=" border-gray-300 bg-white "
                />
                <label className="text-sm font-semibold  text-gray-700 block   ml-2">
                  {skill}
                </label>
              </div>
            ))}
          </div>

          {/* CV Upload  */}

          <div className="flex items-center  ">
            <label
              htmlFor="UserLinkedin"
              className="block text-sm font-semibold  text-gray-700  "
            >
              CV (pdf Format)
            </label>

            <input
              type="file"
              id="uploadCV"
              {...register("uploadCV")}
              required
              className="mt-1 font-semibold hide text-white shadow-sm sm:text-sm py-2 px-2"
            />
          </div>

          <div className="mt-20" >
            <button type="submit" className="md:w-1/2 block text-center mx-auto border border-red-400 bg-red-400 text-sm font-medium text-white hover:text-black  px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring ">
          Preview
          </button>
          </div>
        </form>
       
      </div>
      {/* show profile and Skill section  */}
      <div className={`${open ? ' fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto' : '' }  mt-20`}>
      <ViewDetails userDetails={userDetails}></ViewDetails>
      </div>
    </div>
  );
};

export default ApplyForPosition;
