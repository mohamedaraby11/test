import React from 'react'
import Navbar from './component/Navbar';
import Content from './component/Content';
import Footer from './component/Footer';
import About from './component/About';
import ErrorPage from './component/ErrorPage';
import Home from './component/Home';

import { BrowserRouter, Route, Routes } from "react-router-dom"
const App = () => {


    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Routes>
                <Route path='/' element={<Home />} />

                    <Route path='/content' element={<Content />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/footer' element={<Footer />} />
                    <Route path='*' element={<ErrorPage />} />



                </Routes>

            </BrowserRouter>


        </div>
    )
}

export default App
