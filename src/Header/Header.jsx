// import { useState, useEffect, useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import "./Header.css";
// import { AuthContext } from "../AuthContext";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { islogin, setIsLogin } = useContext(AuthContext);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [profilePic, setProfilePic] = useState("");
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (islogin) {
//       setProfilePic(localStorage.getItem("profilePic") || "");
//       setUsername(localStorage.getItem("username") || "User");
//     }
//   }, [islogin]);

//   const handleLogout = () => {
//     setIsLogin(false);
//     localStorage.removeItem("islogin");
//     localStorage.removeItem("username");
//     localStorage.removeItem("profilePic");
//     navigate("/login");
//   };

//   return (
//     <header className="header">
//       <img src="../log.png" alt="Logo" className="logo" />

//       <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

//       <nav className={`navbar ${menuOpen ? "show" : ""}`}>
//         <Link to="/" className="nav-item">Home</Link>
//         <Link to="/services" className="nav-item">Services</Link>
//         <Link to="/about" className="nav-item">About</Link>
//         {islogin ?  (
            
//               <>
//                   <Link to="/bookings"  className="nav-item ham_login">My Bookings</Link>
//                   <button  onClick={handleLogout} className="nav-item ham_login">Logout</button>
//               </>
        
//          ) : (
//         <button className="ham_login" onClick={() => navigate("/login")}>Login</button>
//       )}
//       </nav>

//       {islogin ? (
//         <div className="profile-container">
//           <button className="profile-btn" onClick={() => setProfileOpen(!profileOpen)}>
//             {profilePic ? (
//               <img src={profilePic} alt="User Profile" className="profile-pic" />
//             ) : (
//               <AccountCircleIcon fontSize="large" />
//             )}
//           </button>
//           {profileOpen && (
//             <div className="profile-dropdown">
//               <p>Welcome, <b>{username}</b></p>
//               <Link to="/booking" className="dropdown-item">My Bookings</Link>
//               <button className="dropdown-item" onClick={handleLogout}>Logout</button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <button className="desktop-login-btn" onClick={() => navigate("/login")}>Login</button>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
import { AuthContext } from "../AuthContext";
import image from "./log.png"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { islogin, setIsLogin } = useContext(AuthContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (islogin) {
      const storedUsername = localStorage.getItem("username") || "User";
      setUsername(storedUsername);

      // Fetch user details from backend
      fetch(`https://backend-parkpay.onrender.com/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: storedUsername }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setProfilePic(data[0].profilePic || "");
            setEmail(data[0].email || "No Email Provided");

            // Store updated details in localStorage
            localStorage.setItem("profilePic", data[0].profilePic || "");
            localStorage.setItem("email", data[0].email || "");
          }
        })
        .catch((err) => console.error("Error fetching user details:", err));
    }
  }, [islogin]);

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("islogin");
    localStorage.removeItem("username");
    localStorage.removeItem("profilePic");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <header className="header">
      <img src={image} alt="Logo" className="logo" />

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      <nav className={`navbar ${menuOpen ? "show" : ""}`}>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/about" className="nav-item">About</Link>
        {islogin ? (
          <>
            <Link to="/booking" className="nav-item ham_login">My Bookings</Link>
            <button onClick={handleLogout} className="nav-item ham_login">Logout</button>
          </>
        ) : (
          <button className="ham_login" onClick={() => navigate("/login")}>Login</button>
        )}
      </nav>

      {islogin ? (
        <div className="profile-container" tabIndex="0">
          <button className="profile-btn" onClick={() => setProfileOpen(!profileOpen)}>
            {profilePic ? (
              <img src={profilePic} alt="User Profile" className="profile-pic" />
            ) : (
              <AccountCircleIcon fontSize="large" />
            )}
          </button>
          {profileOpen && (
            <div className="profile-dropdown">
              <p><b>{username}</b></p>
              <p className="email-text">{email}</p>
              <Link to="/booking" className="dropdown-item">My Profile</Link>
              <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      ) : (
        <button className="desktop-login-btn" onClick={() => navigate("/login")}>Login</button>
      )}
    </header>
  );
};

export default Header;


