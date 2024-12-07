import React from 'react';
import styled from 'styled-components';
import './Loader.css'

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loading">
        <svg width="64px" height="48px">
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back" />
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front" />
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loading svg polyline {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .loading svg polyline#back {
    fill: none;
    stroke: #ff4d5033;
  }

  .loading svg polyline#front {
    fill: none;
    stroke: #ff4d4f;
    stroke-dasharray: 48, 144;
    stroke-dashoffset: 192;
    animation: dash_682 1.4s linear infinite;
  }

  @keyframes dash_682 {
    72.5% {
      opacity: 1;
    }

    to {
      stroke-dashoffset: 0;
    }
  }`;

export default Loader;