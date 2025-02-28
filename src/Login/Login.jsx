  // import { useState, useEffect } from "react";
  // import { useNavigate } from "react-router-dom";
  // import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
  // import { Link } from "react-router-dom";
  // import axios from "axios";
  // import { ToastContainer, toast } from "react-toastify";
  // import "react-toastify/dist/ReactToastify.css";
  // import './Login.css';
  // import { initializeApp } from "firebase/app";
  // import {
  //   getAuth,
  //   onAuthStateChanged,
  //   signInWithPopup,
  //   GoogleAuthProvider,
  // } from "firebase/auth";

  // // Firebase configuration
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCl8GfCzd4R2fJr365tD3lSPmydt",
  //   authDomain: "parkpay-e7272.firebaseapp.com",
  //   projectId: "parkpay-e7272",
  //   storageBucket: "parkpay-e7272.firebasestorage.app",
  //   messagingSenderId: "416675067737",
  //   appId: "1:416675067737:web:41375e887e74462b407e48",
  //   measurementId: "G-Z2YQHHEMM8",
  // };

  // // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  // const provider = new GoogleAuthProvider();

  // const Login = ({ islogin, onlogin }) => {
  //   const [state, setState] = useState({
  //     username: "",
  //     password: "",
  //   });

  //   const [showPassword, setShowPassword] = useState(false);
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //       if (currentUser) {
  //         onlogin(currentUser.displayName);
  //         navigate("/");
  //       }
  //     });
  //     return () => unsubscribe();
  //   }, [onlogin, navigate]);

  //   // Handle login with Google
  //   const signInWithGoogle = async () => {
  //     try {
  //       const result = await signInWithPopup(auth, provider);
  //       const user = result.user;
  //       onlogin(user.displayName); // Pass Google username to App.js
  //       toast.success(`Welcome, ${user.displayName}!`);
  //       navigate("/");
  //     } catch (error) {
  //       console.error("Error signing in:", error);
  //       toast.error("Google Sign-In failed. Try again!");
  //     }
  //   };

  //   // Handle login submission
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post(
  //         "https://backend-parkpay.onrender.com/login",
  //         state
  //       );
  //       const { username } = response.data; // Assuming the API returns the username

  //       toast.success(`Welcome, ${username}!`, { className: "toast-message" });

  //       setTimeout(() => {
  //         onlogin(username); // Store username in App.js
  //         navigate("/");
  //       }, 2000);
  //     } catch (error) {
  //       console.error("Login failed:", error);
  //       toast.error("Invalid credentials. Please try again.");
  //     }
  //   };

  //   // Handle input change
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setState((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   };

  //   return (
  //     <>
  //       <ToastContainer position="top-right" autoClose={3000} />

  //       <div className="login-container">
  //         <form onSubmit={handleSubmit} className="login-form">
  //           <h2>Login</h2>

  //           <label htmlFor="username">Username</label>
  //           <input
  //             type="text"
  //             id="username"
  //             name="username"
  //             placeholder="Enter your username"
  //             value={state.username}
  //             onChange={handleChange}
  //             required
  //           />

  //           <label htmlFor="password">Password</label>
  //           <div className="password-wrapper">
  //             <input
  //               type={showPassword ? "text" : "password"}
  //               id="password"
  //               name="password"
  //               placeholder="Enter your password"
  //               value={state.password}
  //               onChange={handleChange}
  //               required
  //             />
  //             <button
  //               type="button"
  //               className="toggle-password"
  //               onClick={() => setShowPassword((prev) => !prev)}
  //               style={{ background: "transparent", color: "#000" }}
  //             >
  //               {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
  //             </button>
  //           </div>

  //           <button type="submit" className="login-button">
  //             Login
  //           </button>

  //           <button type="button" onClick={signInWithGoogle} className="google-button">
  //             Sign In with Google
  //           </button>

  //           <p>
  //             Don't have an account? <Link to="/signup">Sign Up</Link>
  //           </p>
  //         </form>
  //       </div>
  //     </>
  //   );
  // };

  // export default Login;



  // -------------------------------------------------------------------------------

  
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
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                style={{ background: "transparent", color: "#000" }}
              >
                {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </button>
            </div>
            <Button type="primary" htmlType="submit" className="login-button">
              Login
            </Button>
            <Button type="default" onClick={signInWithGoogle} className="google-button">
              Sign In with Google
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
  
