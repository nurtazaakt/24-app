import PostList from "../components/PostList";
import "../assets/css/style.css"

function HomePage(){
    return (
        <div class="mobile-block">
            <div class="mobile-block__header is-second">
                Все виды
            </div>
            <PostList />
        </div>
    );
}

export default HomePage;