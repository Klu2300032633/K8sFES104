import axios from "axios";

// ✅ Correct base URL — matches backend @RequestMapping("/auth")
const API_URL = "http://localhost:8080/auth";

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { username, email, password });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
