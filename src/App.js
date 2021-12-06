import "./App.css"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="App">
            <Home />
            <About />
            <Projects />
            <Experience />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default App
