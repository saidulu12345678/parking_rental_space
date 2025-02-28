
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Input, DatePicker, Button, Card, Typography, message } from "antd";
// import dayjs from "dayjs";
// import "./Booking.css"; 

// const { Title, Text } = Typography;

// const Book = () => {
//   const navigate = useNavigate();
//   const [selectedVehicle, setSelectedVehicle] = useState("");
//   const [perHourPrice, setPerHourPrice] = useState(0);
//   const [duration, setDuration] = useState(1);
//   const [formData, setFormData] = useState({
//     ownerName: "",
//     phoneNumber: "",
//     email: "",
//     vehicleNumber: "",
//     dateTime: "",
//   });

//   useEffect(() => {
//     const storedVehicle = localStorage.getItem("selected_vehicle");
//     const storedPrice = localStorage.getItem("vehicle_price");

//     if (storedVehicle && storedPrice) {
//       setSelectedVehicle(storedVehicle);
//       setPerHourPrice(parseFloat(storedPrice));
//     } else {
//       navigate("/"); // Redirect if no vehicle is selected
//     }
//   }, [navigate]);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleDateChange = (date, dateString) => {
//     setFormData({ ...formData, dateTime: dateString });
//   };

//   const handleSubmit = () => {
//     if (!formData.ownerName || !formData.phoneNumber || !formData.email || !formData.vehicleNumber || !formData.dateTime) {
//       message.error("Please fill all the fields");
//       return;
//     }

//     if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
//       message.error("Enter a valid 10-digit phone number");
//       return;
//     }

//     const totalAmount = perHourPrice * duration;

//     const newBooking = { ...formData, vehicleType: selectedVehicle, perHourPrice, duration, totalAmount };
//     const updatedBookings = JSON.parse(localStorage.getItem("booking_data") || "[]");
//     updatedBookings.push(newBooking);

//     localStorage.setItem("booking_data", JSON.stringify(updatedBookings));
//     message.success(`Payment of ₹${totalAmount} successful! Booking confirmed.`);
//     navigate("/my-bookings");
//   };

//   return (
//     <div className="booking-container">
//       <Card className="booking-card">
//         <Title level={2} className="booking-title">Book Your Parking Spot</Title>

//         <div className="vehicle-info">
//           <Text strong>Selected Vehicle:</Text> <Text>{selectedVehicle}</Text>
//           <Text strong>Per Hour Price:</Text> <Text>₹{perHourPrice}</Text>
//         </div>

//         <div className="form-group">
//           <label>Owner Name:</label>
//           <Input name="ownerName" placeholder="Enter Owner Name" onChange={handleInputChange} />

//           <label>Phone Number:</label>
//           <Input name="phoneNumber" placeholder="Enter Phone Number" onChange={handleInputChange} maxLength={10} />

//           <label>Email:</label>
//           <Input name="email" placeholder="Enter Email" onChange={handleInputChange} />

//           <label>Vehicle Number:</label>
//           <Input name="vehicleNumber" placeholder="Enter Vehicle Number" onChange={handleInputChange} />

//           <label>Date & Time:</label>
//           <DatePicker showTime style={{ width: "100%" }} onChange={handleDateChange} />

//           <label>Duration (Hours):</label>
//           <Input type="number" min={1} value={duration} onChange={(e) => setDuration(e.target.value)} />
//         </div>

//         <div className="price-summary">
//           <Text strong>Total Price:</Text> <Text>₹{perHourPrice} x {duration} = ₹{perHourPrice * duration}</Text>
//         </div>

//         <Button type="primary" onClick={handleSubmit} block className="confirm-button">
//           Confirm & Pay
//         </Button>
//       </Card>
//     </div>
//   );
// };

// export default Book;



import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, DatePicker, Button, Card, Typography, message } from "antd";
import dayjs from "dayjs";
import axios from "axios";
import "./Booking.css";


const { Title, Text } = Typography;

const Book = () => {
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [perHourPrice, setPerHourPrice] = useState(0);
  const [duration, setDuration] = useState(1);
  const [formData, setFormData] = useState({
    ownerName: "",
    phoneNumber: "",
    email: "",
    vehicleNumber: "",
    dateTime: "",
  });

  useEffect(() => {
    const storedVehicle = localStorage.getItem("selected_vehicle");
    const storedPrice = localStorage.getItem("vehicle_price");

    if (storedVehicle && storedPrice) {
      setSelectedVehicle(storedVehicle);
      setPerHourPrice(parseFloat(storedPrice));
    } else {
      navigate("/"); // Redirect if no vehicle is selected
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateString) => {
    setFormData({ ...formData, dateTime: dateString });
  };

  const handleSubmit = async () => {
    if (!formData.ownerName || !formData.phoneNumber || !formData.email || !formData.vehicleNumber || !formData.dateTime) {
      message.error("Please fill all the fields");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      message.error("Enter a valid 10-digit phone number");
      return;
    }

    const totalAmount = perHourPrice * duration;

    const newBooking = {
      ...formData,
      vehicleType: selectedVehicle,
      perHourPrice,
      duration,
      totalAmount,
    };

    try {
      // ✅ Send booking data to the backend
      const response = await axios.post("https://backend-parkpay.onrender.com/bookings", newBooking);

      if (response.data.success) {
        navigate("/Service/book/payment")
       
      } else {
        message.error("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error storing booking:", error);
      message.error("Error processing booking. Try again later.");
    }
  };

  return (
    <div className="users-booking-container">
      <Card className="users-booking-card">
        <Title level={2} className="users-booking-title">Book Your Parking Spot</Title>

        <div className="vehicle-info">
          <Text strong>Selected Vehicle:</Text> <Text>{selectedVehicle}</Text>
          <Text strong>Per Hour Price:</Text> <Text>₹{perHourPrice}</Text>
        </div>

        <div className="form-group">
          <label>Owner Name:</label>
          <Input name="ownerName" placeholder="Enter Owner Name" onChange={handleInputChange} />

          <label>Phone Number:</label>
          <Input name="phoneNumber" placeholder="Enter Phone Number" onChange={handleInputChange} maxLength={10} />

          <label>Email:</label>
          <Input name="email" placeholder="Enter Email" onChange={handleInputChange} />

          <label>Vehicle Number:</label>
          <Input name="vehicleNumber" placeholder="Enter Vehicle Number" onChange={handleInputChange} />

          <label>Date & Time:</label>
          <DatePicker showTime style={{ width: "100%" }} onChange={handleDateChange} />

          <label>Duration (Hours):</label>
          <Input type="number" min={1} value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
        </div>

        <div className="price-summary">
          <Text strong>Total Price:</Text> <Text>₹{perHourPrice} x {duration} = ₹{perHourPrice * duration}</Text>
        </div>

        <Button type="primary" onClick={handleSubmit} block className="confirm-button">
          Confirm & Pay
        </Button>
      </Card>
    </div>
  );
};

export default Book;
