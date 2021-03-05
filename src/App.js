import logo from "./logo.svg";
import "./App.css";
import RestaurantList from "./components/RestaurantList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <SearchBar title="Summer" />
      <RestaurantList title="Halle" />
    </div>
  );
}

export default App;
