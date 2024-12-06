import React from "react";
import PropTypes from "prop-types";

const SidebarToggle = ({ isSidebarOpen, toggleSidebar }) => {
	return (
		<button onClick={toggleSidebar}>
			{isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
		</button>
	);
};

SidebarToggle.propTypes = {
	isSidebarOpen: PropTypes.bool.isRequired,
	toggleSidebar: PropTypes.func.isRequired,
};

export default SidebarToggle;
