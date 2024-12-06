import React from "react";
import PropTypes from "prop-types";
import {
	heroes,
	villains,
	droids,
	bountyHunters,
	jedi,
	sith,
	others,
} from "../../logic/utils/characterTypes";

const CharacterType = ({ onSelect }) => {
	const handleSelect = (category, value) => {
		onSelect({ [category]: value });
	};

	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold text-gray-200">Characters</h3>
			<label className="block text-sm font-medium text-gray-300">Hero:</label>
			<select
				onChange={(e) => handleSelect("hero", e.target.value)}
				className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all text-gray-200">
				{heroes.map((name, index) => (
					<option key={`hero-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Villain:</label>
			<select
				onChange={(e) => handleSelect("villain", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{villains.map((name, index) => (
					<option key={`villain-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Droid:</label>
			<select
				onChange={(e) => handleSelect("droid", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{droids.map((name, index) => (
					<option key={`droid-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Bounty Hunter:</label>
			<select
				onChange={(e) => handleSelect("bountyHunter", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{bountyHunters.map((name, index) => (
					<option key={`bountyHunter-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Jedi:</label>
			<select
				onChange={(e) => handleSelect("jedi", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{jedi.map((name, index) => (
					<option key={`jedi-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Sith:</label>
			<select
				onChange={(e) => handleSelect("sith", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{sith.map((name, index) => (
					<option key={`sith-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>

			<label className="block text-offwhite mb-1">Other:</label>
			<select
				onChange={(e) => handleSelect("other", e.target.value)}
				className="w-full p-1 rounded bg-white text-blue-800 mb-2">
				{others.map((name, index) => (
					<option key={`other-${index}`} value={name}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
};

CharacterType.propTypes = {
	onSelect: PropTypes.func.isRequired,
};

export default CharacterType;
