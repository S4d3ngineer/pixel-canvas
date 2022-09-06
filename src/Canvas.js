import React from "react";
import Pixel from "./Pixel";

export default function Canvas(props) {
	const pixels = props.pixels;
	const gridHeight = props.gridHeight;
	const gridWidth = props.gridWidth;

	function renderPixels() {
		const pixelComponents = []
		for (let i = 0; i < gridHeight; i++) {
			const row = [];
			for (let j = 0; j < gridWidth; j++) {
				row.push(
					<Pixel
						 key={i + '.' + j}
						 row={i}
						 column={j}
						 color={pixels[i][j]}
						 onMouseEvent={props.onMouseEvent}
					/>
				);
			}
			pixelComponents.push(row);
		}
		return pixelComponents;
	}	

	return (
	<div className="canvas">
		{renderPixels()}
	</div>
	);
}
