import "./App.css"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Experience from "./pages/Experience"
// import Contact from "./pages/Footer"
import Footer from "./components/Footer"

import Aos from "aos"
import "aos/dist/aos.css"
import {useEffect} from "react"

function App() {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className="App">
            <Home />
            <Projects />
            <Experience />
            <About />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default App
