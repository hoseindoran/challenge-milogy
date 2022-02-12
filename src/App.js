import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Sidebar from "./Components/Sidebar";
import CreateEvent from "./Components/CreateEvent";
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <div className="main-content">
                    <Sidebar/>
                    <Routes>
                        <Route path="/" element={<CreateEvent />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
