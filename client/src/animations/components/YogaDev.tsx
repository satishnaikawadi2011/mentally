import React from 'react';
import Lottie, { Options } from 'react-lottie';

import animationData from '../data/yoga-developer.json';

const defaultOptions: Options = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings:
		{
			preserveAspectRatio: 'xMidYMid slice'
		}
};

interface Props {
	height?: number;
	width?: number;
}

const YogaDev: React.FC<Props> = ({ height = 300, width = 300 }) => {
	return (
		<Lottie
			style={{ backgroundColor: 'var(--first-color-send)' }}
			options={defaultOptions}
			height={height}
			width={width}
		/>
	);
};

export default YogaDev;
