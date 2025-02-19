import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";

const App = () => {
  return <>
  <main>
    <Navbar/>
    <Home/>
    <About/>
    <Speakers/>
    <Footer/>
  </main>
  </>;
};
export default App;
