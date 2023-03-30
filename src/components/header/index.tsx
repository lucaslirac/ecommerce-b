
import { useNavigate } from 'react-router-dom';
import './style.css'


function Header() {
    const navigate = useNavigate();
    return (
        <div className="Hero">
            <nav>
                <h2 className="Logo">Ecommerce</h2>
                <ul>
                    <li><a href="" onClick={() => navigate("/")}>Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button type="button" className='header-button' onClick={() => navigate("/Login")}>Sign In</button>
            </nav>
        </div>
    )
}

export default Header;