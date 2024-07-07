import axios from "axios";
import { useCookies } from "react-cookie";

const API_URL = "http://localhost:8080/api/v1/users";

const login = async ({ password, username }) => {
  console.log("its me i am the proble its me ", password, username);
  try {

    const login = await axios.post(API_URL + "/login", {
      password,
      username,
    });

    return login;
  } catch (error) {
    console.log("error in signup  ");
    throw new Error(error)
  }
};

const signup = async ({ email, password, role = "ADMIN", username }) => {
  try {
    console.log("here in Auth services", email, password, role, username);
    const response = await axios.post(API_URL + "/register", {
      email,
      password,
      role,
      username,
    });

    login({ password, username });

    return response;
  } catch (error) {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
      throw new Error(error.response.data.message || "Error during signup");
    } else if (error.request) {
      console.error("No response received:", error.request);
      throw new Error("No response received from the server");
    } else {
      console.error("Error setting up request:", error.message);
      throw new Error("Error setting up request");
    }
  }
};

export { signup, login };
