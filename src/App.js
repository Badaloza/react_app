import { Route } from "react-router-dom";
import ContactPage from "./Components/ContactPage";
import HomePage from "./Components/HomePage";
import Navigation from "./Components/Navigation";
import MobilePage from "./Components/MobilePage";
import CarPage from "./Components/CarPage";

function App() {
  return (
    <>
      <Navigation />
      <Route path="/" exact component={HomePage} />
      <Route path="/contact" exact component={ContactPage} />
      <Route path="/mobilePage" exact component={MobilePage} />
      <Route path="/carPage" exact component={CarPage} />
    </>
  );
}
export default App;
