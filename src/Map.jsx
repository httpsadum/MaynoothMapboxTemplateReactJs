
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import "./Map.css";

// GROUP PROJECT MEMBERS!!! CREATE A FILE CALLED .env IN 
// THE SAME FOLDER AS package.json, README.md etc 
// AND PASTE YOUR OWN API KEY FROM MAPBOX 
// USE: 

// REACT_APP_MAPBOX_TOKEN=pk.keyGoesHere

const token = process.env.REACT_APP_MAPBOX_TOKEN ;

function Map() {
    const mapContainer = useRef(null);
    mapboxgl.accessToken = token ;

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [-6.5900, 53.3810], // Maynooth
            zoom: 16

        });

        map.addControl(new mapboxgl.NavigationControl());

        return () => map.remove();
    }, []);

    return (
        <div ref={mapContainer} className='mapContainer'/>
    );
}

export default Map;
