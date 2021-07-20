import React from "react";
import Img from "./images/banner.png";
import mobileBanner from "./images/mobileBanner.png";
import Particles from 'react-particles-js';
import './App.css';



const LandingPage = () => {


  return (
    <section id="landing_page">
      <Particles
        className="particles1"
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
      <img id="landingPageBanner" style={{ zIndex: '0', width: "100%", objectFit: 'contain', objectPosition: 'bottom' }} src={Img} alt="this" />
      <img id="landingPageBannerMobile" src={mobileBanner} alt="this" />

      <div className="landingPage_info">
        <span style={{ fontSize: '2rem' }}><p style={{ letterSpacing: '2px', lineHeight: "5vh", marginRight: '10px', fontWeight: '500' }}>Hello, I am a </p> <h1 style={{ letterSpacing: '5px', fontWeight: '1000', maxWidth: '100vw' }} id="typewriter">Front-End Developer</h1></span>
        <p id="landingPage_p" style={{ fontSize: "0.8rem", padding: '20px 0', letterSpacing: '0px', fontWeight: '100', width: '80%' }}>Looking for a web Developer?</p>
        <div id="social_links">
          <a target="_blank" href="">
            <svg width="15" height="20" viewBox="0 0 30 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 17.8947H0V26.4211H7.5V52.0005H20V26.4211H29.105L30 17.8947H20V14.3413C20 12.3056 20.48 11.4999 22.7875 11.4999H30V0.841797H20.48C11.49 0.841797 7.5 4.21614 7.5 10.6792V17.8947Z" fill="#1877F2" />
            </svg>
          </a>
          <a target="_blank" href="https://www.instagram.com/prtk.sd/">
            <svg width="20" height="20" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 47.3898C18.325 47.3898 17.5333 47.3642 14.8958 47.2406C8.12083 46.9251 4.95625 43.636 4.64792 36.7552C4.52709 34.0587 4.50417 33.2487 4.50417 26.419C4.50417 19.5872 4.52917 18.7793 4.64792 16.0828C4.95834 9.20837 8.11458 5.91291 14.8958 5.59743C17.5333 5.47379 18.3208 5.44821 25 5.44821C31.675 5.44821 32.4667 5.47379 35.1021 5.59743C41.8938 5.91504 45.0417 9.21903 45.35 16.085C45.4708 18.7814 45.4958 19.5893 45.4958 26.4211C45.4958 33.2508 45.4688 34.0587 45.35 36.7573C45.0396 43.636 41.8833 46.9273 35.1021 47.2427C32.4646 47.3642 31.675 47.3898 25 47.3898ZM25 52.0005C31.7896 52.0005 32.6396 51.9706 35.3063 51.847C44.3854 51.4207 49.4313 46.2665 49.8479 36.9684C49.9708 34.2378 50 33.3681 50 26.4211C50 19.4742 49.9708 18.6024 49.85 15.8739C49.4333 6.58436 44.3958 1.4216 35.3083 0.995277C32.6396 0.871643 31.7896 0.841797 25 0.841797C18.2104 0.841797 17.3583 0.871643 14.6917 0.995277C5.62083 1.4216 0.5625 6.57584 0.152084 15.8739C0.0291672 18.6024 0 19.4742 0 26.4211C0 33.3681 0.029171 34.2378 0.150002 36.9662C0.558334 46.2473 5.60209 51.4186 14.6896 51.8449C17.3583 51.9706 18.2104 52.0005 25 52.0005V52.0005ZM25 39.5561C32.0896 39.5561 37.8375 33.675 37.8375 26.4211C37.8375 19.1673 32.0896 13.284 25 13.284C17.9104 13.284 12.1625 19.1651 12.1625 26.4211C12.1625 33.675 17.9104 39.5561 25 39.5561ZM25 17.8947C29.6021 17.8947 33.3333 21.7103 33.3333 26.4211C33.3333 31.1299 29.6021 34.9476 25 34.9476C20.3979 34.9476 16.6667 31.1299 16.6667 26.4211C16.6667 21.7103 20.3979 17.8947 25 17.8947ZM11.6542 43.1436C13.3125 43.1436 14.6562 41.7688 14.6562 40.0741C14.6562 38.3795 13.3125 37.0046 11.6542 37.0046C9.99792 37.0046 8.65625 38.3795 8.65625 40.0741C8.65625 41.7688 9.99792 43.1436 11.6542 43.1436Z" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="52.0005" x2="50.8894" y2="12.211" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0729167" stop-color="#F7D200" />
                  <stop offset="0.369792" stop-color="#F82900" />
                  <stop offset="0.578125" stop-color="#E70928" />
                  <stop offset="0.697917" stop-color="#DC3D83" />
                  <stop offset="0.911458" stop-color="#7B35B0" />
                </linearGradient>
              </defs>
            </svg>
          </a>
          <a target="_blank" href="">
            <svg width="23" height="20" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 6.89827C48.1604 7.92648 46.1833 8.61895 44.1083 8.93108C46.2271 7.33368 47.8542 4.8025 48.6187 1.78607C46.6375 3.26543 44.4417 4.34086 42.1042 4.92054C40.2354 2.41034 37.5667 0.841797 34.6167 0.841797C27.9937 0.841797 23.1271 8.62157 24.6229 16.6977C16.1 16.16 8.54167 11.019 3.48125 3.20511C0.79375 9.00977 2.0875 16.6033 6.65417 20.4486C4.975 20.3804 3.39167 19.8007 2.01042 18.8328C1.89792 24.8159 5.30417 30.4133 10.2375 31.6592C8.79375 32.1524 7.2125 32.2678 5.60417 31.8796C6.90833 37.0101 10.6958 40.7426 15.1875 40.8476C10.875 45.1047 5.44167 47.0063 0 46.1984C4.53958 49.8628 9.93333 52.0005 15.725 52.0005C34.7708 52.0005 45.5312 31.7484 44.8812 13.5843C46.8854 11.7613 48.625 9.48715 50 6.89827Z" fill="#00A2F5" />
            </svg>
          </a>
          <a href="mailTo:pratikvaidya1803@gmail.com"><svg width="25" height="20" viewBox="0 0 60 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 28.2972L0.0375 0.691589H59.965L30 28.2972ZM16.4375 23.1189L0 7.97313V43.5026L16.4375 23.1189ZM43.5625 23.1189L60 43.5026V7.97313L43.5625 23.1189ZM39.67 26.7028L30 35.6129L20.33 26.7028L0.055 51.85H59.945L39.67 26.7028Z" fill="white" />
          </svg></a>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
