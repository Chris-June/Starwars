import React from "react";
import PropTypes from "prop-types";
import StarWarsButton from "../ui/StarWarsButton"; // Correct import path based on your structure

const Button = ({ variant, size, className, children, ...props }) => {
	const baseStyle =
		"px-4 py-2 rounded focus:outline-none transition duration-300";
	const variants = {
		outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
		solid: "bg-blue-600 text-white hover:bg-blue-700",
	};
	const sizes = {
		icon: "p-2 h-8 w-8 flex items-center justify-center",
		default: "px-4 py-2",
	};

	const variantClass = variants[variant] || variants["solid"];
	const sizeClass = sizes[size] || sizes["default"];

	return (
		<button
			className={`${baseStyle} ${variantClass} ${sizeClass} ${className}`}
			{...props}>
			{children}
		</button>
	);
};

Button.propTypes = {
	variant: PropTypes.oneOf(["outline", "solid"]),
	size: PropTypes.oneOf(["icon", "default"]),
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Button;
