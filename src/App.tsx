import React, { useState } from "react";

import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  Pin,
} from "@vis.gl/react-google-maps";
import { MarkerWithInfoWindow } from "./MarkerWithInfo";
import EZDrawer from "./components/Drawer";

const API_KEY = "AIzaSyAywg1hdARDfokPk6Dj2KtrkVhuUbCRTTw";

const DrawerBody = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontWeight: "bold" }}>Hello World! 🚀🥳</h1>
    </div>
  );
};

function App() {
  const position = { lat: 53.54992, lng: 10.00678 };
  const [open, setOpen] = useState(false);

  return (
    <div className="wrap">
      <APIProvider apiKey={API_KEY}>
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: 53.54992, lng: 10 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId="fsdf"
        >
          {/* <Marker position={{ lat: 53.54992, lng: 10.00678 }} /> */}

          <AdvancedMarker
            position={{ lat: 53.54992, lng: 10.00678 }}
            onClick={() => setOpen(!open)}
          >
            <Pin
              background={"#0f9d58"}
              borderColor={"#006425"}
              glyphColor={"#60d98f"}
            />
          </AdvancedMarker>
          {/*  <MarkerWithInfoWindow position={{ lat: 53.51992, lng: 10.04678 }} /> */}
        </Map>
      </APIProvider>
      <EZDrawer
        open={open}
        onClose={() => setOpen(false)}
        direction="right"
        size={300}
        enableOverlay={false}
        overlayOpacity={0.1}
        duration={100}
      >
        <DrawerBody />
      </EZDrawer>
    </div>
  );
}

export default App;
