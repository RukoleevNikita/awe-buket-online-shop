'use client';
import DG from '2gis-maps';
import React, { useRef, useEffect, useState, useMemo } from 'react';

import styles from './Map.module.scss';

export function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!map.current) {
      map.current = new DG.Map(mapContainer.current, {
        center: [54.979839, 73.29709],
        zoom: 16,
      });

      DG.marker([54.979715, 73.2971])
        .addTo(map.current)
        .bindPopup('Место на карте')
        .bindLabel('Ватутина 16<br>Мы создаем!<br>Вы удивляете!', { static: true });
    }
  }, []);

  return (
    <div
      ref={mapContainer}
      style={{
        width: '500px',
        height: '500px',
      }}
    ></div>
  );
}