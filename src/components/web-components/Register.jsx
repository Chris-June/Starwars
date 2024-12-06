import React from "react";

const Register = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
			<div className="p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50">
				<h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
					Register
				</h2>
				<button
					className="w-full py-3 px-6 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-300 text-white shadow-lg hover:shadow-xl hover:scale-105">
					Register
				</button>
			</div>
		</div>
	);
};

export default Register;
