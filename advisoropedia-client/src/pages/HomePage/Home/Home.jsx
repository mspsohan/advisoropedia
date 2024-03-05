import Post from "../Post/Post";

const Home = () => {

   return (
      <div className="max-w-[1280px] mx-auto">
         <div className="flex justify-center my-10">
            <h2 className="text-2xl lg:text-4xl font-semibold border-b-2 border-black">All Post</h2>
         </div>
         <Post />
      </div>
   );
};

export default Home;