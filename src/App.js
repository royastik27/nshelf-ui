import './css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import './css/App.css';

import TopNav from './components/TopNav2/TopNav';
import DropDown from './components/DropDown/DropDown';

import LoremIpsum from './components/LoremIpsum';

function App() {
  return (
    <div id="app">
      <div className="container-fluid">
        <div className="row">
          <TopNav />

          <div className="col-12 mt-3">
            <DropDown />
          </div>

          <LoremIpsum />

        </div>
      </div>
    </div>
  );
}

export default App;
