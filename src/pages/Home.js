import { Link } from 'react-router-dom';
import restaurantImg from '../images/restauranfood.jpg';

import Menu from "./Menu";

const Home = () => {
    return <>
        <div className="hero-section-background">
            <div className="hero-section-container">
                <div className="section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/bookingPage"><button className="btn">Reserve a Table</button></Link>
                </div>
                <div className="section-right">
                    <div className="image-box">
                        <img src={restaurantImg} alt="Serving delicious dish" />
                    </div>
                </div>
            </div>
        </div>
        <Menu></Menu>
    </>
}

export default Home;