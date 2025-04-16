import { Link } from "react-router-dom";

const MainNav = () => <nav>
    <ul>
        <li> <Link to="/">Homme Page</Link></li>
        <li><Link to="/post">Post</Link></li>
        <li><Link to="/chi-siamo">Chi Siamo</Link></li>
    </ul>
</nav>

export default MainNav