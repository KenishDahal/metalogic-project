import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./scss/style.scss";
import About from "./pages/About";
import Headroom from "react-headroom";

function App() {
  return (
    <div className="App">
      <Headroom>
        <Navbar />
      </Headroom>
      <About />
      <Footer />
    </div>
  );
}

export default App;
