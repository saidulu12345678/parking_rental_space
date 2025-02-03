import { useState } from "react";
import { Link } from "react-router-dom";
import "./Booking.css"; // Import the CSS file

const Book = () => {
  const [a, seta] = useState([]); // State to store bookings

  const sub = (e) => {
    e.preventDefault();

    const b = {
      ownerName: e.target[0].value,
      phoneNumber: e.target[1].value,
      emailId: e.target[2].value,
      vehicleNumber: e.target[3].value,
      licenceNumber: e.target[4].value,
      date: e.target[5].value,
      vehicleType: e.target[6].value,
    };
    const updatedData = [...a, b]; // Update state with new booking
    seta(updatedData);
    localStorage.setItem("booking_data", JSON.stringify(updatedData)); // Save data to localStorage
    alert("Details submitted successfully");
    e.target.reset(); // Reset form after submission
  };

  return (
    <>
      <div id="book">
        <div id="book1">
          <form action="" id="row" onSubmit={sub}>
            <label htmlFor="ownerName">Owner Name</label>
            <input type="text" placeholder="Owner Name" id="int1" required />
            <br />
            <br />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" placeholder="Phone Number" id="int1" required />
            <label htmlFor="emailId">Email ID</label>
            <input type="email" placeholder="Email ID" id="int1" required />
            <br />
            <br />
            <label htmlFor="vehicleNumber">Vehicle Number</label>
            <input type="text" placeholder="Vehicle Number" id="int1" required />
            <br />
            <br />
            <label htmlFor="licenceNumber">Licence Number</label>
            <input type="text" placeholder="Licence Number" id="int1" required />
            <br />
            <br />
            <label htmlFor="date">Date/Time</label>
            <input type="datetime-local" id="int1" required />
            <label htmlFor="vehicleType">Vehicle Type</label>
            <select id="int1" required>
              <option value="bike">Bike</option>
              <option value="car">Car</option>
              <option value="truck">Truck</option>
              <option value="bus">Bus</option>
            </select>
            <br />
            <input type="submit" value="Submit" id="int2" />
          </form>
        </div>

        {/* Display Booking Details */}
        <div id="booking-details">
          <h2>Booking Details</h2>
          {a.length === 0 ? (
            <p>No bookings yet.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Owner Name</th>
                  <th>Phone Number</th>
                  <th>Email ID</th>
                  <th>Vehicle Number</th>
                  <th>Licence Number</th>
                  <th>Date/Time</th>
                  <th>Vehicle Type</th>
                </tr>
              </thead>
              <tbody>
                {a.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.ownerName}</td>
                    <td>{booking.phoneNumber}</td>
                    <td>{booking.emailId}</td>
                    <td>{booking.vehicleNumber}</td>
                    <td>{booking.licenceNumber}</td>
                    <td>{booking.date}</td>
                    <td>{booking.vehicleType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Book;