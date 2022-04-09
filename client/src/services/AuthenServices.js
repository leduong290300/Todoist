import { apiUrl } from "../api/index";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const AuthenServices = {
  handleLogin,
  handleRegister,
  handleLogout,
  verifyUser,
};

async function verifyUser() {
  if (localStorage.getItem("data")) {
    setAuthToken(localStorage.getItem("data"));
  }
  try {
    const { data } = await axios.get(`${apiUrl}/auth`);
    if (data.success) {
      return data;
    }
  } catch (error) {
    localStorage.removeItem("data");
    setAuthToken(null);
  }
}

async function handleLogin(username, password) {
  try {
    const { data } = await axios.post(`${apiUrl}/auth/login`, {
      username,
      password,
    });
    if (data.success) {
      localStorage.setItem("data", data.accessToken);
    }
    await this.verifyUser();
    return data;
  } catch (error) {
    return error;
  }
}

async function handleRegister(username, password) {
  try {
    const { data } = await axios.post(`${apiUrl}/auth/register`, {
      username,
      password,
    });
    if (data.success) {
      return data.success;
    }
  } catch (error) {
    return error;
  }
}

function handleLogout() {
  localStorage.removeItem("data");
}
