import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingPost from "../components/LodainPost";
import PostCard from "../components/PostCard";

function PostByCategoryPage() {

    const {id} = useParams();
    const [category, setIsCategory] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCategory() {
            try {
                const respone = await axios.get(`https://5dc165eba2f3c30b.mokky.dev/category/${id}`)
                setIsCategory(respone.data)
            } catch(e) {
                    console.log(e);
            }
        }

        async function fetchPosts() {
            try {
               setIsLoading(true);
                const response = await axios.get('https://5dc165eba2f3c30b.mokky.dev/post');
              
                setPosts(response.data);
            } catch(error) {
                console.log(error);
            } finally {
               setIsLoading(false);
            }
        }
        fetchPosts();
        fetchCategory();
    },[id]);

    return (
        <section className="mobile-block">
            <div className="mobile-block__header is-succes">
                 {category.name}   
            </div>
            <div className="all-news-block">
                {isLoading ? (<LoadingPost />) : (
                    <>
                    {posts.map ((post) => {
                        return post.category === category.name ? (
                            <PostCard key={post.id} post={post} />
                        ) : null
                    })}
                    </>
                )}
            </div>
        </section>
    );
}

export default PostByCategoryPage;