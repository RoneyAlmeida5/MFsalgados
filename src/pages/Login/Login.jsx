import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../../api/api";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import logo from "../../assets/logo.png";
import './Login.css';

import { Mail, Lock } from "lucide-react";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    /* try {
      const response = await axios.post("https://api.exemplo.com/auth/login", { email, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      const user = jwtDecode(token);
      console.log("Usuário logado:", user);
      navigate("/dashboard");
    } catch (err) {
      setError("Credenciais inválidas. Tente novamente.");
    } */
  };

  return (
    <div className="Container">
    <div className="Card">
      <img src={logo} alt="Logo da marca" className="logo" />
      <div className="InputContainer">
        <span className="Icon"><Mail size={20} /></span>
        <input 
          className="Input"
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="InputContainer">
        <span className="Icon"><Lock size={20} /></span>
        <input 
          className="Input"
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="Btn" onClick={() => navigate("/caixamercadinho")}>
        Entrar
      </button>
    </div>
  </div>
  );
}
