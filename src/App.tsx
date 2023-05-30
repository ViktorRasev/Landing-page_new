import './App.css'
import Header from "./components/Header"
import {Routes, Route} from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>

    )
}

export default App
