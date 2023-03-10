import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return(
  <div>
    <Navbar />
    <Header />
    <Card />
  </div>
  ) 
};

export default App;