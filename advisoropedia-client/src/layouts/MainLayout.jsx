import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {

   const navigate = useNavigate()

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"))
      if (!user) {
         navigate("/login")
      }
   }, [navigate])

   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default MainLayout;