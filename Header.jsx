import logo from "../assets/imges/menu-btn.svg"
import { Link } from "react-router-dom";

function Header() {
    return (
    <header className="header">
        <div className="container">
            <Link to="/Category" className="btn-category">
                <img src={logo} alt="menu-btn" />
            </Link>
        </div>
    </header>
    )
}
export default Header;