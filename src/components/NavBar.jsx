import { NavLink } from "react-router-dom";

const NavBar = () => <nav className="container-nav">
    <ul className="d-flex jc-flex-end ">
        <li className="pd"> <NavLink to="/" className="color-tex-black pd">Homme Page</NavLink></li>
        <li className="pd"><NavLink to="/post" className="color-tex-black pd">Post</NavLink></li>
        <li className="pd"><NavLink to="/chi-siamo" className="color-tex-black pd">Chi Siamo</NavLink></li>
    </ul>
</nav>

export default NavBar 