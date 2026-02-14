import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  return (
    <div className="main min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
