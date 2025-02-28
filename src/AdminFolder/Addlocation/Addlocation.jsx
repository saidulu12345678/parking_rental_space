// import React, { useState } from "react";
// import { Input, Button, Form, message } from "antd";
// import AdminPanel from "../Admin/Admin";

// const AdminAddParking = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://localhost:3001/parking", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         message.success("Parking location added successfully!");
//         form.resetFields();
//       } else {
//         message.error(data.error || "Failed to add location");
//       }
//     } catch (error) {
//       console.error("Error adding parking location:", error);
//       message.error("Something went wrong");
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
//       {AdminPanel}
//       <h2>Add Parking Location</h2>
//       <Form form={form} onFinish={onFinish} layout="vertical">
//         <Form.Item
//           label="Parking Name"
//           name="name"
//           rules={[{ required: true, message: "Please enter parking name" }]}
//         >
//           <Input placeholder="Enter parking name" />
//         </Form.Item>

//         <Form.Item
//           label="Latitude"
//           name="latitude"
//           rules={[{ required: true, message: "Please enter latitude" }]}
//         >
//           <Input type="number" placeholder="Enter latitude" />
//         </Form.Item>

//         <Form.Item
//           label="Longitude"
//           name="longitude"
//           rules={[{ required: true, message: "Please enter longitude" }]}
//         >
//           <Input type="number" placeholder="Enter longitude" />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" loading={loading}>
//             Add Location
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default AdminAddParking;

import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import AdminPanel from "../Admin/Admin";
import { ToastContainer, toast } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import "./Addlocation.css"; // Import the external CSS

const AdminAddParking = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch("https://backend-parkpay.onrender.com/parking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("🚗 Parking location added successfully!", {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });

        form.resetFields();
      } else {
        toast.error(data.error || "❌ Failed to add location", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (error) {
      console.error("Error adding parking location:", error);
      toast.error("❌ Something went wrong", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
    setLoading(false);
  };

  return (
    <div className="admin-add-parking-container">
      {AdminPanel}
      <h2>Add Parking Location</h2>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="Parking Name"
          name="name"
          rules={[{ required: true, message: "Please enter parking name" }]}
        >
          <Input placeholder="Enter parking name" />
        </Form.Item>

        <Form.Item
          label="Latitude"
          name="latitude"
          rules={[{ required: true, message: "Please enter latitude" }]}
        >
          <Input type="number" placeholder="Enter latitude" />
        </Form.Item>

        <Form.Item
          label="Longitude"
          name="longitude"
          rules={[{ required: true, message: "Please enter longitude" }]}
        >
          <Input type="number" placeholder="Enter longitude" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Add Location
          </Button>
        </Form.Item>
      </Form>

      {/* Toast Container to display messages */}
      <ToastContainer />
    </div>
  );
};

export default AdminAddParking;
