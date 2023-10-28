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
  // const elRef = useRef();
  // const [map, setMap] = useState(null);
  // const options = useMemo(() => ({
  //   center: [54.979839, 73.29709],
  //   zoom: 16,
  //   // layers: [55, 77]
  // }));
  //
  // useEffect(() => {
  //   let innerMap = map;
  //   if (!innerMap) {
  //     innerMap = DG.map(elRef.current, options);
  //     setMap(innerMap);
  //   } else {
  //     innerMap.setView(options.center, options.zoom);
  //
  //     DG.marker([54.979715, 73.2971])
  //       .addTo(innerMap)
  //       .bindLabel('Ватутина 16<br>Мы создаем!<br>Вы удивляете!', { static: true });
  //   }
  //
  //   // DG.marker([54.979839, 73.29709]).addTo(map).bindPopup('Я попап!');
  //   //   const handleClick = e => console.log(e);
  //
  //   //   innerMap.addEventListener('click', handleClick);
  //
  //   //   return () => {
  //   //     innerMap.removeEventListener('click', handleClick);
  //   //   };
  // }, []);
  // return (
  //   <div
  //     className={styles.map}
  //     ref={elRef}
  //     style={{
  //       width: `${500}px`,
  //       height: `${500}px`,
  //     }}
  //   />
  // );
}

// React.memo(Map);
