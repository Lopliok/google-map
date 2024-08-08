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
import { Pobocka, pobocky } from "./test";

const API_KEY = "AIzaSyAywg1hdARDfokPk6Dj2KtrkVhuUbCRTTw";

const DrawerBody = (pob: Pobocka | undefined) => {
  return (
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src="https://svgshare.com/i/197F.svg" width={100} />
      </div>
      <div style={{ textAlign: "left" }}>
        <h2>{pob?.nazev}</h2>
        <h4>Adresa:</h4>
        <p>{pob?.adresa}</p>
        <p>{pob?.mesto}</p>
        <h4>Otevírací doba:</h4>
        <p>{pob?.oteviraciDoba}</p>
        <p>
          <a href={`tel:${pob?.telefon}`}>{pob?.telefon}</a>
        </p>
      </div>
    </div>
  );
};

function App() {
  const position = { lat: 49.9899597, lng: 15.6208333 };
  const [open, setOpen] = useState<null | Pobocka>(null);

  console.log(pobocky);

  return (
    <div>
      <div className="wrap">
        <APIProvider apiKey={API_KEY}>
          <Map
            style={{ width: "100%", height: "100%" }}
            defaultCenter={position}
            defaultZoom={7}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
            mapId="fsdf"
          >
            {/* <Marker position={{ lat: 53.54992, lng: 10.00678 }} /> */}

            {pobocky.map((pob) => (
              <AdvancedMarker
                key={pob.ID}
                position={{ lat: pob.lat, lng: pob.lng }}
                onClick={() => {
                  console.log("fsda", pob, open, !!open);
                  setOpen((open) => (!!open ? null : pob));
                }}
              >
                <Pin
                  background={"#0f9d58"}
                  borderColor={"#006425"}
                  glyphColor={"#60d98f"}
                />
              </AdvancedMarker>
            ))}

            {/*  <MarkerWithInfoWindow position={{ lat: 53.51992, lng: 10.04678 }} /> */}
          </Map>
        </APIProvider>
        <EZDrawer
          open={!!open}
          onClose={() => setOpen(null)}
          direction="right"
          size={300}
          enableOverlay={true}
          overlayOpacity={0.1}
          duration={100}
        >
          <DrawerBody {...open} />
        </EZDrawer>
      </div>
    </div>
  );
}

export default App;
