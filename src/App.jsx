
  // // ---------------------------------------------------------------------------------------
  // import "./App.css";
  // import Header from "./Header/Header";
  // import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
  // import Home from "./Home/Home";
  // import Service from "./Services/Service";
  // import About from "./About/About";
  // import Maps from "./Map/Leaflet";
  // import Book from "./Booking/Booking";
  // import Login from "./Login/Login";
  // import SignUp from "./Sign Up/SignUp";
  // import AdminPanel from "./Admin/Admin";
  // import { useState, useEffect } from "react";
  
  // function App() {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  
  //   const [isLogin, setIsLogin] = useState(localStorage.getItem("isLoggedIn") === "true");
  //   const [username, setUsername] = useState(localStorage.getItem("username") || "User");
  //   const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");
  
  //   useEffect(() => {
  //     setIsLogin(localStorage.getItem("isLoggedIn") === "true");
  //     setUsername(localStorage.getItem("username") || "User");
  //     setIsAdmin(localStorage.getItem("isAdmin") === "true");
  //   }, []);
  
  //   const handleLogin = (name, adminStatus) => {
  //     setIsLogin(true);
  //     setUsername(name);
  //     setIsAdmin(adminStatus);
  //     localStorage.setItem("isLoggedIn", "true");
  //     localStorage.setItem("username", name);
  //     localStorage.setItem("isAdmin", adminStatus);
  //     navigate(adminStatus ? "/admin" : "/");
  //   };
    
    
  
  //   const handleLogout = () => {
  //     setIsLogin(false);
  //     setUsername("User");
  //     setIsAdmin(false);
  //     localStorage.removeItem("isLoggedIn");
  //     localStorage.removeItem("username");
  //     localStorage.removeItem("isAdmin");
  //     navigate("/login");
  //   };
  
  //   return (
  //     <>
  //       {!["/login", "/signup"].includes(location.pathname) && (
  //         <Header isLogin={isLogin} onLogout={handleLogout} username={username} />
  //       )}
  
  //       <Routes>
  //       <Route path='/login' element={<Login onlogin={handleLogin} />} />


  //         <Route path="/signup" element={<SignUp />} />
  //         <Route path="/" element={<Home />} />
  //         <Route path="/services" element={<Service isLogin={isLogin} />} />
  //         <Route path="/about" element={<About />} />
  //         <Route path="/services/maps" element={<Maps />} />
  //         <Route path="/service/book" element={<Book />} />
  //         <Route path="/login/admin" element={isAdmin ? <AdminPanel /> : <Login onLogin={handleLogin} />} />
  //       </Routes>
  //     </>
  //   );
  // }
  
  // export default App;
  
// ---------------------------------
import "./App.css";
import Header from "./Header/Header";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./Home/Home";
import Service from "./Services/Service";
import About from "./About/About";
import Maps from "./Map/Leaflet";
import Book from "./Booking/Booking";
import Login from "./Login/Login";
import SignUp from "./Sign Up/SignUp";
import AdminPanel from "./AdminFolder/Admin/Admin";
import { useState, useEffect } from "react";
import AdminAddParking from "./AdminFolder/Addlocation/Addlocation";
import BookingAdmin from "./AdminFolder/BookedDetails/BookedDetails";
import PaymentPage from "./Payment/PaymentPage";
import Myprofile from "./MyProfile/Myprofile";


function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [username, setUsername] = useState(localStorage.getItem("username") || "User");

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLoggedIn") === "true");
    setUsername(localStorage.getItem("username") || "User");
  }, []);

  const handleLogin = (name) => {
    setIsLogin(true);
    setUsername(name);
  };

  const handleLogout = () => {
    setIsLogin(false);
    setUsername("User");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login");
  };

  // Hide the Header for all admin routes
  const hideHeader = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideHeader && <Header isLogin={isLogin} onLogout={handleLogout} username={username} />}

      <Routes>
        <Route path="/login" element={<Login onlogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service isLogin={isLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/maps" element={<Maps />} />
        <Route path="/service/book" element={<Book />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/addlocation" element={<AdminAddParking />} />
        <Route path="/admin/bookings" element= {<BookingAdmin />}/>
        <Route path="/Service/book/payment" element={<PaymentPage/>}/>
        <Route path="/booking" element ={<Myprofile/>}/>
      </Routes>
       
    </>
  );
}

export default App;
