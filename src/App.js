import React from "react";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Basket from "./components/Basket/Basket";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/cart' element={<Basket/>} exact/>
                <Route path='/product/:id' element={<ProductDetail/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;