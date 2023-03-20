import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dialogs} from "./components/Dialogs/Dialogs";

function App() {
    const title = 'ООО АктивТрансТур'

    return (
        <BrowserRouter>
            <div className="App">
                <Header title={title}/>
                <Navbar/>
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
