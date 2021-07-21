import React from "react";
import profilePic from "./images/Profile.jpg";

const About = () => {
  let flag = true;
  window.addEventListener('scroll', () => {
    let cssBar = document.getElementById('progress_css');
    let htmlBar = document.getElementById('progress_html');
    let jsBar = document.getElementById('progress_js');
    let percentage = 0;
    let cssPercentage = 0;
    let jsPercentage = 0;
    if (document.getElementById('about').getBoundingClientRect().top < 200 && flag === true) {
      htmlBar.style.backgroundColor = "#F5073F";
      htmlBar.style.animation = "loader_html 1s ease-in-out";
      cssBar.style.backgroundColor = "#F5073F";
      cssBar.style.animation = "loader_css 1s ease-in-out";
      jsBar.style.backgroundColor = "#F5073F";
      jsBar.style.animation = "loader_js 1s ease-in-out";
      function htmlTimer() {
        document.getElementById("html_percentage").innerText = `${percentage}%`;
        percentage++;
        if (percentage < 86) {
          setTimeout(htmlTimer, 800 / 85);
        } else {
          console.log("done1");
        };
      };
      function cssTimer() {
        document.getElementById("css_percentage").innerText = `${cssPercentage}%`;
        cssPercentage++;
        if (cssPercentage < 76) {
          setTimeout(cssTimer, 800 / 85);
        } else {
          console.log("done2");
        };
      };
      function jsTimer() {
        document.getElementById("js_percentage").innerText = `${jsPercentage}%`;
        jsPercentage++;
        if (jsPercentage < 80) {
          setTimeout(jsTimer, 800 / 85);
        } else {
          console.log("done3");
        };
      };
      htmlTimer();
      cssTimer();
      jsTimer();
      flag = false;
    };
  })


  return <section id="about">
    <img id="profile_pic" src={profilePic} alt="This is Profile Picture" />
    <div className="profile_info">
      <span style={{ display: "flex" }}><h4 style={{ color: "#B6B6B6" }}>About M</h4><h4 style={{ color: "#D40334" }}>e</h4></span>
      <h1>Hello there! My name is Prateek Vaidya. </h1>
      <article style={{ fontSize: '14px' }}>
        I am a freelance front-end developer and a UI/UX Designer powered by Figma, JavaScript, Visual Studio Code and Coffee. I love cycling, photography, drawing and bumming around. For any business related issue, email me and to get in touch, feel free to contact me anytime.
      </article>
      <div className="forHtml">
        <h1 style={{ fontSize: '16px' }}>HTML</h1>
        <div className="loader">
          <div id="html_loadbar">
            <div id="progress_html"></div>
          </div>
          <h1 id="html_percentage">0%</h1>
        </div>
      </div>
      <div className="forCss">
        <h1 style={{ fontSize: '16px' }}>CSS</h1>
        <div className="loader">
          <div id="html_loadbar">
            <div id="progress_css"></div>
          </div>
          <h1 id="css_percentage">0%</h1>
        </div>
      </div>
      <div className="forJs">
        <h1 style={{ fontSize: '16px' }}>JavaScript</h1>
        <div className="loader">
          <div id="html_loadbar">
            <div id="progress_js"></div>
          </div>
          <h1 id="js_percentage">0%</h1>
        </div>
      </div>
    </div>
  </section>
}
export default About;
