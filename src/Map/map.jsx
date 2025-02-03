// import React, { useEffect, useState } from "react";
// import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
// import { Icon } from "leaflet";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";


// function GeolocationMap() {
//   const [location, setLocation] = useState(null);
//   const [map, setMap] = useState(null);
//   const [routingControl, setRoutingControl] = useState(null); // Store the routing control

//   // Get user's location
//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.log("Error fetching location:", error);
//         }
//       );
//     }
//   };

//   // Example static markers
//   const markers = [
//     { geocode: [17.493559, 78.401049], name: "Parking location 1" },
//     { geocode: [17.49381701389911, 78.40167110903306], name: "KPHB Metro Parking" },
//     { geocode: [17.493407708610082, 78.40402072408364], name: "KPHB Metro Parking 2" },
//   ];

//   // Custom parking marker icon
//   const customIcon = new Icon({
//     iconUrl: "https://www.svgrepo.com/show/509483/parking.svg",
//     iconSize: [38, 38],
//   });

//   // Initialize location when the component mounts
//   useEffect(() => {
//     getLocation();
//   }, []);

//   useEffect(() => {
//     if (location && map) {
//       // Create the routing control if it's not already created
//       if (!routingControl) {
//         const control = L.Routing.control({
//           waypoints: [
//             L.latLng(location.latitude, location.longitude), // Start from user's location
//             L.latLng(28.2380, 83.9956), // Example fixed destination (can change based on other inputs)
//           ],
//           routeWhileDragging: true,
//         }).addTo(map);

//         setRoutingControl(control);
//       } else {
//         // Update the routing control if it's already created
//         routingControl.setWaypoints([
//           L.latLng(location.latitude, location.longitude),
//           L.latLng(28.2380, 83.9956), // Destination (can change dynamically)
//         ]);
//       }
//     }
//   }, [location, map, routingControl]); // Run when location or map changes

//   if (!location) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <h1>Map with User Location</h1>
//       <MapContainer
//         center={[location.latitude, location.longitude]}
//         zoom={15}
//         style={{ height: "100vh" }}
//         whenCreated={(mapInstance) => {
//           setMap(mapInstance);
//           const initialMarker = L.marker(
//             [location.latitude, location.longitude],
//             {
//               icon: new Icon({
//                 iconUrl: "https://www.svgrepo.com/show/513317/location-pin.svg",
//                 iconSize: [38, 38],
//               }),
//             }
//           ).addTo(mapInstance);
//         }}
//       >
//         <TileLayer
//           attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {markers.map((markerData, index) => (
//           <Marker key={index} position={markerData.geocode} icon={customIcon}>
//             <Popup>{markerData.name}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </>
//   );
// }

// export default GeolocationMap;


