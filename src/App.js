import "./App.css";
import LandingPage from "./LandingPage";
import { Switch, Route } from "react-router";
import Header from "./Header";
import About from "./About";
import Services from './Services/Services';
import Portfolio from "./Portfolio";
import Contact from './Contact';
function App() {
  return (
    <>
      <main>
        <Header />
        <LandingPage />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}
export default App;
