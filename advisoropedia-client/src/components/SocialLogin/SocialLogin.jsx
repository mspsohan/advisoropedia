import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';
import { saveUser } from '../../api/auth';
const SocialLogin = () => {
   const { signInWithGoogle, signInWithGithub } = useAuth();
   const navigate = useNavigate();

   const handleGoogleLogin = async () => {
      try {
         const result = await signInWithGoogle();
         await saveUser(result?.user);
         toast.success('Successfully Sign in With Google');
         navigate('/dashboard');
      } catch (error) {
         toast.error(error);
      }
   };

   const handleGithubLogin = async () => {
      try {
         const result = await signInWithGithub();
         await saveUser(result?.user);
         toast.success('Successfully Sign in With Github');
         navigate('/dashboard');
      } catch (error) {
         console.error('Github login error:', error);
         toast.error('Error signing in with Github');
      }
   };
   return (
      <div className='grid grid-cols-2 gap-5 mx-auto'>
         <button
            onClick={handleGoogleLogin}
            className='flex w-full max-w-xs mx-auto mt-2 items-center justify-center rounded-[20px] border-2 border-[#ff4b2b] hover:bg-[#ff4b2b] text-[14px] font-bold py-1  uppercase transition ease-in 80ms hover:text-white'>
            <span className='border-2 p-1 text-xl bg-white rounded-full mr-5'>
               <FcGoogle />
            </span>
            Google
         </button>
         <button
            onClick={handleGithubLogin}
            className='flex w-full max-w-xs mx-auto mt-2 items-center justify-center rounded-[20px] border-2 border-[#6265ee] hover:bg-[#6265ee] text-[14px] font-bold py-1  uppercase transition ease-in 80ms hover:text-white'>
            <span className='border-2 p-1 text-xl  rounded-full mr-5'>
               <FaGithub />
            </span>
            Github
         </button>
      </div>
   );
};

export default SocialLogin;