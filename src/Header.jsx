import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

const Header = () => {
  useEffect(() => {
    document.getElementById('top_nav').style.color = "#fff";
    document.getElementById('link1').style.color = "#F5073F";
    document.getElementById("link1").style.transform = "scale(1.1)";
    document.getElementById("link1").style.fontWeight = "900";
  }, []);


  let links = ["link1", "link2", "link3", "link4", "link5"];


  let windowYoffset = 0;
  window.addEventListener('scroll', (event) => {
    windowYoffset = window.pageYOffset;
    if (windowYoffset > innerHeight / 4) {
      document.getElementById("top_nav").style.backgroundColor = "#fff";
      document.getElementById('top_nav').style.boxShadow = "0 1px 5px gray";
      document.getElementById('top_nav').style.color = "#111";
      if (innerWidth > 700) {
        document.querySelector('.header_nav').style.borderLeft = "1px solid #111";
      };
    } else {
      document.getElementById("top_nav").style.backgroundColor = "transparent";
      document.getElementById('top_nav').style.boxShadow = "0 0px 0px #111";
      document.getElementById('top_nav').style.color = "#fff";
      document.querySelector('.header_nav').style.borderLeft = "0px solid #111";
    };


    if (windowYoffset <= innerHeight / 1.2) {
      links.map((ele) => {
        if (ele === "link1") {
          document.getElementById(`${ele}`).style.color = "#F5073F";
          document.getElementById(`${ele}`).style.transform = "scale(1.1)";
          document.getElementById(`${ele}`).style.fontWeight = "900";
        } else {
          if (windowYoffset <= innerHeight / 4) {
            document.getElementById(`${ele}`).style.color = "#fff";
          } else {
            document.getElementById(`${ele}`).style.color = "#111";
          };
          document.getElementById(`${ele}`).style.transform = "scale(1)";
          document.getElementById(`${ele}`).style.fontWeight = "normal";
        };
      })
    };


    if (windowYoffset >= innerHeight / 1.2) {
      links.map((ele) => {
        if (ele === "link2") {
          document.getElementById(`${ele}`).style.color = "#F5073F";
          document.getElementById(`${ele}`).style.transform = "scale(1.1)";
          document.getElementById(`${ele}`).style.fontWeight = "900";
        } else {
          document.getElementById(`${ele}`).style.color = "#111";
          document.getElementById(`${ele}`).style.transform = "scale(1)";
          document.getElementById(`${ele}`).style.fontWeight = "normal";
        };
      })
    };

    if (windowYoffset >= innerHeight * 2) {
      links.map((ele) => {
        if (ele === "link3") {
          document.getElementById(`${ele}`).style.color = "#F5073F";
          document.getElementById(`${ele}`).style.transform = "scale(1.1)";
          document.getElementById(`${ele}`).style.fontWeight = "900";
        } else {
          document.getElementById(`${ele}`).style.color = "#111";
          document.getElementById(`${ele}`).style.transform = "scale(1)";
          document.getElementById(`${ele}`).style.fontWeight = "normal";
        };
      })
    };
    if (windowYoffset >= innerHeight * 3) {
      links.map((ele) => {
        if (ele === "link4") {
          document.getElementById(`${ele}`).style.color = "#F5073F";
          document.getElementById(`${ele}`).style.transform = "scale(1.1)";
          document.getElementById(`${ele}`).style.fontWeight = "900";
        } else {
          document.getElementById(`${ele}`).style.color = "#111";
          document.getElementById(`${ele}`).style.transform = "scale(1)";
          document.getElementById(`${ele}`).style.fontWeight = "normal";
        };
      })
    };
    if (windowYoffset >= innerHeight * 4) {
      links.map((ele) => {
        if (ele === "link5") {
          document.getElementById(`${ele}`).style.color = "#F5073F";
          document.getElementById(`${ele}`).style.transform = "scale(1.1)";
          document.getElementById(`${ele}`).style.fontWeight = "900";
        } else {
          document.getElementById(`${ele}`).style.color = "#111";
          document.getElementById(`${ele}`).style.transform = "scale(1)";
          document.getElementById(`${ele}`).style.fontWeight = "normal";
        };
      })
    };
  });




  return (
    <header id="top_nav">
      <h1 id="heading" style={{ fontFamily: "'Raleway', sans-serif" }}>PRTK</h1>
      <p id="menu">Menu</p>
      <ul className="header_nav">
        <a href='#' className="nav_link" id="link1" ><li>Home</li></a>
        <a href='#about' className="nav_link" id="link2" ><li>About</li></a>
        <a href='#services' className="nav_link" id="link3" ><li>Services</li></a>
        <a href='#portfolio' className="nav_link" id="link4" ><li>Portfolio</li></a>
        <a href='#contact' className="nav_link" id="link5" ><li>Contact</li></a>
      </ul>
    </header>
  );
};

export default Header;
