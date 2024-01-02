import React from 'react';
import {NavLink} from "react-router-dom";
import Footer from "./footer.jsx";

const FrontPageComponents = () => {
    return (
        <div>
            <section className="mainContainer">
                <div className='first-part'>
                    <h1 className="welcome_middle">Welcome to this site..</h1>
                </div>
            </section>

            <section className="cartPart">
                <NavLink to="/home">
                    <div className="cartBody">
                        <img src="https://htmldemo.net/hmart/p2/img/hmart/index-1.jpg"/>
                        <hr/>
                        <div className="card-footer">
                            <p className="pageName">Home page</p>
                        </div>
                    </div>

                </NavLink>


                <NavLink to="/about">
                    <div className="cartBody">
                        <img src="https://media.istockphoto.com/id/1163589059/photo/about-us.jpg?s=612x612&w=0&k=20&c=xiAumkYaKpQc3xepslDpn-lFhYPae6ivX_rRkgSXJgs="/>
                        <hr/>
                        <div className="card-footer">
                            <p className="pageName">About Page</p>
                        </div>
                    </div>

                </NavLink>

                <NavLink to="/registration">
                    <div className="cartBody">
                        <img src="https://i.ytimg.com/vi/PEr7jtfqXlg/maxresdefault.jpg"/>
                        <hr/>
                        <div className="card-footer">
                            <p className="pageName">Registration</p>
                        </div>
                    </div>

                </NavLink>



                <NavLink to="/blog">
                    <div className="cartBody">
                        <img src="https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684_640.jpg"/>
                        <hr/>
                        <div className="card-footer">
                            <p className="pageName">Blog</p>
                        </div>
                    </div>

                </NavLink>

                <NavLink to="/question">
                    <div className="cartBody">
                        <img src="https://media.istockphoto.com/id/1388275792/photo/question-mark-uncertainty-unknown-fear-inquiry-investigation-examination-interrogation.webp?b=1&s=170667a&w=0&k=20&c=9K9Dvo-Cv_9KBK2wrIySQ3YJ6v7ZNqhHrSvv_WhBi5g="/>
                        <hr/>
                        <div className="card-footer">
                            <p className="pageName">Asked Questions</p>
                        </div>
                    </div>

                </NavLink>

                <NavLink to="/contact">
                    <div className="cartBody">
                        <img src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM="/>
                        <hr/>
                        <div className="card-footer">
                            <p className="pageName">Contact Page</p>
                        </div>
                    </div>

                </NavLink>
            </section>
        </div>
    );
};

export default FrontPageComponents;