import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from "antd";
import { initializeApp } from "firebase/app";
import "./Login.css";

const firebaseConfig = {
  apiKey: "AIzaSyCl8GfCzd4R2fJr365tD3lSPmydt",
  authDomain: "parkpay-e7272.firebaseapp.com",
  projectId: "parkpay-e7272",
  storageBucket: "parkpay-e7272.firebasestorage.app",
  messagingSenderId: "416675067737",
  appId: "1:416675067737:web:41375e887e74462b407e48",
  measurementId: "G-Z2YQHHEMM8",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const Login = () => {
  const { setIsLogin, setUsername } = useContext(AuthContext);
  const [state, setState] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsLogin(true);
        setUsername(currentUser.displayName);
        localStorage.setItem("profilePic", currentUser.photoURL || ""); 
        navigate("/");
      }
    });
    return unsubscribe;
  }, [setIsLogin, setUsername, navigate]);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setIsLogin(true);
      setUsername(result.user.displayName);
      localStorage.setItem("profilePic", result.user.photoURL || "");
      toast.success(`Welcome, ${result.user.displayName}!`);
      navigate("/");
    } catch {
      toast.error("Google Sign-In failed. Try again!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = state;
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
    try {
      await axios.post("https://backend-parkpay.onrender.com/login", { username, password });
      localStorage.setItem("islogin", "true");
      setIsLogin(true);
      setUsername(username);
      localStorage.setItem("username", username);

      if (username === "Saidulu" && password === "Saigoud@7780") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch {     
      alert("Invalid credentials. Try again!");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={state.username}
            onChange={(e) => setState({ ...state, username: e.target.value })}
            required
          />
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              value={state.password}
              onChange={(e) => setState({ ...state, password: e.target.value })}
              required
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
            </span>
          </div>
          <Button type="primary" htmlType="submit" className="login-button">
            Login
          </Button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
