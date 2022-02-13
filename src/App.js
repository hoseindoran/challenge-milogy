import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Sidebar from "./Components/Sidebar";
import CreateEvent from "./Components/CreateEvent";
import SettingEvent from "./Components/SettingEvent";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";

const App = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            <BrowserRouter>
                <Header handler={setOpen} state={open}/>
                <div className="main-content">
                    <Sidebar state={open}/>
                    <Routes>
                        <Route path="/" element={<CreateEvent />} />
                        <Route path="/setting" element={<SettingEvent />} />
                    </Routes>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                />
            </BrowserRouter>
        </>
    );
}

export default App;
