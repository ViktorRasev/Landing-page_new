import './App.css'
import Header from "./components/Header"
import Footer from "./components/Footer.tsx"
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
            <Footer />
        </>

    )
}

export default App
