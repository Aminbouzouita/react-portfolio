import React, { lazy } from "react";
import { BrowserRouter as Router, Link, Switch, useLocation, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

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
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Projects" component={Projects} />
                    <Route exact path="/Skills" component={Skills} />
                </Switch>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default App;
