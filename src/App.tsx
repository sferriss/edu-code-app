import './App.css'
import {Outlet} from "react-router-dom";
import {Navbar} from "./components/Navbar.tsx";
import {Footer} from "./components/Footer.tsx";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>

    )
}

export default App
