import "./App.css";
import Companies from "./comonents/Companies/Companies";
import Header from "./comonents/Header/Header";
import Hero from "./comonents/Hero/Hero";
import Reisdensies from "./comonents/Reisdensies/Reisdensies";
import Value from "./comonents/Value/Value"
import Contact from "./comonents/Contact/Contact";
import GetStarted from "./comonents/GetStarted/GetStarted";
import Footer from "./comonents/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Reisdensies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
