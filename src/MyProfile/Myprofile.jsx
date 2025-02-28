  // import React, { useEffect, useState } from "react";

  // const Profile = () => {
  //   const [user, setUser] = useState(null);
  //   const [bookings, setBookings] = useState([]);

  //   // Get logged-in username from localStorage
  //   const loggedInUsername = localStorage.getItem("username");

  //   useEffect(() => {
  //     if (!loggedInUsername) return;

  //     // Fetch user details
  //     fetch(`http://localhost:3001/login`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username: loggedInUsername }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.length > 0) {
  //           setUser(data[0]);
  //         }
  //       })
  //       .catch((err) => console.error("Error fetching user:", err));

  //     // Fetch only the logged-in user's bookings
  //     fetch(`http://localhost:3001/bookings`)
  //       .then((res) => res.json())
  //       .then((allBookings) => {
  //         const userBookings = allBookings.filter(
  //           (booking) => booking.ownerName === loggedInUsername
  //         );
  //         setBookings(userBookings);
  //       })
  //       .catch((err) => console.error("Error fetching bookings:", err));
  //   }, [loggedInUsername]);

  //   return (
  //     <div style={styles.container}>
  //       <h2>User Profile</h2>

  //       {user ? (
  //         <div style={styles.profileBox}>
  //           <img
  //             src={user.profilePic || "https://via.placeholder.com/100"} // Placeholder image
  //             alt="User"
  //             style={styles.userImage}
  //           />
  //           <p><strong>Username:</strong> {user.username}</p>
  //           <p><strong>Email:</strong> {user.email}</p>
  //         </div>
  //       ) : (
  //         <p>Loading user details...</p>
  //       )}

  //       <h2>My Bookings</h2>
  //       {bookings.length > 0 ? (
  //         <div style={styles.bookingList}>
  //           {bookings.map((booking, index) => (
  //             <div key={index} style={styles.bookingCard}>
  //               <p><strong>Vehicle Number:</strong> {booking.vehicleNumber}</p>
  //               <p><strong>Booking Date:</strong> {booking.dateTime}</p>
  //               <p><strong>Vehicle Type:</strong> {booking.vehicleType}</p>
  //               <p><strong>Price per Hour:</strong> ${booking.perHourPrice}</p>
  //               <p><strong>Duration:</strong> {booking.duration} hrs</p>
  //               <p><strong>Total Amount:</strong> ${booking.totalAmount}</p>
  //             </div>
  //           ))}
  //         </div>
  //       ) : (
  //         <p>No bookings found.</p>
  //       )}
  //     </div>
  //   );
  // };

  // const styles = {
  //   container: { padding: "20px", maxWidth: "600px", margin: "auto" },
  //   profileBox: { border: "1px solid #ccc", padding: "15px", borderRadius: "8px", textAlign: "center" },
  //   userImage: { width: "100px", height: "100px", borderRadius: "50%" },
  //   bookingList: { marginTop: "20px" },
  //   bookingCard: { border: "1px solid #ddd", padding: "10px", margin: "10px 0", borderRadius: "5px" },
  // };

  // export default Profile;


  import React, { useEffect, useState } from "react";
  import "./Myprofile.css"; // Import the external CSS file
  
  const Profile = () => {
    const [user, setUser] = useState(null);
    const [bookings, setBookings] = useState([]);
  
    // Get logged-in username from localStorage
    const loggedInUsername = localStorage.getItem("username");
  
    useEffect(() => {
      if (!loggedInUsername) return;
  
      // Fetch user details
      fetch(`https://backend-parkpay.onrender.com/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: loggedInUsername }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setUser(data[0]);
          }
        })
        .catch((err) => console.error("Error fetching user:", err));
  
      // Fetch only the logged-in user's bookings
      fetch(`https://backend-parkpay.onrender.com/bookings`)
        .then((res) => res.json())
        .then((allBookings) => {
          const userBookings = allBookings.filter(
            (booking) => booking.ownerName === loggedInUsername
          );
          setBookings(userBookings);
        })
        .catch((err) => console.error("Error fetching bookings:", err));
    }, [loggedInUsername]);
  
    return (
      <div className="container">
        <h2 className="my-bookings-title">User Profile</h2>
  
        {user ? (
          <div className="profile-box">
            <img
              src={user.profilePic || "https://via.placeholder.com/100"} // Placeholder image
              alt="User"
              className="user-image"
            />
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
  
        <h2 className="my-bookings-title">My Bookings</h2>
        {bookings.length > 0 ? (
          <div className="booking-list">
            {bookings.map((booking, index) => (
              <div key={index} className="booking-card">
                <p><strong>Vehicle Number:</strong> {booking.vehicleNumber}</p>
                <p><strong>Booking Date:</strong> {booking.dateTime}</p>
                <p><strong>Vehicle Type:</strong> {booking.vehicleType}</p>
                <p><strong>Price per Hour:</strong> ${booking.perHourPrice}</p>
                <p><strong>Duration:</strong> {booking.duration} hrs</p>
                <p><strong>Total Amount:</strong> ${booking.totalAmount}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    );
  };
  
  export default Profile;
  