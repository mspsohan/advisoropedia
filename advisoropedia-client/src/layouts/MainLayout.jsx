import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
   const { socialUser } = useAuth();
   const navigate = useNavigate();

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if (!user && !socialUser) {
         navigate("/login");
      } else {
         navigate("/");
      }
   }, [navigate, socialUser]);

   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default MainLayout;
