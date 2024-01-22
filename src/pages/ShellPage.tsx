import React, { useState } from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { Grid } from '@components/elements/Grid';

import type { ChangeEvent } from 'react';

import type { Box } from '@typings/box';

export const ShellPage: React.FC = () => {
  const [activeBoxes, setActiveBoxes] = useState<Box[]>([]);
  const [inputWidth, setInputWidth] = useState<number>(4);
  const [inputHeight, setInputHeight] = useState<number>(3);
  const [width, setWidth] = useState<number>(inputWidth);
  const [height, setHeight] = useState<number>(inputHeight);

  const handleResize = () => {
    setWidth(inputWidth);
    setHeight(inputHeight);
  };

  const handleBoxClick = (box: Box) => {
    const existingIndex = activeBoxes.findIndex(
      (activeBox) => activeBox.x === box.x && activeBox.y === box.y
    );
    existingIndex !== -1
      ? setActiveBoxes(
          activeBoxes.filter((_, index) => index !== existingIndex)
        )
      : setActiveBoxes((prev) => [...prev, box]);
  };

  return (
    <DefaultLayout title="Shell">
      <h1>Shell</h1>
      <h2>Splash Art</h2>
      <label htmlFor="width">Width:</label>
      <br />
      <input
        type="number"
        name="width"
        value={inputWidth}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputWidth(Number(e.target.value))
        }
      />
      <br />
      <label htmlFor="height">Height:</label>
      <br />
      <input
        type="number"
        name="height"
        value={inputHeight}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputHeight(Number(e.target.value))
        }
      />
      <br />
      <button onClick={handleResize}>Resize</button>
      <Grid
        width={width}
        height={height}
        activeBoxes={activeBoxes}
        onBoxClick={handleBoxClick}
      />
    </DefaultLayout>
  );
};
