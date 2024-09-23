import PostCard from "./PostCard";
import {useEffect, useState} from "react"
import axios from "axios";
import LoadingPost from "./LodainPost";

function PostList() {
    
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    
  
         useEffect(() => {
         async function fetchPosts() {
             try {
                setIsLoading(true);
                 const response = await axios.get(`https://5dc165eba2f3c30b.mokky.dev/post`);
                 console.log(response);
                
                 setPosts(response.data);
             } catch(error) {
                 console.log(error);
             } finally {
                setIsLoading(false);
             }
         }
         fetchPosts();
     },[]);
   
    return (
        <div className="all-news-block">
            {isLoading ? (<LoadingPost />) : (
             <>
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))} 
             </>
            )}
        </div>
    );
}

export default PostList;