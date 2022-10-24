import Navbar from "./components/Navbar";
import Analytics from "./sessions/Analytics";
import Cards from "./sessions/Cards";
import Contact from "./sessions/Contact";
import Footer from "./sessions/Footer";
import Hero from "./sessions/Hero";
import Payment from "./sessions/Payment";
import Questions from "./sessions/Questions";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Analytics />
      <Payment />
      <Questions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
