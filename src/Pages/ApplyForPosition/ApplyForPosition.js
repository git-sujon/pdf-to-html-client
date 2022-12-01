import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import LoginAndLogoutButton from "../../components/LoginAndLogoutButton/LoginAndLogoutButton";

const ApplyForPosition = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
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
    const cvFile= event.uploadCV
 
   const userInfo=  {
        name: user?.name,
        email: user?.email,
        phone: event.phone,
        linkedin: event.linkedin,
        PHP: event.PHP,
        Python: event.Python,
        SQL: event.SQL,
        CSS: event.CSS,
        HTML5: event.HTML5,
        JavaScript: event.JavaScript,
        React: event.React,
        uploadCV: event.uploadCV[0],
    }
    console.log(cvFile)

  }

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
        <form onSubmit={handleSubmit(formHandler)} className="space-y-4">
          {/* Name  */}
          <div className="flex items-center justify-between ">
            <label
              htmlFor="UserName"
              className="block text-sm font-semibold  text-gray-700  "
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
              className="mt-1  rounded-md block w-4/5 border-2 border-gray-300 shadow-sm sm:text-sm py-2 px-2"
            />
          </div>

          {/* Email  */}
          <div className="flex items-center justify-between ">
            <label
              htmlFor="UserEmail"
              className="block text-sm font-semibold  text-gray-700  "
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
              className="block text-sm font-semibold  text-gray-700  "
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
              className="block text-sm font-semibold  text-gray-700  "
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
            <h4>
              Select Your Skill{" "}
              <span>(You have to select a minimum of one skill to submit)</span>{" "}
            </h4>

            {/* select tag  */}
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center mt-3">
                <input
                  type="checkbox"
                  id="PHP"
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

          <div className="mt-10">
            <button type="submit" className="md:w-1/2 block text-center mx-auto border border-red-400 bg-red-400 text-sm font-medium text-white hover:text-black  px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring ">
          Preview
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForPosition;
