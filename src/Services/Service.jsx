import React from "react";
import { Link } from "react-router-dom";
import "./Service.css"; // Add a CSS file for styling (optional)
import About from "../About/About";

const Service = () => {
  return (
    <>
      <div id="services">
        <h1 id="servicesh">Our Services</h1>
        <div id="row">
          {/* Bike Service */}
          <div id="cards">
            <h1 id="sh">
              <img
                src="https://img.freepik.com/premium-vector/mobile_693697-228.jpg"
                alt="Bike Icon"
                style={{ width: 200 }}
              />
            </h1>
            <h2 id="sh">Bike</h2>
            <h2 id="sh">Rate: 20₹ per/hr</h2>
            <center>
              <button>
                <Link to={"/services/maps"}>More Details</Link>
              </button>
            </center>
          </div>

          {/* Car Service */}
          <div id="cards">
            <h1 id="sh">
              <img
                src="https://www.svgrepo.com/show/500081/car.svg"
                alt="Car Icon"
                style={{ width: 200 }}
              />
            </h1>
            <h2 id="sh">Car</h2>
            <h2 id="sh">Rate: 80₹ per/hr</h2>
            <center>
              <button>
                <Link to={"/services/maps"}>More Details</Link>
              </button>
            </center>
          </div>

          {/* Truck Service */}
          <div id="cards">
            <h1 id="sh">
              <img
                src="https://www.svgrepo.com/show/243218/delivery-truck-cargo-truck.svg"
                alt="Truck Icon"
                style={{ width: 200 }}
              />
            </h1>
            <h2 id="sh">Truck</h2>
            <h2 id="sh">Rate: 150₹ per/hr</h2>
            <center>
              <button>
                <Link to={"/services/maps"}>More Details</Link>
              </button>
            </center>
          </div>

          {/* Bus Service */}
          <div id="cards">
            <h1 id="sh">
              <img
                src="https://www.svgrepo.com/show/243222/buses.svg"
                alt="Bus Icon"
                style={{ width: 200 }}
              />
            </h1>
            <h2 id="sh">Bus</h2>
            <h2 id="sh">Rate: 130₹ per/hr</h2>
            <center>
              <button>
                <Link to={"/services/maps"}>More Details</Link>
              </button>
            </center>
          </div>
        </div>
      </div>
      <About/>
    </>
  );
};

export default Service;
