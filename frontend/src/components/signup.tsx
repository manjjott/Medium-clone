import LabelledInput from "./auth/LabelledInput";
import { Quote } from "./Quote";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUpInput, SignUpInput } from "@manjjott/common";
import { BACKEND_URL } from "../config";
import axios from "axios";

export default function Signup() {
  const [signupInputs, setSignupInputs] = useState<SignUpInput>({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();
  const handleSignup = async () => {
    // validation from zod
    const { success, error } = signUpInput.safeParse(signupInputs);
    if (!success) {
      alert("Invalid Input" + error.errors[0].message);
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        signupInputs
      );
      if (response.data.error) {
        alert("Please enter valid email and password");
        return;
      }
      const jwt = response.data.token;
      console.log(response.data);
      localStorage.setItem("token", jwt);
      navigate("/signin");
    } catch (e) {
      alert("Error signing up");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mt-100">
          <div className="text-center text-xl font-extrabold">
            {" "}
            Create an account
          </div>
          <div className="text-center text-sm font-semibold">
            Already a member?{" "}
            <Link
              to="/signin"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Sign in here
            </Link>
          </div>
          <div className="pl-20 pr-20">
            {" "}
            <LabelledInput
              label="Email"
              type="email"
              placeholder="joe@email.com"
              onChange={(e) => {
                setSignupInputs({ ...signupInputs, email: e.target.value });
              }}
            />{" "}
          </div>
          <div className="pl-20 pr-20">
            {" "}
            <LabelledInput
              label="Password"
              type="password"
              placeholder="pass123"
              onChange={(e) => {
                setSignupInputs({ ...signupInputs, password: e.target.value });
              }}
            />{" "}
          </div>
          <div className="pl-20 pr-20">
            {" "}
            <LabelledInput
              label="Username"
              type="text"
              placeholder="joe doe"
              onChange={(e) => {
                setSignupInputs({ ...signupInputs, name: e.target.value });
              }}
            />{" "}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={handleSignup}
              type="button"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </>
  );
}
