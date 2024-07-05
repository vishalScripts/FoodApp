import React from "react";
import { Container } from "../components/index";
import bgImg from "../assets/pexels-vojtech-okenka-127162-1055272.jpg";
import { Link } from "react-router-dom";
import { login } from "../services/authService";
import { useForm } from "react-hook-form";
import {Input, Button} from "../components/index"
import WarningIcon from "@mui/icons-material/Warning";
import GoogleIcon from "../assets/google.svg"
import GithubIcon from "../assets/github.svg"


function Signup() {

  const { register, handleSubmit } = useForm();

  const signupFunc = async (data) => {
    console.log("clicked");
    console.log(data);
    const log = await login({ ...data });
    console.log(log);
  };
  return (
    <div className="w-full h-[calc(100vh-56px)]  bg-gradient-to-tr from-gradientColStart to-gradientColStop">
      <Link to={"/login"}> Login </Link>
      <Container clasname={"h-full"}>
        <div className=" w-full h-full flex items-center justify-center ">
          <div className="w-9/12 h-4/5 bg-white bg-opacity-35 backdrop-filter  backdrop-blur-3xl shadow-lg rounded-lg grid grid-cols-12  overflow-hidden">
            {/*  Row 1 */}
            <div className="bg-green-500 h-full w-full col-span-5 relative">
              <img
                src={bgImg}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/*  Row 2 */}

            <div className=" h-full w-full flex p-6 col-span-7">
              <form
                onSubmit={handleSubmit(signupFunc)}
                className="h-3/5 w-full flex flex-col  justify-between"
              >
                <div className="flex flex-col items-center justify-between mb-4">
                  <h1 className="text-3xl font-semibold text-slate-950">
                    Create an Account
                  </h1>
                  <a href="" className="text-sm ">
                    Already have an account?
                    <span className="underline hover:text-blue-800 duration-200">
                      {" "}
                      Login
                    </span>
                  </a>
                </div>
                <Input
                  label="What should we call you?"
                  placeholder="username"
                  {...register("username")}
                />
                <Input
                  label="What's your email?"
                  placeholder="eg. vishal@123.com"
                  {...register("email")}
                />
                <Input
                  label="Create password"
                  placeholder="password"
                  {...register("password")}
                />
                <a className="text-sm text-red-400 italic opacity-0">
                  {" "}
                  <WarningIcon fontSize="small" /> This is a error
                </a>
                <div className="w-full flex flex-col mt-2">
                  <p className="text-xs">
                    By creating an account,you agree to the{" "}
                    <a
                      href="#"
                      className="underline hover:text-blue-800 duration-200 italic"
                    >
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="underline hover:text-blue-800 duration-200 italic"
                    >
                      Privacy Policy
                    </a>
                  </p>
                  <Button type="submit" classname="w-full">
                    Submit
                  </Button>
                </div>
                <div className="w-full  flex flex-col gap-2">
                  <p className="text-base text-slate-700">Or continue with - </p>
                  <div className="grid grid-cols-2 gap-2">
                    {/* div 1 */}
                    <div className=" cursor-pointer flex flex-row items-center justify-center gap-2 px-2  w-full  py-2  h-10 border border-1 border-black rounded-full bg-white hover:bg-opacity-75  hover:border-slate-700">
                      <img
                        src={GoogleIcon}
                        alt="icon"
                        className="h-full  object-cover object-center"
                      />
                      <span>Google</span>
                    </div>
                    {/* div 2 */}
                    <div className="cursor-pointer flex flex-row items-center justify-center gap-2 px-2 w-full  py-2  h-10 border border-1 border-black hover:bg-opacity-75  hover:border-slate-700 rounded-full bg-white duration-200 ">
                      <img
                        src={GithubIcon}
                        alt="icon"
                        className="max-h-full  object-cover object-center"
                      />
                      <span>Github</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
