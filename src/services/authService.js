import axios from "axios";

// ✅ Use full backend NodePort URL (works both local & Kubernetes)
const API_URL = "http://backend:8080/back1/auth";


export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/signup`,
      { username, email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    alert("Signup successful!");
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    if (error.response) {
      console.log("Backend response:", error.response.data);
    }
    alert("Signup failed!");
  }
};
