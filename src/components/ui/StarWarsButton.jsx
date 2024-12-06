import React from "react";
import PropTypes from "prop-types";

const StarWarsButton = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="star-wars-button w-full p-2 mb-2 bg-blue-600 text-white rounded-full hover:bg-red-600 transition duration-300">
			{children}
		</button>
	);
};

StarWarsButton.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default StarWarsButton;
