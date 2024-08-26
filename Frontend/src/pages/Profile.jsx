import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Popup } from "../components";

import { pizzaPfp, burgerPfp,  } from "../assets/PfpBg";

function Profile() {
  const [userData, setUserData] = useState([])
  const userLoginData = useSelector((state) => state.auth.user);
  const userStatus = useSelector((state) => state.auth.user);
  const fetchData = async () => {
    try {
      const res = await axios.get("/api/v1/ecommerce/profile");
      console.log(res?.data.data);
      setUserData(res?.data?.data);
    } catch (error) {
      throw new Error(error, "Error in profile");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);
  console.log(userLoginData);
  return (
    <div className="py-4 bg-slate-400">
      <div>
        <img src={burgerPfp} className="w-50  " alt="Pfp Background"  />
      </div>
    </div>
  );
}

export default Profile;
