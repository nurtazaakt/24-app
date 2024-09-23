import { Link, useParams } from "react-router-dom";
import backIcon from "../assets/imges/Frame (3).svg";
import PostList from "../components/PostList";
import { useEffect, useState } from "react";
import axios from "axios";

function PostDeatailPage() {   

    const {id} = useParams();   
    const [post, setPost] = useState({});
    
    
    useEffect(() => {
        async function fetchPost() {
            try {
                const respone = await axios.get(`https://5dc165eba2f3c30b.mokky.dev/post/${id}`);
                
                setPost(respone.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();
    }, [id])
    
    return (
        <div>
            <section class="mobile-block_sterling">
                <Link to="/" className="back-button">
                <div class="mobile-block__header_sterling is-second">
            <img class="back_ster"  src={backIcon} alt="#" /> 
            <span class="text_ster">Назад</span>
                </div>
                </Link>
             </section>
             <div class="news">
                <h3 class="news_title">{post.title}</h3>
                <p class="news_date">{post.date}</p>
                <p className="description">
                    {post.descrption}
                </p>
                    <img src={post.imageUrl} alt={post.title} />
            </div>
            <span className="author">Источник: <strong className="light-succes-text">{post.author}</strong> </span>
            <button className="tag-button">{post.categoty}</button>
        </div>

    );
}

export default PostDeatailPage;