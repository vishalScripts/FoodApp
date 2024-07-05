import React from "react";
import { Container } from "../components/index";
import bgImg from "../assets/pexels-vojtech-okenka-127162-1055272.jpg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Buttons/Button";
import {login} from "../services/authService"


function Login() {
  const location = useLocation();
  console.log(location);

  const { register, handleSubmit } = useForm();

  const loginFunc = async (data) => {
    console.log("clicked")
    console.log(data);
    const log = await login({...data})
    console.log(log)
  };

  return (
    <div className="w-full h-[calc(100vh-56px)] bg-gradient-to-tr from-gradientColStart to-gradientColStop">
      <Link to={"/signup"}> Signup </Link>
      <Container className={"h-full"}>
        <div className="w-full h-full flex items-center justify-center flex-col gap-4">
          <div className="w-3/5 h-4/5 bg-white bg-opacity-35 backdrop-filter backdrop-blur-3xl shadow-lg rounded-lg flex-row flex overflow-hidden">
            {/* Row 1 */}
            <div className="h-full w-full flex">
              <form onSubmit={handleSubmit(loginFunc)}>
                <Input label="Username" {...register("username")} />
                <Input label="Password" {...register("password")} />
                <Button type="submit" classname="w-full">Submit</Button>
              </form>
            </div>
            {/* Row 2 */}
            <div className="bg-green-500 h-full w-full relative">
              <img
                src={bgImg}
                alt="image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="bg-white bg-opacity-35 backdrop-filter backdrop-blur-3xl shadow-lg rounded-s-full flex-row flex overflow-hidden">
            <NavLink to={"/signup"} className="px-4">
              <a>Signup</a>
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
