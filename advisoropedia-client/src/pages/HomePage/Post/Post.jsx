import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import { useInfiniteQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Post = () => {
   // const axiosSecure = useAxiosSecure()
   const axiosPublic = useAxiosPublic()

   const limit = 10

   const fetchMoreData = async (page) => {
      // fetch data
      const { data } = await axiosPublic.get(`/api/post?limit=${limit}&page=${page}`)
      console.log(data)
      return data
   }

   const { isPending, data, hasNextPage, fetchNextPage } = useInfiniteQuery({
      queryKey: ["allPosts"],
      queryFn: ({ pageParam = 1 }) => fetchMoreData(pageParam),
      getNextPageParam: (lastPage, pages) => {
         return lastPage.length == 10 ? pages.length + 1 : undefined;
      },
   });

   const posts = data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
   }, []);


   if (isPending) <div>Loading...</div>

   return (
      <>
         <InfiniteScroll
            dataLength={posts ? posts.length : 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={<p>Loading....</p>}
            endMessage={<p className="text-center my-10 font-medium">No More Data...</p>}
         >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3 xl:px-0">
               {
                  posts?.map((post, index) => {
                     return <div key={index}>
                        <PostCard post={post} />
                     </div>
                  })
               }
            </div>
         </InfiniteScroll>
      </>
   );
};

export default Post;