import React from "react";
import Header from "../components/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="body"
          //   className="h-full w-full"
        />
      </div>
      <div className="absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 bg-black text-white">
        <form action="">
          <h1 className="font-bold text-2xl">Sign IN</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-600"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-600"
          />
          <button className="my-2 py-2 w-full bg-red-500">SignIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
