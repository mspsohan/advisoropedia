import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllPost = () => {
   const axiosSecure = useAxiosSecure()
   const { data, isLoading, refetch } = useQuery({

      queryKey: ["allPost"],
      queryFn: async () => {
         const { data } = await axiosSecure.get(`/api/post`)
         return data
      }
   })
   return { data, isLoading, refetch }
};

export default useAllPost;