import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import CartPage from "./pages/CartPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routing = () => {
  return (
    <Router>
      <div className="MainContainer">
        <Header cartItemsLength={5} />
        <Nav />
        {/* routing start here */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
        {/* routing end here */}
        <Footer />
      </div>
    </Router>
  );
};

function App() {
  return <Routing />;
}

export default App;
