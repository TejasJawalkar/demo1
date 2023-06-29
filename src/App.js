import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "./bootstrap.min.css";

import Header from "./components/Header";

//import Particles from "react-particles-js";
import HomeScreen from "./screen/HomeScreen";       
import Footer from "./components/Footer";
import ContactScreen from "./screen/ContactScreen";
import AboutScreen from "./screen/AboutScreen";
import ServicesScreen from "./screen/ServicesScreen";

function App() {
  return (
    <>
      <Container className="content" fluid>
        <Router>
          <Header />
          <div className="dropdown-divider"></div>
          <main>
            <Container>
            <Route exact path="/" component={HomeScreen} />
              
              <Route exact path="/about" component={AboutScreen} />
              <Route exact path="/contact" component={ContactScreen} />
              <Route exact path="/services" component={ServicesScreen} />
            </Container>
          </main>
          <div className="dropdown-divider"></div>
          <Footer />
        </Router>
      </Container>
    </>
  );
}
export default App;
