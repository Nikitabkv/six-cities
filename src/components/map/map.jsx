import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

const Map = (props) => {
  const {city, hotelData, activeHotel} = props;

  const mapRef = useRef();

  // создаем карту
  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude,
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
  }, [city]);

  // Добавляем маркеры
  useEffect(() => {
    hotelData.forEach((point) => {
      const customIcon = leaflet.icon({iconUrl: `./img/pin.svg`, iconSize: [27, 35]});
      const customIconActive = leaflet.icon({iconUrl: `./img/pin-active.svg`, iconSize: [27, 35]});

      // центрируем карту
      // после выбора нового предложения
      if (activeHotel.location) {
        mapRef.current.setView(
            {
              lat: activeHotel.location.latitude,
              lng: activeHotel.location.longitude,
            },
        );
      } else {
        mapRef.current.setView(
            {
              lat: city.location.latitude,
              lng: city.location.longitude,
            },
        );
      }

      // подсвечиваем маркер
      leaflet.marker(
          {lat: point.location.latitude, lng: point.location.longitude},
          {icon: point.id === activeHotel.id ? customIconActive : customIcon}).addTo(mapRef.current).bindPopup(point.title);
    });
  }, [activeHotel, city]);

  return (
    <div id="map" style={{height: `100%`}} ref={mapRef}/>
  );
};

const mapStateToProps = (state) => {
  return {city: state.city};
};

Map.propTypes = {
  city: PropTypes.object,
  activeHotel: PropTypes.object,
  hotelData: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, null)(Map);
