import { Route } from "react-router-dom";
import ContactPage from "./Components/ContactPage";
import HomePage from "./Components/HomePage";
import Navigation from "./Components/Navigation";
import MobilePage from "./Components/MobilePage";
import CarPage from "./Components/CarPage";
import electronicPage from "./Components/electronicPage";
import tvPage from "./Components/tvPage";
import chargerPage from "./Components/chargerPage";
import bestsellerPage from "./Components/bestsellerPage";
import laptopPage from "./Components/laptopPage";

function App() {
  return (
    <>
      <Navigation />
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/mobilePage" exact component={MobilePage} />
      <Route path="/carPage" exact component={CarPage} />
      <Route path="/electronicPage" exact component={electronicPage} />
      <Route path="/tvPage" exact component={tvPage} />
      <Route path="/chargerPage" exact component={chargerPage} />
      <Route path="/bestsellerPage" exact component={bestsellerPage} />
      <Route path="/laptopPage" exact component={laptopPage} />

    </>
  );
}
export default App;
