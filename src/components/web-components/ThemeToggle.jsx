import React from "react";
import PropTypes from "prop-types";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = ({ theme, toggleTheme }) => {
	return (
		<button
			onClick={toggleTheme}
			className="star-wars-button w-full mb-4 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-red-600 transition duration-300">
			{theme === "dark" ? (
				<>
					<FaSun className="mr-2" /> Switch to Light Theme
				</>
			) : (
				<>
					<FaMoon className="mr-2" /> Switch to Dark Theme
				</>
			)}
		</button>
	);
};

ThemeToggle.propTypes = {
	theme: PropTypes.string.isRequired,
	toggleTheme: PropTypes.func.isRequired,
};

export default ThemeToggle;
