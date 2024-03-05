/* eslint-disable react/prop-types */

const PostCard = ({ post }) => {
   return (
      <>
         <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] ">
            <img src={post?.image} className="w-full" />
            <div className="px-4 py-6">
               <h3 className="text-[#333] text-xl font-bold h-12">{post?.title}</h3>
               <p className="mt-4 text-sm text-gray-500">{post?.content ? post.content.slice(0, 180) : 'No content available'}...</p>
               <button type="button"
                  className="px-6 py-2.5 mt-6 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">View</button>
            </div>
         </div>
      </>
   );
};

export default PostCard;