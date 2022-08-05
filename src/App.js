import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
