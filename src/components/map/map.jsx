import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

const city = [52.370216, 4.895168];

const Map = ({hotelData, activeHotel}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city[0],
        lng: city[1],
      },
      zoom: 12,
      zoomControl: false,
      marker: true
    });

    leaflet.tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `© OpenStreetMap contributors © CARTO`})
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    hotelData.forEach((point) => {
      const customIcon = leaflet.icon({iconUrl: `./img/pin.svg`, iconSize: [27, 35]});
      const customIconActive = leaflet.icon({iconUrl: `./img/pin-active.svg`, iconSize: [27, 35]});

      leaflet.marker(
          {lat: point.location.latitude, lng: point.location.longitude},
          {icon: point.id === activeHotel.id ? customIconActive : customIcon}).addTo(mapRef.current).bindPopup(point.title);
    });
  }, [activeHotel]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}/>
  );
};

Map.propTypes = {
  activeHotel: PropTypes.object,
  hotelData: PropTypes.array.isRequired,
};

export default Map;
