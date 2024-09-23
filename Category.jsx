import { useEffect, useState } from "react";
import home from "../assets/imges/home.svg"
import axios from "axios";
import { Link } from "react-router-dom";


function Category () {
    
    const [category, setCategory] = useState([]);

    useEffect (() => {
        async function fetchCategory() {
            try {
                const respone = await axios.get(`https://5dc165eba2f3c30b.mokky.dev/category`);
                console.log(respone.data);
                
                setCategory(respone.data);
            } catch(e) {
                console.log(e);
            } 
        }
        fetchCategory();
    }, []);
    
    return(
        <div>
         
        <section className="mobile-block">
            <div className="mobile-block__header is warning">
                Категории
            </div>

                <div className="category-row">
                    <Link to="/" className="category-item">
                        <img src={home} alt="#" className="category-itme__img"/>
                        <span className="category-item__title">Все виды</span>
                    </Link>
                    {category.map((category) => (
                        <Link to={`/Category/posts/${category.id}`} className="category-item">
                        <img src={category.imageUrl} alt={category.name} className="category-itme__img"/>
                        <span className="category-item__title">{category.name}</span>
                    </Link>
                    ))}
                </div>
        </section>
        </div>
    )
}

export default Category;