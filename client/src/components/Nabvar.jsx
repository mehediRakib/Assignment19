import React from 'react';
import '../assets/css/Navbar.css'
const Nabvar = () => {
    return (
   <div className="MainContainer">
       <div className="container">
           <nav className="navbar">
               <p><a className="btn-danger" href="/">My shop</a></p>
               <ul className="nav-links">
                   <li><a href="/home">Home</a></li>
                   <li><a href="/about">About</a></li>
                   <li><a href="/contact">Shop</a></li>
                   <li><a href="/contact">Blog</a></li>
                   <li><a href="/contact">Contact</a></li>
               </ul>
               <form className="search-bar">
                   <input type="text" placeholder="Search..." />
                   <button type="submit">Search</button>
               </form>
           </nav>
       </div>
   </div>
    );

};

export default Nabvar;