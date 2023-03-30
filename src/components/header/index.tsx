
import './style.css'


function Header() {
    return (
        <div className="Hero">
            <nav>
                <h2 className="Logo">Ecommerce</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button type="button">Sign In</button>
            </nav>
        </div>
    )
}

export default Header;