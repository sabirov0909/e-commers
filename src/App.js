import React, {useState} from "react";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Basket from "./components/Basket/Basket";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./pages/Home";
import CategoryProducts from "./components/CategoryProducts/CategoryProducts";

function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home/>} exact/>

                <Route path="/cart" element={<Basket/>} exact/>

                <Route path="/login" element={<Login setUser={setUser}/>}/>

                <Route path="/product/:id" element={<ProductDetail/>} exact/>
                <Route path="/category-product/:id/:name" element={<CategoryProducts/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
