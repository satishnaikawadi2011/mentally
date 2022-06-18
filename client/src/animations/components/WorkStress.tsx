import React from 'react';
import Lottie, { Options } from 'react-lottie';

import animationData from '../data/stressed-woman-at-work.json';

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

const WorkStress: React.FC<Props> = ({ height = 300, width = 300 }) => {
	return <Lottie style={{ backgroundColor: 'red' }} options={defaultOptions} height={height} width={width} />;
};

export default WorkStress;
