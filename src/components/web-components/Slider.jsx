import React from "react";
import PropTypes from "prop-types";

const Slider = ({ value, onChange, min = 0, max = 100, step = 1 }) => {
	return (
		<div className="p-4">
			<input
				type="range"
				value={value}
				onChange={onChange}
				min={min}
				max={max}
				step={step}
				className="slider w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
			/>
		</div>
	);
};

Slider.propTypes = {
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
};

export default Slider;
