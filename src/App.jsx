import React, { useState, useEffect } from "react";
import { Toaster } from 'react-hot-toast';
import Sidebar from "./components/web-components/Sidebar";
import TextDisplay from "./components/web-components/TextDisplay";
import SplashScreen from "./components/web-components/SplashScreen";
import Login from "./components/web-components/Login";
import Register from "./components/web-components/Register";
import { handleInputSubmit } from "./logic/handleInput";

function App() {
	const [theme, setTheme] = useState("dark");
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [userName, setUserName] = useState("");

	useEffect(() => {
		document.documentElement.classList.add(theme);
		document.documentElement.classList.remove(
			theme === "dark" ? "light" : "dark"
		);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
	};

	const toggleSidebar = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	const [userInput, setUserInput] = useState("");
	const [aiResponse, setAiResponse] = useState("");
	const [character, setCharacter] = useState({
		mainCharacter: "",
		sidekick: "",
		villain: "",
	});
	const [settings, setSettings] = useState({
		location: "",
		timePeriod: "",
	});
	const [elements, setElements] = useState({
		plotTwist: "",
		moralLesson: "",
		storySettingRecommendations: "",
	});
	const [showSplashScreen, setShowSplashScreen] = useState(true);
	const [showLogin, setShowLogin] = useState(false);
	const [showRegister, setShowRegister] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setShowSplashScreen(false);
		setShowLogin(true);
	};

	const handleRegister = () => {
		setShowSplashScreen(false);
		setShowRegister(true);
	};

	const handleLoginSuccess = () => {
		console.log("Login success handler called");
		setShowLogin(false);
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		setShowSplashScreen(true);
	};

	const handleCharacterSelect = (selected) => {
		setCharacter((prev) => ({ ...prev, ...selected }));
	};

	const handleSettingsSelect = (selected) => {
		setSettings((prev) => ({ ...prev, ...selected }));
	};

	const handleElementsSelect = (selected) => {
		setElements((prev) => ({ ...prev, ...selected }));
	};

	if (showSplashScreen) {
		return <SplashScreen onLogin={handleLogin} onRegister={handleRegister} />;
	}

	if (showLogin) {
		return <Login onLoginSuccess={handleLoginSuccess} />;
	}

	if (showRegister) {
		return <Register />;
	}

	return (
		<div
			className={`App min-h-screen ${
				theme === "dark"
					? "bg-bluegray-50 text-offwhite"
					: "bg-bluegray-50 text-bluegray-50"
			} flex`}>
			<Toaster position="top-right" />
			{isLoggedIn && (
				<>
					<Sidebar
						onCharacterSelect={handleCharacterSelect}
						onSettingsSelect={handleSettingsSelect}
						onElementsSelect={handleElementsSelect}
						onLogout={handleLogout}
						theme={theme}
						toggleTheme={toggleTheme}
						isSidebarOpen={isSidebarOpen}
						toggleSidebar={toggleSidebar}
						setUserName={setUserName}
					/>
					<div className="flex-grow p-4">
						<TextDisplay
							userInput={userInput}
							aiResponse={aiResponse}
							onSubmit={(input) =>
								handleInputSubmit(
									input,
									setUserInput,
									setAiResponse,
									userInput,
									aiResponse,
									character,
									settings,
									elements,
									userName // Pass the userName to handleInputSubmit
								)
							}
						/>
					</div>
				</>
			)}
		</div>
	);
}

export default App;
