import axios from "axios";

// Use correct backend URL (same as in Postman)
const API_URL = "http://localhost:30083/back1/auth";

export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/signup`,
      { username, email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    console.log("Signup success:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Backend returned error:", error.response.data);
    } else {
      console.error("Network/Other error:", error.message);
    }
    alert("Signup failed!");
  }
};

