import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import TicketSearch from "./components/Ticket";

const App = () => {
  return <>
  <main className="text-white">
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
        <Home />
        <About />
        <Sponsors/>
        <Speakers />
        </>
      }/>
      <Route path="/our-team" element={<Team />} />
      <Route path="/tickets" element={<TicketSearch/>} />
    </Routes>
    <Footer />
  </main>
  </>;
};
export default App;
