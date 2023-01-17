import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Users from "./components/Users";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="profile" element={<Home />}></Route>
        </Route>
        <Route path="users" element={<Users />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
