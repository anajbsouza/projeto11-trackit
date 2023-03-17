import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Habitos from './pages/Habitos'
import Hoje from './pages/Hoje'
import Historico from './pages/Historico'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import UserContext from './components/UserContext'

function App() {
  const [userData, setUserData] = useState({token : "", isLogged : false, image : "" , habitsList : [], todayHabitsList : [], completedHabits: [], userHistoric : []});
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;