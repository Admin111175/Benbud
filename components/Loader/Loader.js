import React from 'react';
import { RingLoader, CircleLoader,SquareLoader } from 'react-spinners';
import "@/app/globals.css";

export const Loader = () => {
  return (
    <div style={loaderStyle} >
      <SquareLoader size={15} color="#3498db" loading={true} className="loader"/>
      <p className="loading-text">Loading...</p>
    </div>
  );
  
};

const loaderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', 
};
