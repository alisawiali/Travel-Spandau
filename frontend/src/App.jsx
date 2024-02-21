import "./App.css";
import "./css/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  Offers,
  Popular,
  About,
  Contacts,
  ErroMassage,
  Footer,
} from "./Ul/Ulti-componeten";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<ErroMassage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
