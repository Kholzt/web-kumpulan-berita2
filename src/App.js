import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./news/Landing";
import "./css/index.css";
import NotFound from "./errors/NotFound";
import Detail from "./news/detail/Detail";
import { LoadingProvider } from "./contex/LoadingContext.js";

function App() {
  return (
    <LoadingProvider>
      {/* <BrowserRouter> */}
      <BrowserRouter basename="/web-kumpulan-berita2">
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/article/:slug" exact element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
