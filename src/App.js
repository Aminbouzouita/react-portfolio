import React, { lazy } from "react";
import { BrowserRouter as Router, Link, Switch, useLocation, Route } from "react-router-dom";


function App() {
    const location = useLocation();
    const Projects = lazy(() => import("./pages/Projects/Projects"));
    const Skills = lazy(() => import("./pages/Skills/Skills"));
    const About = lazy(() => import("./pages/About/About"));
    const Home = lazy(() => import("./pages/Home/Home"));
    const NavTabs = lazy(() => import("./components/NavTabs/NavTab/NavTab"));
    const Footer = lazy(() => import("./components/Footer/Footer"))

    return (

        <div>
            <NavTabs />
            <Switch >
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Projects" component={Projects} />
                <Route exact path="/Skills" component={Skills} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
