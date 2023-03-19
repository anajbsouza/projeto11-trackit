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
  // const [logado, setLogado] = useState(false);
  // const [imagem, setImagem] = useState("");
  // const [listaHabitos, setListaHabitos] = useState([]);
  // const [listaHabitosHoje, setListaHabitosHoje] = useState([]);
  // const [habitosCompletados, setHabitosCompletados] = useState([]);
  const [userData, setUserData] = useState({});

  //const [userData, setUserData] = useState({ token: "", isLogged: false, image: "", habitsList: [], todayHabitsList: [], completedHabits: [], userHistoric: [] });
  
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro setToken={setToken}/>} />
          <Route path="/habitos" element={<Habitos token={token}/>} />
          <Route path="/hoje" element={<Hoje token={token}/>} />
          <Route path="/historico" element={<Historico token={token}/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;