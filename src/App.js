import {  Route, Routes } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import './App.css';

function App() {
  return (
    <>
       <Header/>
       <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
       </div>
    </>
  );
}

export default App;
