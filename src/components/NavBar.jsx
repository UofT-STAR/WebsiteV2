import React from "react";
import { useState } from "react";
import { IconButton, Typography, Button, Drawer } from "@material-tailwind/react";
import { Bars3Icon, DocumentTextIcon, ShareIcon } from "@heroicons/react/24/outline";
import { StarsCanvas } from 'star-background';

export function NavBar({ onToggle }) {
	const [open, setOpen] = useState(false);

	const toggleNav = () => setOpen(!open.current)

	return (
		<header className={
			`sticky top-0 z-40 flex items-center
		justify-between p-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md
			w-full overflow-hidden`}
		>
		<div className="pointer-events-none z-60">
		<StarsCanvas 
		numStars={1000}
		radius={10.0}
		rotationSpeedX={0.005}
		rotationSpeedY={0.01}
		color="#ffffff"
		size={0.05}
		/>
		</div>
		<div id="leftNavBar" className="flex flex-1 justify-start">
		<a href="https://www.utstar.ca" className="flex gap-2 items-center">
		<img src="https://www.utstar.ca/Images/UTSTAR_logo.webp" className="h-10 w-10">
		</img>
		<Typography className="text-white font-bold text-xl">UofT STAR</Typography>
		</a>
		</div>
		<div id="rightNavBar" className="flex flex-1 justify-end">
		<div id="DesktopNavBar" className="hidden lg:flex flex-1 z-50 justify-end gap-2">
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50">About</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50">Projects</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50">Events</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50">Team</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50">Contact</Button>
		</a>
		<a href="https://utstar.ca">
		<Button className="rounded-full transition-all duration-300 bg-gray-800/30 hover:bg-gray-800/50">Trivia</Button>
		</a>
		</div>
		<IconButton variant="text" color="white" className="lg:hidden flex-shrink-0" onClick={onToggle}>
		<Bars3Icon className="h-8 w-8" strokeWidth={2} />
		</IconButton>
		</div>
		</header>
	);
}
