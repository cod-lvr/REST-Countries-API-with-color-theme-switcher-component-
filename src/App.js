import { Routes, Route } from "react-router-dom";
// import CountryDetails from "../src/components/CountryDetails";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path=":details" element={<CountryDetails />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
