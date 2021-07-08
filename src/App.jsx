import Header from "./components/Header";
import Content from "./components/Content";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="MainContainer">
      <Header cartItemsLength={0} />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
