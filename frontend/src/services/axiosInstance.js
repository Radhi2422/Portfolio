import axios from "axios";
const REACT_APP_BASE_URL=process.env.REACT_APP_BASE_URL
 
const axiosInstance = axios.create({
  baseURL: `${REACT_APP_BASE_URL}`, // Vite
  // For Create React App use:
  // baseURL: process.env.REACT_APP_API_URL,

  timeout: 10000,

  headers: {
    "Content-Type": "application/json",
  },
});


// Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );


// // Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => response,

//   (error) => {
//     if (error.response?.status === 401) {
//       console.log("Unauthorized. Please login again.");

//       // Optional:
//       // localStorage.removeItem("token");
//       // window.location.href = "/login";
//     }

//     if (error.response?.status === 500) {
//       console.log("Internal Server Error");
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;