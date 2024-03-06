import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import { TbFidgetSpinner } from "react-icons/tb";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { imageUpload } from "../../api/utilities";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
const Signup = () => {
   const [showPassword, setShowPassword] = useState(false);
   const togglePassword = () => setShowPassword(!showPassword);
   const navigate = useNavigate()
   const [loading, setLoading] = useState(false)
   const axiosPublic = useAxiosPublic()

   const { register, handleSubmit, watch, formState: { errors } } = useForm();
   const onSubmit = async (data) => {
      const imageData = data.image[0];
      const emailData = data.email;
      const email = emailData.toLowerCase();
      const { name, password } = data;
      setLoading(true)
      try {
         // Upload image
         const imageUrl = await imageUpload(imageData);
         const image = imageUrl?.data?.display_url
         // User Registration

         const config = {
            headers: {
               "Content-type": "application/json",
            },
         };
         //  save user Data in database
         const { data } = await axiosPublic.post("/api/user", { name, email, image, password }, config);
         console.log(data)
         localStorage.setItem("userInfo", JSON.stringify(data));
         setLoading(false);
         navigate('/');
         toast.success('Sign up Successfull');
      } catch (error) {
         if (error.message) {
            console.log(error.message)
            toast.error('Email Already in Use.');
            setLoading(false);
         }
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
                  <h3 className="text-xl font-bold text-gray-600 mb-8 text-center">Create free account</h3>
                  <div className="space-y-4">
                     {/* Name Field */}
                     <div>
                        <input type="text" placeholder="Full Name *" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-orange-300 transition-all" {...register("name", { required: true })} />
                        <p className="text-xs text-red-500">{errors.name && <span>This field is required</span>}</p>
                     </div>
                     {/* Email Field */}
                     <div>
                        <input type="text" placeholder="Email *" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-orange-300 transition-all" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        <p className="text-xs text-red-500"> {errors.email && <span>This field is required and must be a valid email address</span>}</p>
                     </div>
                     {/* Image Field */}
                     <div>
                        <input type="file" placeholder="Image" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-orange-300 transition-all" {...register("image")} />
                     </div>
                     {/* Password Field */}
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
                     {/* Confirm Password Field */}
                     <div>
                        <div className="relative">
                           <input type={showPassword ? "text" : "password"} placeholder="Confirm Password *" className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-orange-300 transition-all" {...register("confirmPassword", { required: true, validate: (value) => value === watch('password') })} />
                           <button type="button" onClick={togglePassword}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none">
                              {showPassword ? (
                                 <IoMdEyeOff className="h-5 w-5 text-gray-400" />
                              ) : (
                                 <IoMdEye className="h-5 w-5 text-gray-400" />
                              )}
                           </button>
                        </div>
                        <p className="text-xs text-red-500">{errors.confirmPassword && <span>Passwords do not match</span>}</p>
                     </div>
                     {/* Checkbox */}
                     <div className="flex items-center">
                        <input type="checkbox" id="termsCheckbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" {...register("Checkbox", { required: true })} />
                        <label htmlFor="termsCheckbox" className="ml-3 block text-sm">
                           I accept the <a href="" className="text-orange-400 font-semibold hover:underline ml-1">Terms and Conditions</a>
                        </label>
                     </div>
                     <p className="text-xs text-red-500">{errors.Checkbox && <span>You must accept the terms and conditions</span>}</p>

                  </div>
                  <div className="mt-8 ">
                     <button type="submit" className="w-full py-4 px-4 rounded-md text-sm font-semibold text-white bg-orange-400 hover:bg-orange-500 focus:outline-none hover:cursor-pointer">
                        {loading ? (
                           <TbFidgetSpinner className='animate-spin mx-auto' />
                        ) : (
                           'Signup Now'
                        )}
                     </button>
                  </div>
                  <div className="flex items-center justify-center mx-3 mt-4">
                     <hr className="min-w-10 border-1 border-black" />
                     <p className="mx-5">OR Login With</p>
                     <hr className="min-w-10 border-1 border-black" />
                  </div>
                  <SocialLogin />
                  <p className="text-sm mt-8 text-center">Already have an account? <Link to="/login" className="text-orange-400 font-semibold hover:underline ml-1">Login here</Link></p>
               </form>
            </div>
         </div>
      </>
   );
};

export default Signup;