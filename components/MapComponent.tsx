"use client"

import { useState } from "react"
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps"

function MapComponent() {
  const position = { lat: 46.4832, lng: 30.73625 }
  const [open, setOpen] = useState(false)
  return (
    <div className="flex h-[670px] w-[1304px] items-center justify-center">
      <div className="absolute flex h-[670px] w-full items-center justify-center overflow-hidden py-[200px]">
        <APIProvider
          // @ts-ignore
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        >
          <div className="h-[720px] w-full overflow-hidden">
            <Map
              defaultZoom={13}
              defaultCenter={position}
              mapId={process.env.NEXT_PUBLIC_MAP_ID}
              disableDefaultUI={true}
              className="disableBorderGoogleMap h-full w-full"
            >
              <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                <Pin
                  background={"#f55633"}
                  glyphColor={"#feeeee"}
                  borderColor={"#eb8510"}
                  scale={1.5}
                />
              </AdvancedMarker>
              <div className="m-5 bg-blue-800 p-5">
                {open && (
                  <InfoWindow
                    position={{ lat: position.lat + 0.0004, lng: position.lng }}
                    onCloseClick={() => setOpen(false)}
                    onClose={() => setOpen(false)}
                    className="p-4"
                    headerContent="33333"
                    headerDisabled={true}
                  >
                    <p className="font-bold">Ninja Pizza Pickup Point</p>
                  </InfoWindow>
                )}
              </div>
            </Map>
          </div>
        </APIProvider>
      </div>
    </div>
  )
}

export default MapComponent
