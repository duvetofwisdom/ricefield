import React from 'react';

import type { Box } from '@typings/box';

interface Props {
  width: number;
  height: number;
  activeBoxes: Box[];
  onBoxClick: (box: Box) => void;
}

export const Grid: React.FC<Props> = ({
  width,
  height,
  activeBoxes,
  onBoxClick,
}) => (
  <div className="rf-grid">
    {Array.from({ length: height }, (_, rowIndex) => (
      <div key={rowIndex} className="rf-grid__row">
        {Array.from({ length: width }, (_, colIndex) => (
          <div
            key={colIndex}
            onClick={() =>
              onBoxClick({
                x: colIndex,
                y: rowIndex,
              })
            }
            className={`rf-grid__cell${activeBoxes.find((box) => box.x === colIndex && box.y === rowIndex) ? ' rf-grid__cell--active' : ''}`}
          />
        ))}
      </div>
    ))}
  </div>
);
