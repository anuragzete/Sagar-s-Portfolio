import React, {useEffect} from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";

export default function Home() {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [location.pathname]);

    return (
        <div id='home'>
            <Hero/>
            <About/>
        </div>
    )
}