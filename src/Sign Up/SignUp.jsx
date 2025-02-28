import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Sign Up/SignUp.css"

const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // ✅ Validation function
  const validateFields = () => {
    const { username, password, email } = state;
    const newErrors = {};

    const usernameRegex = /^[a-zA-Z0-9_ ]{3,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username || !usernameRegex.test(username)) {
      newErrors.username = "Invalid Username: Use 3-15 characters (letters, numbers, or underscores).";
    }

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Invalid Email: Enter a valid email address.";
    }

    if (!password || !passwordRegex.test(password)) {
      newErrors.password =
        "Invalid Password: Must be at least 8 characters, with at least 1 letter, 1 number, and 1 special character (@, $, !, %, *, ?, &).";
    }

    return newErrors;
  };

  // ✅ Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post("https://backend-parkpay.onrender.com/register", state);
      console.log(response.data);
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    // <>
      <div className="signup-body">
        <div className="signup-container">
          <form onSubmit={handleSubmit} className="signup-form">
            <h2>Sign Up</h2>

            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={state.username}
              onChange={handleChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={state.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={state.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <button type="submit" className="signup-button">Sign Up</button>

            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    // </>
  );
};

export default SignUp;
