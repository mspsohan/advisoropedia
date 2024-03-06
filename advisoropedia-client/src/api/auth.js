import axiosPublic from ".";

// get all user Data
export const getAllUser = async () => {
   const { data } = axiosPublic.get('/users')
   return data
}

// save user data in database
export const saveUser = async (user, name, image) => {
   const currentUser = {
      name: user?.displayName || name,
      email: user?.email,
      image: user?.photoURL || image,
   };
   const { data } = await axiosPublic.post(`api/user/${user?.email}`, currentUser);
   return data;
};