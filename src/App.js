import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Users from "./Pages/Users";
import Spaces from "./Pages/Spaces";
import Events from "./Pages/Events";
import PrivateOutlet from "./components/PrivateOutlet";





function App() {
  return <div className="App">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>

      <Route path='/private' element={<PrivateOutlet />}>
        <Route path='/private/profile' element={<Profile />}/>
        <Route path='/private/users' element={<Users />}/>
        <Route path='/private/spaces' element={<Spaces />}/>
        <Route path='/private/events' element={<Events />}/>
      </Route>
    </Routes>
  </div>;
}

export default App;
