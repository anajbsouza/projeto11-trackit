import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Habitos from './pages/Habitos'
import Hoje from './pages/Hoje'
import Historico from './pages/Historico'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import UserContext from './components/UserContext'

function App() {
  const [token, setToken] = useState("");
  const [logado, setLogado] = useState(false);
  const [imagem, setImagem] = useState("");
  const [listaHabitos, setListaHabitos] = useState([]);
  const [listaHabitosHoje, setListaHabitosHoje] = useState([]);
  const [habitosCompletados, setHabitosCompletados] = useState([]);
  return (
    // <UserContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setToken={setToken}/>} />
          <Route path="/cadastro" element={<Cadastro setImagem={setImagem}/>} />
          <Route path="/habitos" element={<Habitos token={token} setListaHabitos={setListaHabitos} imagem={imagem}/>} />
          <Route path="/hoje" element={<Hoje token={token} setListaHabitosHoje={setListaHabitosHoje} imagem={imagem}/>} />
          <Route path="/historico" element={<Historico token={token} imagem={imagem}/>} />
        </Routes>
      </BrowserRouter>
    // </UserContext.Provider>
  );
}

export default App;