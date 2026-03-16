import React from "react";
import { Drawer, Button } from "@material-tailwind/react";
import { StarsCanvas } from 'star-background';

export const MobileSidebar = ({ open, toggle }) => {
	return (
		<Drawer open={open} placement="right" onClose={toggle} className="flex flex-col shadow-none border-none h-full bg-transparent bg-gradient-to-t from-slate-900/50 via-slate-700/50 to-slate-900/50 backdrop-blur-md p-4">
		<div className="flex flex-col flex-none gap-2 mb-2 relative z-70">
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50" fullWidth>About</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50" fullWidth>Projects</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50" fullWidth>Events</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50" fullWidth>Team</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50" fullWidth>Contact</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50" fullWidth>Trivia</Button>
		</a>
		</div>
		<div className="flex-1 relative min-h-0 w-full pointer-events-none overflow-hidden">
		<div className="absolute inset-0 z-0 [&_div]:!absolute [&_div]:!inset-0 [&_canvas]:!absolute [&_canvas]:!inset-0">
		<StarsCanvas
		numStars={1000}
		radius={2.0}
		rotationSpeedX={0.005}
		rotationSpeedY={0.01}
		color="#ffffff"
		size={0.005}
		className="pointer-events-none absolute inset-0 w-full h-full"
		/>
		</div>
		</div>
		</Drawer>
	);
};
