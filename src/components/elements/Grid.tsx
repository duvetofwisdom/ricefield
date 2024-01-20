import React from 'react';

interface Props {
  width: number;
  height: number;
}

export const Grid: React.FC<Props> = ({ width, height }) => (
  <div className="rf-grid">
    {Array.from({ length: height }, (_, index) => (
      <div key={index} className="rf-grid__row">
        {Array.from({ length: width }, (_, index) => (
          <div key={index} className="rf-grid__cell" />
        ))}
      </div>
    ))}
  </div>
);
