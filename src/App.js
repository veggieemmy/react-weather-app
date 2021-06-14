import './App.css';
import Date from "./Date.js";
import Weather from "./Weather.js";
import Search from "./Search.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app-border">
          <Weather />
          <Date value="Date" />
          <Search />
        </div>
          <Footer />
      </div> 
    </div>
  );
}

export default App;
