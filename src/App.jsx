import { Routes, Route } from "react-router-dom";
import ZasticeneRute from "./components/ZasticeneRute";
import Dashboard from "./components/pages/nadzornaPloca/Dashboard";
import MyTodos from "./components/pages/mojiZadaci/MyTodos";
import AllTodos from "./components/pages/sviZadatci/AllTodos";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ZasticeneRute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-todos" element={<MyTodos />} />
          <Route path="all-todos" element={<AllTodos />} />
        </Route>
        <Route path="homepage" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
