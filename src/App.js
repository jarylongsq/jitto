import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login.js"
import Details from "./views/Details/Details.js"


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} ></Route>
          <Route path="/details" element={<Details/>} ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
