import { useState } from 'react'
import { NavBar } from './components/NavBar' 
import { MobileSidebar } from './components/MobileSidebar'
import { VideoBanner } from './components/VideoBanner'

function App() {
	const [count, setCount] = useState(0)

	const [isOpen, setIsOpen] = useState(false);
	const toggleNav = () => setIsOpen((prev) => !prev);

	return (
		<div className="relative min-h-screen">
		<NavBar onToggle={toggleNav} />
		<MobileSidebar open={isOpen} toggle={ toggleNav } />
		<main>
			<VideoBanner />
		</main>
		</div> 
	);
}

export default App
