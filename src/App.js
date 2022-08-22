import { Routes, Route } from "react-router-dom";

import ZasticeneRute from "./components/ZasticeneRute";
import Dashboard from "./components/Dashboard";
import MyTodos from "./components/MyTodos";
import AllTodos from "./components/AllTodos";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<ZasticeneRute />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='my-todos' element={<MyTodos />} />
          <Route path='all-todos' element={<AllTodos />} />
        </Route>
        <Route path='homepage' element={<Homepage />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
