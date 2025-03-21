import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";
import Team from "./components/Team";

const App = () => {
  return <>
  <main className="text-white">
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
        <Home />
        <About />
        <Speakers />
        </>
      }/>
      <Route path="/our-team" element={<Team />} />
    </Routes>
    <Footer />
  </main>
  </>;
};
export default App;
