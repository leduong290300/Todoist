export const apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://immense-eyrie-17020.herokuapp.com/api"
    : "http://localhost:5050/api";
