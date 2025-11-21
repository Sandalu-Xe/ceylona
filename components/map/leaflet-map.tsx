"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon in Next.js
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapControllerProps {
    center: [number, number];
    zoom: number;
}

function MapController({ center, zoom }: MapControllerProps) {
    const map = useMap();

    useEffect(() => {
        map.flyTo(center, zoom, {
            duration: 2, // Animation duration in seconds
            easeLinearity: 0.25
        });
    }, [center, zoom, map]);

    return null;
}

interface MapProps {
    center: [number, number];
    zoom: number;
}

export default function LeafletMap({ center, zoom }: MapProps) {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
            className="z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapController center={center} zoom={zoom} />
        </MapContainer>
    );
}
