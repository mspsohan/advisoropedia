/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
   const [open, setOpen] = useState(false);
   const { user, setUser } = useAuth()
   const navigate = useNavigate()

   const handleLogout = () => {
      localStorage.removeItem('userInfo');
      setUser(null);
   };

   useEffect(() => {
      const storedUserInfo = localStorage.getItem('userInfo');
      if (storedUserInfo) {
         const parsedUserInfo = JSON.parse(storedUserInfo);
         setUser(parsedUserInfo);
      }
   }, [setUser]);

   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"))
      if (!user) {
         navigate("/")
      }
   }, [user, navigate])

   return (
      <header className={`bg-orange-100 dark:bg-dark`}>
         <div className="container mx-auto">
            <div className="relative flex items-center justify-between">
               <div className="w-60 max-w-full px-4">
                  <a href="/#" className="block w-14 h-14">
                     <img src="https://i.ibb.co/Sv15VSF/Advisoropedia.png" alt="logo" className="dark:hidden" />
                     <img src="https://i.ibb.co/Sv15VSF/Advisoropedia.png" alt="logo" className="hidden dark:block" />
                  </a>
               </div>
               <div className="flex w-full items-center justify-between px-4">
                  <div>
                     <button onClick={() => setOpen(!open)} id="navbarToggler" className={` ${open && "navbarTogglerActive"} absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`} >
                        <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-black"></span>
                        <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-black"></span>
                        <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-black"></span>
                     </button>
                     <nav id="navbarCollapse" className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"} `}>
                        <ul className="block lg:flex">
                           <ListItem NavLink="/">Home</ListItem>
                        </ul>
                     </nav>
                  </div>
                  {
                     user ? <button onClick={handleLogout} className="pr-16 dark:hover:text-orange-400 py-3 text-base font-medium text-dark hover:text-primary dark:text-black">Log out</button> : <div className="hidden justify-end  pr-16 sm:flex lg:pr-0">
                        <Link to="/login" className="px-7 dark:hover:text-orange-400 py-3 text-base font-medium text-dark hover:text-primary dark:text-black">
                           Sign in
                        </Link>
                        <Link to="/signup" className="rounded-md dark:hover:text-orange-400 bg-primary px-7 py-3 text-base font-medium text-black hover:bg-primary/90" >
                           Sign Up
                        </Link>
                     </div>
                  }
               </div>
            </div>
         </div>
      </header>
   );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
   return (
      <>
         <li>
            <Link to={NavLink} className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-orange-400 lg:ml-12 lg:inline-flex">
               {children}
            </Link>
         </li>
      </>
   );
};


