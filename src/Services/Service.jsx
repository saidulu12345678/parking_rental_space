import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "../About/About";
import "./Service.css";
import { AuthContext } from "../AuthContext";

const Service = () => {
  const navigate = useNavigate();
  const { islogin } = useContext(AuthContext); // ✅ Use useContext at the top level

  const handleRoute = (vehicleType, price) => {
    if (!islogin) { // ✅ Access islogin correctly
      toast.error("Please login to use services");
    } else {
      localStorage.setItem("selected_vehicle", vehicleType);
      localStorage.setItem("vehicle_price", price);
      navigate("/services/maps");
    }
  };

  return (
    <>
      <ToastContainer />
      <div id="services">
        <h1 id="servicesh">Our Services</h1>
        <div id="row">
          {/* Bike Card */}
          <div id="cards">
            <img
              src="https://img.freepik.com/premium-vector/mobile_693697-228.jpg"
              alt="Bike"
              style={{ objectFit: "cover", width: "100%" }}
            />
            <h2 id="sh">Bike</h2>
            <h2 id="sh">Price: 30₹ perhr</h2>
            <center>
              <button onClick={() => handleRoute("Bike", 30)}>More Details</button>
            </center>
          </div>

          {/* Car Card */}
          <div id="cards">
            <img
              src="https://thumbs.dreamstime.com/b/cheerful-blue-cartoon-car-friendly-face-parked-under-sunny-sky-vibrant-landscape-bright-large-expressive-eyes-342000028.jpg"
              alt="Car"
              style={{ objectFit: "cover", width: "100%" }}
            />
            <h2 id="sh">Car</h2>
            <h2 id="sh">Price: 100₹ perhr</h2>
            <center>
              <button onClick={() => handleRoute("Car", 100)}>More Details</button>
            </center>
          </div>

          {/* Truck Card */}
          <div id="cards">
            <img
              src="https://i.pinimg.com/564x/ca/82/3e/ca823e058f5be67bdd283adf48a78d03.jpg"
              alt="Truck"
              style={{ objectFit: "cover", width: "100%" }}
            />
            <h2 id="sh">Truck</h2>
            <h2 id="sh">Price: 150₹ perhr</h2>
            <center>
              <button onClick={() => handleRoute("Truck", 150)}>More Details</button>
            </center>
          </div>

          {/* Bus Card */}
          <div id="cards">
            <img
              src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-blue-bus-vector-png-image_12157603.png"
              alt="Bus"
              style={{ objectFit: "cover", width: "100%" }}
            />
            <h2 id="sh">Bus</h2>
            <h2 id="sh">Price: 200₹ perhr</h2>
            <center>
              <button onClick={() => handleRoute("Bus", 200)}>More Details</button>
            </center>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Service;
