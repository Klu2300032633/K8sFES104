import axios from "axios";

// Use correct backend URL (same as in Postman)
const API_URL = "http://localhost:30083/back1/auth";

export const login = async (username, password) => {
  const response = await axios.post(
    `${API_URL}/login`,
    { username, password },
    { headers: { "Content-Type": "application/json" } }
  );
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  const response = await axios.post(
    `${API_URL}/signup`,
    { username, email, password },
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};
