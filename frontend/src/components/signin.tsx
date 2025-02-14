import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import LabelledInput from "./auth/LabelledInput";
import { Quote } from "./Quote";
import { BACKEND_URL } from "../config";
import { signInInput, SignInInput } from "@manjjott/common";

export default function Signin() {
  const [signinInputs, setSigninInputs] = useState<SignInInput>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignin = async () => {
    // validation from zod
    const { success, error } = signInInput.safeParse(signinInputs);
    if (!success) {
      alert("Invalid Input" + error.errors[0].message);
      return;
    }
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        signinInputs
      );
      const jwt = response.data;
      console.log(response.data);
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      alert("Error signing in");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mt-100">
          <div className="text-center text-xl font-extrabold">
            Sign in to your account
          </div>
          <div className="text-center text-sm font-semibold">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Create one here
            </Link>
          </div>
          <div className="pl-20 pr-20">
            <LabelledInput
              label="Email"
              type="email"
              placeholder="joe@email.com"
              onChange={(e) => {
                setSigninInputs({ ...signinInputs, email: e.target.value });
              }}
            />
          </div>
          <div className="pl-20 pr-20">
            <LabelledInput
              label="Password"
              type="password"
              placeholder="pass123"
              onChange={(e) => {
                setSigninInputs({ ...signinInputs, password: e.target.value });
              }}
            />
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={handleSignin}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign in
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
