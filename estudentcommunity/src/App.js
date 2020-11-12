import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
import Footer from "./components/footer/Footer";
import { checkUserSession } from "./api/Service";
import { useAuthDispatch, useAuthState } from "./context/auth";
import AmbassadorDetail from "./pages/AmbassadorDetail";
import EventDetails from "./pages/EventDetails";
import BlogDetail from "./pages/BlogDetail";
import Dashboard from "./pages/Dashboard";

function App({ history }) {
  const dispatch = useAuthDispatch();
  const { currentUser } = useAuthState();

  useEffect(() => {
    checkUserSession(dispatch);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/ambassador" component={Ambassador} />
          <Route exact path="/ambassador/:id" component={AmbassadorDetail} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/events/:id" component={EventDetails} />
          <Route exact path="/blog" component={Blogs} />
          <Route exact path="/blog/:id" component={BlogDetail} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/sign-in"
            render={(props) =>
              currentUser ? (
                <Redirect to="/dashboard" />
              ) : (
                <SignInPage {...props} />
              )
            }
          />
          <Route
            exact
            path="/sign-up"
            render={(props) =>
              currentUser ? (
                <Redirect to="/dashboard" />
              ) : (
                <SignUpPage {...props} />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={(props) =>
              currentUser ? <Dashboard {...props} /> : <Dashboard {...props} />
            }
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
