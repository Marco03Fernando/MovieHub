import {Link} from "react-router-dom"
import "../css/NavBar.css"
function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Moviehub </Link>
        </div>
        <div className="navbar-links">
           <Link to="/" className="nav-links">Home</Link>
           <Link to="/favourites" className="nav-links">Favourites</Link>
        </div>
    </nav>
}

export default NavBar