import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />}></Route>
          <Route path="profile" element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
