import axios from "axios";

// const baseUrl = axios.create({ baseURL: "http://localhost:3001" });
const baseUrl = axios.create({
  // baseURL: "https://e-commerce-api-1-6voz.onrender.com",
  baseURL: "http://localhost:3001",
});

export const productURL = "http://localhost:3001/products/";
// export const productURL =
//   "https://e-commerce-api-1-6voz.onrender.com/products/";

export default baseUrl;
