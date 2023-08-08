import './App.css'
import {Outlet} from "react-router-dom";
import {Navbar} from "./components/Navbar.tsx";
import {ToastContainer} from "react-toastify";
// import {Footer} from "./components/Footer.tsx";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Outlet/>
            {/*<Footer />*/}
            <ToastContainer autoClose={false} limit={1}/>
        </div>
    )
}

export default App
