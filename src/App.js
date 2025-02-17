import "./App.css";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./news/Landing";
import "./css/index.css";
import NotFound from "./errors/NotFound";
import Detail from "./news/detail/Detail";
import { LoadingProvider } from "./contex/LoadingContext.js";
import Test from "./Test.jsx";

function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/article/:slug" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
