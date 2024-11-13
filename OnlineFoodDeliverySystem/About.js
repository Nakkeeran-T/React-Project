import React from 'react';
import './about.css';

function AboutUs() {
    return (
        <div className="about-container">
            <header className="about-header">
                <h1>About Us</h1>
            </header>

            <main className="about-main">
                <section className="about-intro">
                    <p>
                        Welcome to <strong>Food Paradise</strong>! Our mission is to satisfy your cravings by delivering
                        delicious meals from the best chefs, right to your doorstep. Whether it's pizza, sushi, or biryani, 
                        we’re here to serve quality food with love and care.
                    </p>
                </section>

                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        To bring joy to every table by making a wide variety of food easily accessible to everyone, 
                        anywhere, anytime.
                    </p>
                </section>

                <section className="vision-section">
                    <h2>Our Vision</h2>
                    <p>
                        At Food Paradise, we believe that good food has the power to connect people. We aim to become the 
                        go-to destination for food lovers by providing a seamless delivery experience.
                    </p>
                </section>

                <section className="team-section">
                    <h2>Meet the Team</h2>
                    <p>
                        Our passionate team of chefs, delivery professionals, and support staff work tirelessly to ensure
                        every meal is prepared with care and delivered with a smile. We are driven by our commitment to 
                        quality, punctuality, and customer satisfaction.
                    </p>
                </section>
            </main>

            <footer className="about-footer">
                <p>&copy; 2024 Food Paradise. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AboutUs;
