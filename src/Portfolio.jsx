import React from 'react';
import './Portfolio.css';
import Work from './Work';
import ChillMountains from "./images/portfolio_imgs/chillMountains.png";
import Parallax from "./images/portfolio_imgs/parallax.png";
import Portfolio2 from "./images/portfolio_imgs/portfolio-2.png";
import Shop from "./images/portfolio_imgs/portfolio1.png";
import StayAfloat from "./images/portfolio_imgs/stayAfloat.png";
import Wedding from "./images/portfolio_imgs/weddingPhotographer.png";

const Portfolio = () => {

    let list = [ChillMountains, Parallax, Portfolio2, Shop, StayAfloat, Wedding];
    let listName = ["Chilly Mountains", "A Parallax", "Portfolio-1", "Portfolio-2", "Stay Afloat", "For Wedding Phtotographers"];
    let listLinks = ["https://chillmountains.netlify.app", "https://parallax1.netlify.app", "https://portfoliotype1.netlify.app", "https://prtk.netlify.app", "https://gsapanimated.netlify.app", "https://brutemarkov.netlify.app"]

    return <section id="portfolio">
        <div id="portfolio_info">
            <span style={{ display: "flex" }}><h4 style={{ color: "#B6B6B6" }}>See My Wor</h4><h4 style={{ color: "#D40334" }}>k</h4></span>
            <h1>PORTFOLIO</h1>
        </div>
        <div id="works">
            {list.map((ele, index) => {
                return <a key={index} target="_blank" href={listLinks[index]}><Work url={ele} title={listName[index]} /></a>
            })}
        </div>
    </section>
};

export default Portfolio;