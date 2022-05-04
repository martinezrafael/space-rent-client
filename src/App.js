import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Users from './Pages/Users'
import { Routes, Route } from 'react-router-dom'



function App() {
  return <div className="App">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/users' element={<Users />}/>
    </Routes>
  </div>;
}

export default App;
