import React from "react";
import PropTypes from "prop-types";
import { Transition, TransitionChild } from "@headlessui/react";

export const Drawer = ({ open, onClose, children }) => {
	return (
		<Transition show={open}>
			<div className="fixed inset-0 flex z-50">
				<TransitionChild
					enter="transition-opacity ease-linear duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity ease-linear duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					className="fixed inset-0">
					<div
						className="absolute inset-0 bg-black opacity-50"
						onClick={onClose}></div>
				</TransitionChild>
				<TransitionChild
					enter="transition ease-in-out duration-300 transform"
					enterFrom="-translate-x-full"
					enterTo="translate-x-0"
					leave="transition ease-in-out duration-300 transform"
					leaveFrom="translate-x-0"
					leaveTo="-translate-x-full"
					className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800">
					{children}
				</TransitionChild>
			</div>
		</Transition>
	);
};

Drawer.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export const DrawerTrigger = ({ asChild, children }) => {
	const Component = asChild ? "div" : "button";
	return <Component>{children}</Component>;
};

DrawerTrigger.propTypes = {
	asChild: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export const DrawerContent = ({ children, ...props }) => {
	return <div {...props}>{children}</div>;
};

DrawerContent.propTypes = {
	children: PropTypes.node.isRequired,
};

export const DrawerHeader = ({ children }) => {
	return <div className="p-4 border-b dark:border-gray-700">{children}</div>;
};

DrawerHeader.propTypes = {
	children: PropTypes.node.isRequired,
};

export const DrawerTitle = ({ children }) => {
	return (
		<h2 className="text-lg font-medium text-gray-900 dark:text-white">
			{children}
		</h2>
	);
};

DrawerTitle.propTypes = {
	children: PropTypes.node.isRequired,
};

export const DrawerDescription = ({ children }) => {
	return <p className="text-sm text-gray-500 dark:text-gray-400">{children}</p>;
};

DrawerDescription.propTypes = {
	children: PropTypes.node.isRequired,
};

export const DrawerFooter = ({ children }) => {
	return <div className="p-4 border-t dark:border-gray-700">{children}</div>;
};

DrawerFooter.propTypes = {
	children: PropTypes.node.isRequired,
};

export const DrawerClose = ({ asChild, children, onClick }) => {
	const Component = asChild ? "div" : "button";
	return <Component onClick={onClick}>{children}</Component>;
};

DrawerClose.propTypes = {
	asChild: PropTypes.bool,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired,
};
