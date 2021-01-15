import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as  Link, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet';
import "./style.css";
import bg from "./assets/img/bg.jpg";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import sun from "./assets/img/sun.jpg"
import buildings from "./assets/img/buildings.jpg"
import airplane from "./assets/img/aiplane.jpeg"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Suspense fallback={<h5>Loading…</h5>}>
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
            </Suspense>
        </div>
    );
}

export default App;
