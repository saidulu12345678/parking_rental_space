import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import { CircleArrowLeft } from "lucide-react";

import "./Leaflet.css";

function Maps() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [markers, setMarkers] = useState([]); // Stores dynamic markers
  const navigate = useNavigate();

  // ✅ Fetch user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // ✅ Fetch parking locations from backend
  useEffect(() => {
    fetch("https://backend-parkpay.onrender.com/parking")
      .then((res) => res.json())
      .then((data) => setMarkers(data))
      .catch((err) => console.error("Error fetching parking locations:", err));
  }, []);

  // Custom Icons for User & Parking Spots
  const customIcon = new L.Icon({
    iconUrl: "https://www.svgrepo.com/show/509483/parking.svg",
    iconSize: [38, 38],
  });

  const userIcon = new L.Icon({
    iconUrl: "https://www.svgrepo.com/show/513317/location-pin.svg",
    iconSize: [38, 38],
  });

  // ✅ Handle Click on Parking Marker
  const onMarkerClick = (marker) => {
    setDestination([marker.latitude, marker.longitude]); // Correctly update destination
  };

  // ✅ Routing for Navigation
  const RoutingControl = ({ location, destination }) => {
    const map = useMap();

    useEffect(() => {
      if (!location || !destination) return;

      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(location.latitude, location.longitude), // Start Point
          L.latLng(destination[0], destination[1]), // Destination
        ],
        lineOptions: {
          styles: [{ color: "blue", weight: 4 }],
        },
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true, // Automatically adjust view
      }).addTo(map);

      return () => {
        map.removeControl(routingControl); // Remove old route on update
      };
    }, [map, location, destination]);

    return null;
  };

  if (!location) {
    return <div>Loading your location...</div>;
  }

  return (
    <div id="map" className="text-center bg-gray-100 py-4">
      <button id="back-button" onClick={() => navigate("/")} title="Go back">
        <CircleArrowLeft size={30} />
      </button>

      <h1 style={{ color: "black" }}>Map with User Location</h1>

      <button
        id="book-button"
        style={{
          width: 250,
          height: 50,
          backgroundColor: destination ? "red" : "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "20px",
          cursor: destination ? "pointer" : "not-allowed",
        }}
        disabled={!destination}
      >
        {destination ? (
          <Link to={"/Service/Book"} className="book-now">
            Book Now
          </Link>
        ) : (
          "Select a location first"
        )}
      </button>

      {/* ✅ Leaflet Map */}
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={16}
        style={{ height: "80vh", marginTop: "20px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ✅ User's Current Location Marker */}
        <Marker position={[location.latitude, location.longitude]} icon={userIcon}>
          <Popup>Your Location</Popup>
        </Marker>

        {/* ✅ Dynamic Parking Locations */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={customIcon}
            eventHandlers={{ click: () => onMarkerClick(marker) }}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}

        {/* ✅ Show Destination Marker When Selected */}
        {destination && (
          <Marker position={destination} icon={customIcon}>
            <Popup>Destination</Popup>
          </Marker>
        )}

        {/* ✅ Routing for Navigation */}
        <RoutingControl location={location} destination={destination} />
      </MapContainer>
    </div>
  );
}

export default Maps;
