import './css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import './css/App.css';

import TopNav from './components/TopNav2/TopNav';
import DropDown from './components/DropDown/DropDown';

import LoremIpsum from './components/LoremIpsum';

 


function App() {

  function sideClickDisplayNone() {

    const el = document.getElementsByClassName('side-click-display-none');
    
    let len = el.length;
    for(let i = 0; i < len; ++i)
      el[i].style.display = 'none';
  
    return;
  }

  return (
    <div id="app">
      <div className="container-fluid">
        <div className="row">
          <TopNav />

          <div id="main-content" onClick={sideClickDisplayNone}>

            <div className="col-12 mt-3">
              <DropDown />
            </div>

            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />


          </div>
          {/* END OF MAIN CONTENT */}

        </div>
      </div>
    </div>
  );
}

export default App;
