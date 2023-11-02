import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
function Content() {
    return (
        <div className="fixed top-0 left-20 h-screen right-0 p-5 overflow-auto z-0">
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>
    )
}

export default Content
