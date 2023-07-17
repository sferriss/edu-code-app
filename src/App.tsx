import './App.css'
import {Outlet} from "react-router-dom";
import {Navbar} from "./components/Navbar.tsx";
// import {Footer} from "./components/Footer.tsx";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Outlet/>
            {/*<Footer />*/}
        </div>

    )
}

export default App
