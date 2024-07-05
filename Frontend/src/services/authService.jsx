import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/users";

const login = async ( password, username) => {
  try {
    const response = await axios.post(API_URL+"/login", { password, username})

    console.log(response.data)
    return response
  } catch (error) {
    console.log("error in signup  ", error)
  }
};

const signup = async (username, email, password, role="Admin") => {
  try {
    // console.log("here in Auth services", password, username)
    const response = await axios.post(API_URL + "/account", {
      username,
      email,
      password,
      role,
    });
    console.log(response);
    return response;

    console.log("This is response ", response);
    return response;
  } catch (error) {
    console.log("Error in login :" + error);
  }
};

export  {signup , login}