import styled from 'styled-components';
import palette from '../../../../styles/palette';
import React, { useEffect, useRef } from 'react';
import { useSelector } from '../../../../store';

const Container = styled.div`
  padding: 62px 30px 100px;

  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }

  h3 {
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 6px;
  }

  .register-room-geometry-map-wrapper {
    width: 487px;
    height: 280px;
    margin-top: 24px;
    > div {
      width: 100%;
      height: 100%;
    }
  }
`;

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const RegisterRoomGeometry: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const latitude = useSelector(state => state.registerRoom.latitude);
  const longitude = useSelector(state => state.registerRoom.longitude);

  const loadMapScript = () => {
    return new Promise<void>(resolve => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}&callback=initMap`;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = () => {
        resolve();
      };
    });
  };

  const loadMap = async () => {
    await loadMapScript();
  };

  window.initMap = () => {
    //* 지도 불러오기
    if (mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: {
          lat: latitude || 37.5666784,
          lng: longitude || 126.9778436,
        },
        zoom: 14,
      });
    }
  };

  useEffect(() => {
    loadMap();
  }, []);
  return (
    <Container>
      <h2>핀이 놓인 위치가 정확한가요?</h2>
      <h3>4단계</h3>
      <p>필요한 경우 핀이 정확한 위치에 자리하도록 조정할 수 있어요.</p>
      <div className="register-room-geometry-map-wrapper">
        <div ref={mapRef} id="map"></div>
      </div>
    </Container>
  );
};

export default RegisterRoomGeometry;
