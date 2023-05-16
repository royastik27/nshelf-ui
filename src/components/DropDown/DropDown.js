import './DropDown.css';

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

function DropDown() {
    return (
        <div className="drop-down">
            <button className="drop-down-btn">Drop Down</button>

            <div className="drop-down-content" type="none">
                <span>New</span>
                <span>Open</span>
                <span>Save</span>
                <span>Save as</span>
            </div>
        </div>
    );
  }
  
  export default DropDown;
  