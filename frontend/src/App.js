import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomeScreens from "./screens/HomeScreens.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className={"py-3"}>
        <Container>
          <Route path='/' component={HomeScreens} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
