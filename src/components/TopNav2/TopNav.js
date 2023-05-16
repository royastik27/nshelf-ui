import { useState } from 'react';
import { Link } from 'react-router-dom';

import './TopNav.css';

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function TopNav() {

    
    function dropDownTopNav() {
        const topNavMenuDOM = document.getElementById('topnav-menu');

        topNavMenuDOM.style.display = (topNavMenuDOM.style.display === "none") ? "block" : "none";
    }

    return (
        <nav id="topnav">

            <Link to="#home" className="topnav-brand">NSHELF</Link>
            
            <div className="icon-bars" onClick={dropDownTopNav}><i className="fa-solid fa-bars"></i></div>

            <div id="topnav-menu">
                <div className="topnav-group">
                    <Link to="#home" className="topnav-link nav-link">Home</Link>
                </div>
                <div className="topnav-group">
                    <Link to="#about" className="topnav-link nav-link">About</Link>
                </div>
                <div className="topnav-group">
                    <Link to="#apps" className="topnav-link nav-link">Apps</Link>
                </div>
            </div>




        </nav>
    );
  }
  
  export default TopNav;
  