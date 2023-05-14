import './css/bootstrap.min.css';
import './css/App.css';

import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <div id="app">
      <div className="container-fluid">
        <div className="row">
          <TopNav />
        </div>
      </div>
    </div>
  );
}

export default App;
