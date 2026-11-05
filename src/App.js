import Map from './Map';
import "./sidebar.css";


function App() {
  return (
    // sidebar for locations
    <div className="appContainer">
      <div className="sidebar">
        <h2 id="locationCount" className="sidebarTitle">
          Locations: 0
        </h2>

        <div id="locations" className="locations"></div>
      </div>

      <div>
        <Map />
      </div>
    </div>
  );
}

export default App;