import React, { useState } from "react";
import { Container, Loader } from "./index";
import bgImg from "../assets/pexels-vojtech-okenka-127162-1055272.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Buttons/Button";
import { login } from "../services/authService";
import WarningIcon from "@mui/icons-material/Warning";
import GoogleIcon from "../assets/google.svg";
import GithubIcon from "../assets/github.svg";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { authLogin } from "../store/authSlice";

function LoginComp({ to = "/" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const [cookies, setCookie] = useCookies(["accessToken"]);

  const { register, handleSubmit } = useForm();

  const loginFunc = async (data) => {
    setLoading(true);
    const loginRes = await login({ ...data });
    const dis = dispatch(authLogin(loginRes.data.data.user));
    console.log(dis);
    setCookie("accessToken", loginRes.data.data.accessToken);
    console.log(loginRes);
    navigate(to);
    setLoading(false);
  };

  return (
    <>
      <Link to={"/login"}>Login</Link>
      <Container classname={"h-full"}>
        <div className="w-full h-full py-6 flex items-center justify-center">
          <div className="w-9/12 h-4/5 bg-white bg-opacity-35 backdrop-filter backdrop-blur-3xl shadow-lg rounded-lg grid grid-cols-12 overflow-hidden">
            <div className="h-full w-full flex p-6 col-span-7">
              <form
                onSubmit={handleSubmit(loginFunc)}
                className="h-3/5 w-full flex flex-col justify-between"
              >
                <fieldset disabled={loading ? "disabled" : ""}>
                  <div className="flex flex-col items-center justify-between mb-4">
                    <h1 className="text-3xl font-semibold text-slate-950">
                      Create an Account
                    </h1>
                    <a href="" className="text-sm">
                      Already have an account?
                      <span className="underline hover:text-blue-800 duration-200">
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
                    label="Create password"
                    placeholder="password"
                    {...register("password")}
                  />
                  <a className="text-sm text-red-400 italic opacity-0">
                    <WarningIcon fontSize="small" /> This is an error
                  </a>
                  <div className="w-full flex flex-col mt-2">
                    <p className="text-xs">
                      By creating an account, you agree to the{" "}
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
                  <div className="w-full flex flex-col gap-2">
                    <p className="text-base text-slate-700">
                      Or continue with -
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="cursor-pointer flex flex-row items-center justify-center gap-2 px-2 w-full py-2 h-10 border border-1 border-black rounded-full bg-white hover:bg-opacity-75 hover:border-slate-700">
                        <img
                          src={GoogleIcon}
                          alt="icon"
                          className="h-full object-cover object-center"
                        />
                        <span>Google</span>
                      </div>
                      <div className="cursor-pointer flex flex-row items-center justify-center gap-2 px-2 w-full py-2 h-10 border border-1 border-black hover:bg-opacity-75 hover:border-slate-700 rounded-full bg-white duration-200">
                        <img
                          src={GithubIcon}
                          alt="icon"
                          className="max-h-full object-cover object-center"
                        />
                        <span>Github</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="bg-green-500 h-full w-full col-span-5 relative">
              <img
                src={bgImg}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/*  */}
          </div>
          {loading ? (
            <>
              <div className=" absolute flex items-center justify-center bg-slate-200 bg-opacity-25 w-full h-screen px-16 py-4 ">
                <div>
                  <Loader />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </>
  );
}

export default LoginComp;
