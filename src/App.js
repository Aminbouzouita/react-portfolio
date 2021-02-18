import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Link, Switch, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [ref, setRef] = useState(0);
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [setRef])
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta property="og:title" content="Amin Bouzouita" />
                <meta name="author" content="Amin Bouzouita" />
                <meta property="og:locale" content="en_US" />
                <meta name="description" content="Amin Bouzouita | Full Stack Web Developer | Located in Orange County, CA" />
                <meta property="og:description" content="Full Stack Web Developer" />
                <title>Amin Bouzouita | Full Stack Web Developer</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
            </Helmet>
            <Suspense fallback={<h5>Loading…</h5>}>
            <AnimatePresence exitBeforeEnter>
          <div className="App">
            <section>
              <img
                src={bg}
                id="bg"
                alt="test"
                className="parallax"
                style={{
                  transform: `translateY(${offset * 1}px)`,
                }}
              />
              <Navbar />
              <img
                src={sun}
                id="sun"
                alt="sun"
                style={{
                  transform: `translateX(${offset * 1}px)`,
                }}
              /><img
                src={airplane}
                id="airplane"
                alt="airplane"
                style={{
                  transform: `translateX(${offset * 5}px)`,
                }}
              />
              <img
                src={buildings}
                id="buildings"
                alt="buildings"
                style={{
                  transform: `translateY(${offset * 1}px)`,
                }}
              />
            </section>
            <Footer />
                    <Switch key={location.pathname}>
                        <Link
                            exact path="/"
                            component={Home} />
                        <Link
                            exact path="/About"
                            component={About} />
                        <Link
                            exact path="/Projects"
                            component={Projects} />
                        <Link
                            exact path="/Skills"
                            component={Skills} />
                    </Switch>
                    </div>
                </AnimatePresence>
            </Suspense>
        </>
    );
}

export default App;
