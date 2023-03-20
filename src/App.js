import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Habitos from './pages/Habitos'
import Hoje from './pages/Hoje'
import Historico from './pages/Historico'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import UserContext from './Context/UserContext'

function App() {
    const [token, setToken] = useState("");
    const [userData, setUserData] = useState({});
    
    return (
        <UserContext.Provider value={{userData, setUserData}}>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Login setToken={setToken}/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos token={token}/>} />
            <Route path="/hoje" element={<Hoje token={token}/>} />
            <Route path="/historico" element={<Historico token={token}/>} />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;