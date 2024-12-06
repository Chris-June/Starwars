import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Separator from "@radix-ui/react-separator";
import CharacterType from "../elements/CharacterTypes";
import StorySettings from "../elements/StorySettings";
import StoryElements from "../elements/StoryElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faSignOutAlt, 
  faCog, 
  faChevronLeft, 
  faChevronRight 
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({
  onCharacterSelect,
  onSettingsSelect,
  onElementsSelect,
  onLogout,
  isSidebarOpen,
  toggleSidebar,
  setUserName,
}) {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setUserName(e.target.value);
  };

  return (
    <motion.div
      initial={false}
      animate={{
        width: isSidebarOpen ? "320px" : "80px",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className="h-screen bg-gray-900/95 backdrop-blur-md border-r border-gray-800/50 relative">
      <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLogout}
          className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
          <FontAwesomeIcon icon={faSignOutAlt} className="text-gray-400 hover:text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors">
          <FontAwesomeIcon 
            icon={isSidebarOpen ? faChevronLeft : faChevronRight}
            className="text-gray-400 hover:text-white" 
          />
        </motion.button>
      </div>

      <ScrollArea.Root className="h-[calc(100vh-64px)] overflow-hidden">
        <ScrollArea.Viewport className="h-full w-full">
          <motion.div
            animate={{ opacity: isSidebarOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={`p-4 space-y-6 ${!isSidebarOpen ? 'invisible' : ''}`}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                placeholder="Enter your name..."
              />
            </div>

            <Separator.Root className="h-px bg-gray-800/50 my-4" />
            
            <div className="space-y-6">
              <CharacterType onSelect={onCharacterSelect} />
              <StorySettings onSettingsSelect={onSettingsSelect} />
              <StoryElements onElementsSelect={onElementsSelect} />
            </div>
          </motion.div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-gray-800/50 transition-colors duration-150 ease-out hover:bg-gray-700/50 w-2"
          orientation="vertical">
          <ScrollArea.Thumb className="flex-1 bg-gray-600 rounded-full relative" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </motion.div>
  );
}

Sidebar.propTypes = {
  onCharacterSelect: PropTypes.func.isRequired,
  onSettingsSelect: PropTypes.func.isRequired,
  onElementsSelect: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
};

export default Sidebar;