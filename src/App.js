import React, { useState } from "react";
import Canvas from "./Canvas.js";

export default function App() {
    const pixelsWidth = 512;
	const pixelsHeight = 512;
	const gridPixelSize = 16;
    const gridWidth = pixelsWidth / gridPixelSize;
    const gridHeight = pixelsHeight / gridPixelSize;

	const bgColor = 'white';
	
    const penColor = 'black';
    const initialPixels = getBlankPixels();

    function getBlankPixels() {
        const pixels = [];
        for (let i = 0; i < gridHeight; i++) {
            const row = [];
            for (let j = 0; j < gridWidth; j++) {
                row.push(bgColor);
            }
            pixels.push(row);
        }
        return pixels;
    }
	const [pixels, setpixels] = useState(initialPixels);

	const handleMouseEvent = (row, column) => (e) => {
		if (e.buttons === 1) {
			const pixelsCopy = pixels.slice();
			pixelsCopy[row][column] = penColor;
			setpixels(pixelsCopy); 
		} else if (e.buttons === 2) {
			const pixelsCopy = pixels.slice();
			pixelsCopy[row][column] = bgColor;
			setpixels(pixelsCopy); 
		}
	}

    function handleClear() {
	    const blankPixels = getBlankPixels();
        setpixels(blankPixels);
    }


    return (
    <div className="app">
        <div className="panel">
            <h1>Pixel Canvas</h1>
            <button id="clear" onClick={handleClear}>Clear</button>
        </div>
        <Canvas
            pixels={pixels}
            onMouseEvent={(row, column) => handleMouseEvent(row, column)}
            gridHeight={gridHeight}
            gridWidth={gridWidth}
        />
    </div>
    )
}