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
    return (
        <div className="topnav" id="myTopnav">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#news" className="nav-link">News</a>
            <a href="#contact"className="nav-link">Contact</a>
            <div className="dropdown">

                <button className="dropbtn">
                    Dropdown <i className="fa fa-caret-down"></i>
                </button>

                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> 
            <a href="#about">About</a>

            {/* <a href="#" style={{ fontSize: "15px" }} className="icon" onClick={myFunction}>&#9776;</a> */}
            <button style={{ fontSize: "15px" }} className="icon" onClick={myFunction}>&#9776;</button>
        </div>

    );
  }
  
  export default TopNav;
  