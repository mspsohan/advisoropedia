import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <>
         <footer className="bg-orange-100 text-black py-8 px-2 font-[sans-serif]">
            <div className="flex flex-col items-center">
               <p className="text-sm mb-4">Stay connected with us:</p>
               <ul className="flex space-x-4">
                  <li><Link to="https://facebook.com" className="text-xl hover:text-gray-400">
                     <FaFacebookSquare className="fill-gray-800 inline hover:fill-orange-500 w-6 h-6" />
                  </Link></li>
                  <li><Link to="https://linkedin.com" className="text-xl hover:text-gray-400">
                     <FaLinkedin className="fill-gray-800 inline hover:fill-orange-500 w-6 h-6" />
                  </Link></li>
                  <li><Link to="https://youtube.com" className="text-xl hover:text-gray-400">
                     <FaYoutube className="fill-gray-800 inline hover:fill-orange-500 w-6 h-6" />
                  </Link>
                  </li>
               </ul>
               <p className="text-xs mt-8">&copy; 2024<Link to='https://advisoropedia.in' target='_blank'
                  className="hover:underline mx-2">AdvisoroPedia</Link>All Rights Reserved.</p>
            </div>
         </footer>
      </>
   );
};

export default Footer;