import "../src/assets/css/style.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PostDeatailPage from "./pages/PostDetailPage";
import Category from "./pages/Category";
import PostByCategoryPage from "./pages/PostByCategoryPage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div >
      <Header />
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDeatailPage />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Category/posts/:id" element={<PostByCategoryPage/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;