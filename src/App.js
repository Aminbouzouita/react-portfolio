import React, { lazy } from "react";


function App() {
    const location = useLocation();
    const Projects = lazy(() => import("./pages/Projects/Projects"));
    const Skills = lazy(() => import("./pages/Skills/Skills"));
    const About = lazy(() => import("./pages/About/About"));
    const Home = lazy(() => import("./pages/Home/Home"));
    const NavTabs = lazy(() => import("./components/NavTabs/NavTab/NavTab"));
    const Footer = lazy(() => import("./components/Footer/Footer"))

}

export default App;
