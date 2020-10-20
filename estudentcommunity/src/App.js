import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";
import Header from "./components/header/Header";
import AboutPage from "./pages/AboutPage";
import Ambassador from "./pages/Ambassador";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/ambassador" component={Ambassador} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/blog" component={Blogs} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/sign-in" component={SignInPage} />
            <Route exact path="/sign-up" component={SignUpPage} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
