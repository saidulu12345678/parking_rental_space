// import React, { useEffect, useState } from "react";
// import { Layout, Card, Avatar, Spin } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import "./profile.css"; // Import external CSS

// const Profile = () => {
//   const [admin, setAdmin] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Simulated admin username (from local storage or API)
//   const loggedInAdmin = localStorage.getItem("adminUsername") || "Admin";

//   useEffect(() => {
//     // Simulate fetching admin details (replace with actual API call)
//     setTimeout(() => {
//       setAdmin({
//         username: loggedInAdmin,
//         email: "admin@example.com",
//         profilePic: "https://via.placeholder.com/150", // Replace with actual admin profile pic URL
//       });
//       setLoading(false);
//     }, 1000); // Simulating a 1-second API response time
//   }, [loggedInAdmin]);

//   return (
//     <Layout className="admin-profile-container">
//       <div className="admin-profile-card">
//         <h2>Welcome, {admin?.username} 👋</h2>

//         {loading ? (
//           <Spin size="large" />
//         ) : (
//           <Card className="profile-card">
//             <Avatar
//               size={100}
//               src={admin?.profilePic}
//               icon={!admin?.profilePic && <UserOutlined />}
//             />
//             <p><strong>Username:</strong> {admin?.username}</p>
//             <p><strong>Email:</strong> {admin?.email}</p>
//           </Card>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Profile;

// =========================================

import React, { useEffect, useState } from "react";
import { Layout, Card, Avatar, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./profile.css"; // Import external CSS

const Profile = () => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulated admin username (from local storage or API)
  const loggedInAdmin = localStorage.getItem("adminUsername") || "Admin";

  useEffect(() => {
    // Simulate fetching admin details (replace with actual API call)
    setTimeout(() => {
      setAdmin({
        username: loggedInAdmin,
        email: "admin@example.com",
        profilePic: "https://via.placeholder.com/150", // Replace with actual admin profile pic URL
      });
      setLoading(false);
    }, 1000); // Simulating a 1-second API response time
  }, [loggedInAdmin]);

  return (
    <Layout className="admins-profile-container">
      <div className="admins-profile-card">
        <h2>Welcome, {admin?.username} 👋</h2>

        {loading ? (
          <Spin size="large" />
        ) : (
          <Card className="ad-profile-card">
            <Avatar
              size={100}
              src={admin?.profilePic}
              icon={!admin?.profilePic && <UserOutlined />}
            />
            <p><strong>Username:</strong> {admin?.username}</p>
            <p><strong>Email:</strong> {admin?.email}</p>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Profile;


// import React, { useEffect, useState } from "react";
// import { Layout, Card, Avatar, Spin } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import "./profile.css"; // Import the new external CSS

// const AdminProfile = () => {
//   const [admin, setAdmin] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Simulated admin username (from local storage or API)
//   const loggedInAdmin = localStorage.getItem("adminUsername") || "Admin";

//   useEffect(() => {
//     // Simulate fetching admin details (replace with actual API call)
//     setTimeout(() => {
//       setAdmin({
//         username: loggedInAdmin,
//         email: "admin@example.com",
//         profilePic: "https://via.placeholder.com/150", // Replace with actual admin profile pic URL
//       });
//       setLoading(false);
//     }, 1000); // Simulating a 1-second API response time
//   }, [loggedInAdmin]);

//   return (
//     <Layout className="admin-container">
//       <div className="admin-card-container">
//         <h2 className="admin-welcome-title">Welcome, {admin?.username} 👋</h2>

//         {loading ? (
//           <Spin size="large" className="admin-loading-spinner" />
//         ) : (
//           <Card className="admin-profile-card">
//             <Avatar
//               size={100}
//               src={admin?.profilePic}
//               icon={!admin?.profilePic && <UserOutlined />}
//               className="admin-avatar"
//             />
//             <p><strong>Username:</strong> {admin?.username}</p>
//             <p><strong>Email:</strong> {admin?.email}</p>
//           </Card>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default AdminProfile;
