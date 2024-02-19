import "./App.css";
import "./css/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Navbar, Popular } from "./Ul/Ulti-componeten";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/popular" element={<Popular />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
