import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
}

export default App;