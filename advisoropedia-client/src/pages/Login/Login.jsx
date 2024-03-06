import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Login = () => {
   const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false)
   const navigate = useNavigate()
   const axiosPublic = useAxiosPublic()

   const togglePassword = () => setShowPassword(!showPassword);

   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = async (data) => {
      const { email, password } = data;
      try {
         const config = {
            headers: {
               "content-type": "application/json"
            }
         }
         const { data } = await axiosPublic.post("/api/user/login", { email, password }, config)
         localStorage.setItem("userInfo", JSON.stringify(data))
         setLoading(false)
         toast.success("Login Successful")
         navigate("/")
      } catch (error) {
         setLoading(false)
         toast.error("Error Occured!", error.response.data.message)
      }
   };
   return (
      <>
         <div className="flex flex-col justify-center font-[sans-serif] text-[#333] p-4">
            <div className="max-w-md w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.5)] p-8 relative mt-12">
               <div className="bg-white w-20 h-20 border-[8px] p-1.5 absolute left-0 right-0 mx-auto -top-10 rounded-full overflow-hidden">
                  <Link to="/">
                     <img src="https://i.ibb.co/Sv15VSF/Advisoropedia.png" alt="logo" className='w-full inline-block' />
                  </Link>
               </div>
               <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
                  <h3 className="text-xl font-bold text-gray-600 mb-8 text-center">Please Login</h3>
                  <div className="space-y-4">
                     <div>
                        <input type="text" placeholder="Email *" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-orange-300 transition-all" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <p className="text-xs text-red-500"> {errors.email && <span>This field is required and must be a valid email address</span>}</p>
                     </div>
                     <div>
                        <div className="relative">
                           <input type={showPassword ? "text" : "password"} placeholder="Password *" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-orange-300 transition-all" {...register("password", { required: true, maxLength: 12, minLength: 8, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ })} />
                           <button type="button" onClick={togglePassword}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                              {showPassword ? (
                                 <IoMdEyeOff className="h-5 w-5 text-gray-400" />
                              ) : (
                                 <IoMdEye className="h-5 w-5 text-gray-400" />
                              )}
                           </button>
                        </div>
                        <p className="text-xs text-red-500">{errors.password && <span>Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character</span>}</p>
                     </div>
                     <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-3 block text-sm">
                           Remember me
                        </label>
                     </div>
                  </div>
                  <div className="mt-8 ">
                     <button type="submit" className="w-full py-4 px-4 rounded-md text-sm font-semibold text-white bg-orange-400 hover:bg-orange-500 focus:outline-none hover:cursor-pointer">
                        {loading ? (
                           <TbFidgetSpinner className='animate-spin mx-auto' />
                        ) : (
                           'Login Now'
                        )}
                     </button>
                  </div>
                  <div className="flex items-center justify-center mx-3 mt-4">
                     <hr className="min-w-10 border-1 border-black" />
                     <p className="mx-5">OR Login With</p>
                     <hr className="min-w-10 border-1 border-black" />
                  </div>
                  <SocialLogin />
                  <div className="mt-6 flex justify-center">
                     <button className="text-sm hover:text-blue-400 hover:underline my-2">Forget Password?</button>
                  </div>
                  <p className="text-sm mt-2 text-center">Don{"'"}t have an account? <Link to="/signup" className="text-orange-400 font-semibold hover:underline ml-1">Signup Now</Link></p>
               </form>
            </div>
         </div>
      </>
   );
};

export default Login;