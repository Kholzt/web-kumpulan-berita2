import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./news/Landing";
import "./css/index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
