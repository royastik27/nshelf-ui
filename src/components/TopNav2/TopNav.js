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
        topNavMenuDOM.className = (topNavMenuDOM.className === "") ? "expand" : "";
    }
    
    function showDropdown(ID)
    {
        const el = document.getElementById(ID);
        el.style.display = (el.style.display === 'none') ? 'block' : 'none';
    }

    return (
        <nav id="topnav" className="col-12">

            <Link to="#home" className="topnav-brand">NSHELF</Link>
            
            <div className="icon-bars" onClick={dropDownTopNav}><i className="fa-solid fa-bars"></i></div>

            <div id="topnav-menu">
                <div className="left">
                    <div className="topnav-group">
                        <Link to="#home" className="topnav-link nav-link">Home</Link>
                    </div>
                    <div className="topnav-group">
                        <Link to="#about" className="topnav-link nav-link">About</Link>
                    </div>
                    <div className="topnav-group topnav-dropdown">
                        <div onClick={() => showDropdown('account-dropdown')} className="topnav-dropdown-button topnav-link nav-link">Account &nbsp;<i className="fa-solid fa-caret-down"></i></div>

                        <div id="account-dropdown" className="topnav-dropdown-menu side-click-display-none">
                            <Link to="#profile" className="topnav-link nav-link">Profile</Link>
                            <Link to="#settings" className="topnav-link nav-link">Settings</Link>
                            <Link to="#logout" className="topnav-link nav-link">Log out</Link>
                        </div>
                    </div>
                    <div className="topnav-group">
                        <Link to="#apps" className="topnav-link nav-link">Apps</Link>
                    </div>
                </div>

                <div className="right">
                    <div className="topnav-group" id="topnav-search">
                        <input type="text" placeholder="Search notes"></input>
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className="topnav-group">
                        <Link to="#login" className="topnav-link nav-link">Enter</Link>
                    </div>
                </div>               

            </div>
        </nav>
    );
  }
  
  export default TopNav;
  