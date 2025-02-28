// import { useState, useEffect } from "react";
// import { Table, Typography, message } from "antd";
// import axios from "axios";

// const { Title } = Typography;

// const BookingAdmin = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/bookings"); // Fetch bookings
      
//       if (response.data) {
//         setBookings(response.data);
//       } else {
//         message.error("Failed to fetch bookings.");
//       }
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//       message.error("Error loading bookings.");
//     }
//     setLoading(false);
//   };

//   const columns = [
//     {
//       title: "Owner Name",
//       dataIndex: "ownerName",
//       key: "ownerName",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phoneNumber",
//       key: "phoneNumber",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//       key: "email",
//     },
//     {
//       title: "Vehicle",
//       dataIndex: "vehicleType",
//       key: "vehicleType",
//     },
//     {
//       title: "Vehicle Number",
//       dataIndex: "vehicleNumber",
//       key: "vehicleNumber",
//     },
//     {
//       title: "Date & Time",
//       dataIndex: "dateTime",
//       key: "dateTime",
//     },
//     {
//       title: "Duration (Hrs)",
//       dataIndex: "duration",
//       key: "duration",
//     },
//     {
//       title: "Total Price (₹)",
//       dataIndex: "totalAmount",
//       key: "totalAmount",
//       render: (text) => `₹${text}`, // Formatting
//     },
//   ];

//   return (
//     <div style={{ padding: "20px" }}>
//       <Title level={2}>Customer Bookings</Title>
//       <Table
//         dataSource={bookings}
//         columns={columns}
//         rowKey="_id"
//         loading={loading}
//         pagination={{ pageSize: 5 }}
//       />
//     </div>
//   );
// };

// export default BookingAdmin;


import { useState, useEffect } from "react";
import { Table, Typography, message } from "antd";
import axios from "axios";
import "./BookedDetails.css"; // Import the external CSS

const { Title } = Typography;

const BookingAdmin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get("https://backend-parkpay.onrender.com/bookings"); // Fetch bookings
      
      if (response.data) {
        setBookings(response.data);
      } else {
        message.error("Failed to fetch bookings.");
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      message.error("Error loading bookings.");
    }
    setLoading(false);
  };

  const columns = [
    {
      title: "Owner Name",
      dataIndex: "ownerName",
      key: "ownerName",
    },
    {
      title: "Phone",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Vehicle",
      dataIndex: "vehicleType",
      key: "vehicleType",
    },
    {
      title: "Vehicle Number",
      dataIndex: "vehicleNumber",
      key: "vehicleNumber",
    },
    {
      title: "Date & Time",
      dataIndex: "dateTime",
      key: "dateTime",
    },
    {
      title: "Duration (Hrs)",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Total Price (₹)",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text) => `₹${text}`, // Formatting
    },
  ];

  return (
    <div className="booking-container">
      <Title level={2} className="booking-title">Customer Bookings</Title>
      <Table
        className="booking-table"
        dataSource={bookings}
        columns={columns}
        rowKey="_id"
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default BookingAdmin;
