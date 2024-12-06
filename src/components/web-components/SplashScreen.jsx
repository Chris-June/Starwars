import React from "react";
import PropTypes from "prop-types";

const SplashScreen = ({ onLogin, onRegister }) => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
			<div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50">
				<h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
					Welcome to Story AI
				</h1>
				<button
					onClick={onLogin}
					className="w-full py-3 mb-4 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:scale-105">
					Login
				</button>
				<button
					onClick={onRegister}
					className="w-full py-3 bg-green-600 rounded-lg hover:bg-green-500 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:scale-105">
					Register
				</button>
			</div>
		</div>
	);
};

SplashScreen.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onRegister: PropTypes.func.isRequired,
};

export default SplashScreen;
