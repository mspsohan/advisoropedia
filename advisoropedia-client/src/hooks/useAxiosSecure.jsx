import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
   baseURL: import.meta.env.VITE_BASE_URL
})
const useAxiosSecure = () => {
   const navigate = useNavigate();

   axiosSecure.interceptors.request.use(function (config) {
      const tokens = JSON.parse(localStorage.getItem('userInfo'))
      console.log(tokens)
      config.headers.authorization = `Bearer ${tokens?.token}`;
      return config;
   }, function (error) {
      return Promise.reject(error);
   });

   axiosSecure.interceptors.response.use(function (response) {
      return response;
   }, async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
         navigate('/');
      }
      return Promise.reject(error);
   })

   return axiosSecure;
};

export default useAxiosSecure;