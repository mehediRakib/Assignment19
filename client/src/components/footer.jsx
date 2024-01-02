import React from 'react';
import AboutPage from "../pages/AboutPage.jsx";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-head">
                    <h1>Assignmet</h1>
                    <p>This is Ostad Assignment page.it is created for learning purpose.In this code i am sure i make lots of mistake..but i through this mistake i will learn</p>
                    <div>
                        <ul>
                            <li><a href="http://facebook.com"><img src="https://static.designboom.com/wp-content/uploads/2023/09/facebook-new-logo-change-designboom-02.jpg"/></a></li>
                            <li><a href="http://github.com"><img src="https://avatars.githubusercontent.com/u/9919?s=280&v=4" /></a> </li>
                            <li><a href="http://instagram.com"><img src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"/></a> </li>
                            <li><a href={<AboutPage/>}><img src="https://cdn2.vectorstock.com/i/1000x1000/02/16/about-us-icon-company-info-sign-vector-20390216.jpg"/></a> </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-head">
                    <h1>Services</h1>
                   <p>My Account</p>
                    <p>Contact</p>
                    <p>Shopping Cart</p>
                    <p>Shop</p>
                    <p>Service Login</p>

                </div>

                <div className="footer-head">
                    <h1>My Account</h1>
                    <p>My Account</p>
                    <p>Contact</p>
                    <p>Shopping Cart</p>
                    <p>Shop</p>
                    <p>Service Login</p>
                </div>

                <div className="footer-head">
                    <h1>Contact Info</h1>
                    <address>
                        <p>Address:Rahimanagar,Kachua,Chandur,Bangladesh</p>
                        <p>Email:rakib107054@gmail.com</p>
                        <p>phone: 01611650721</p>
                        <p></p>
                    </address>
                </div>


            </div>
        </div>
    );
};

export default Footer;