import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet-routing-machine";
import "./Leaflet.css";

function Maps() {
  const [location, setLocation] = useState(null); // User's current location
  const [destination, setDestination] = useState(null); // Selected parking destination

  // Fetch user's location using geolocation
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

  // List of parking markers
  const markers = [
    { geocode: [17.493559, 78.401049], name: "KPHB metro parking 2" },
    { geocode: [17.49381701389911, 78.40167110903306], name: "KPHB Metro Parking1" },
    { geocode: [17.493407708610082, 78.40402072408364], name: "Chennai Shopping Mall Parking" },
    { geocode: [17.485200121754275, 78.38924647917835], name: "Nexus Mall Parking" },
    { geocode: [17.486018768563582, 78.41121913487157], name: "Kukatpally Metro Parking" },
    { geocode: [17.501405354941532, 78.38658989180439], name: "Bramarambha Cinema Hall Parking" },
    { geocode: [17.490989476734956, 78.39300605166709], name: "Lulu Mall Parking" },
    // {geocode :[],name :""}
  ];

  // Icons for markers
  const customIcon = new L.Icon({
    iconUrl: "https://www.svgrepo.com/show/509483/parking.svg",
    iconSize: [38, 38],
  });

  const userIcon = new L.Icon({
    iconUrl: "https://www.svgrepo.com/show/513317/location-pin.svg",
    iconSize: [38, 38],
  });

  // Handle marker click to set destination
  const onMarkerClick = (marker) => {
    setDestination(marker.geocode);
  };

  // RoutingControl component to display routes on the map
  const RoutingControl = () => {
    const map = useMap();

    useEffect(() => {
      if (destination && location) {
        const route = L.Routing.control({
          waypoints: [
            L.latLng(location.latitude, location.longitude),
            L.latLng(destination[0], destination[1]),
          ],
          lineOptions: {
            styles: [{ color: "blue", weight: 4 }],
          },
          addWaypoints: false,
          draggableWaypoints: false,
        }).addTo(map);

        return () => {
          map.removeControl(route);
        };
      }
    }, [map, destination, location]);

    return null;
  };

  // Show a loading message if the user's location is not yet available
  if (!location) {
    return <div>Loading your location...</div>;
  }

  return (
    <div id="map" className="text-center bg-gray-100 py-4">
      <h1 style={{ color: "black" }}>Map with User Location</h1>
      <button
        style={{
          width: 200,
          height: 50,
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        <Link to={"/Service/Book"} style={{ color: "white", textDecoration: "none" }}>
          Book Now
        </Link>
      </button>
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={16}
        style={{ height: "80vh", marginTop: "20px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.latitude, location.longitude]} icon={userIcon}>
          <Popup>Your Location</Popup>
        </Marker>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geocode}
            icon={customIcon}
            eventHandlers={{
              click: () => onMarkerClick(marker),
            }}
          >
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        <RoutingControl />
      </MapContainer>
    </div>
  );
}

export default Maps;
