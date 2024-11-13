import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    // Sample data for food items with images

    const navigate =  useNavigate()
    const foodItems = [
        { id: 1, name: 'Margherita Pizza', description: 'Classic cheese and tomato pizza', price: 349,imgSrc : 'https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.webp?s=2048x2048&w=is&k=20&c=KWdxgdyv_fRDh8i8D5LToxbKpcRrNJ0iVCmQZ8LFoAY='},
        { id: 2, name: 'Veggie Burger', description: 'Healthy burger with fresh veggies', price: 249,imgSrc : 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 3, name: 'Sushi Platter', description: 'Assorted sushi rolls with fresh fish', price: 499, imgSrc : 'https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
        { id: 4, name: 'Pasta Carbonara', description: 'Creamy pasta with bacon and cheese', price: 599, imgSrc : 'https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg'},
        { id: 5, name: 'Chicken Briyani', description: 'Spicy with chicken pieces', price: 299,imgSrc: 'https://media.istockphoto.com/id/1857353239/photo/haydrabadi-biriyani.jpg?s=2048x2048&w=is&k=20&c=RpPeJEh0ap12fFVrzd3_-d-pHA1FFSRagrBqM-NODrY=' },
        { id: 6, name: 'Mutton Briyani', description: 'Merge in the taste of Mutton', price: 399,imgSrc : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI3ZctGxS8W2yn3tLSS60GjYr9Iw1l8kYVLg&s'},
        { id: 7, name: 'Macaroons', description: 'Sweet for the Life ', price: 199,imgSrc : 'https://images.pexels.com/photos/3734021/pexels-photo-3734021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    ];

    // Function to handle "Order Now" button click
    const handleOrderNow = (itemName) => {
        alert(`You have ordered: ${itemName}!`);
    };

    const onLogout = () => {
        navigate('/login')
    }

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to the FOOD PARADISE</h1>
                <button onClick={onLogout}>Logout</button>
            </header>
            
            <main className="home-main">
                <p>
                    Explore a variety of delicious meals from your favorite restaurants and get them delivered to your door!
                </p>
                <p>
                    <h2>FROM CRAVINGS TO DOORSTEPS</h2>
                </p>

                {/* Online Orders Section */}
                <section className="online-orders">
                    <h2>Available Food Orders</h2>
                    <div className="food-items">
                        {foodItems.map((item) => (
                            <div key={item.id} className="food-card">
                                <img 
                                    src={item.imgSrc} 
                                    alt={item.name} 
                                    height={150}
                                    className="food-image"
                                />
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p className="food-price">${item.price.toFixed(2)}</p>
                                <button 
                                    className="order-button" 
                                    onClick={() => handleOrderNow(item.name)}>
                                    Order Now
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <a className="order-button" href="/food">
                    Start Your Order
                </a>
            </main>
            
            <footer className="home-footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: support@fooddelivery.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Address: 123 Ukkadam Food St, Coimbatore City</p>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Food Delivery System. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
