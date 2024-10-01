import axios from "axios";

export const getToken = async () => {
  const username = "ALHOKAIR_GROUP";
  const password = "T44S21-PK4A51C4CF78967C857BE8F-X0007F-4Z";

  try {
    const response = await axios.post(
      "https://data-ir.argaam.com/authenticate",
      {
        Username: username,
        Password: password,
      }
    );
    localStorage.setItem('accessToken', response.data.jwtToken);    
    return response.data.jwtToken;
  } catch (error) {
    console.error("Login error:", error);
  }
};
