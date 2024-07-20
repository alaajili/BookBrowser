import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
	

	return (
		<header className="text-white bg-blue-500 flex items-center justify-between py-3 px-16">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
				className="h-8 w-8 mr-2"
				fill='white'

			>
				<path d="M54 8V0H12C6.49 0 2 4.49 2 10v44c0 5.51 4.49 10 10 10h50V8h-8zM6 10c0-3.31 2.69-6 6-6h38v40H12c-2.25 0-4.33.75-6 2V10zm6 50c-3.31 0-6-2.69-6-6s2.69-6 6-6h42V12h4v40H20v4h38v4H12z"/>
			</svg>
			<h1 className="font-bold text-xl w-full ">BookBrowse</h1>
			<div className="flex items-center space-x-4">
				<button className="text-blue-500 text-lg bg-white px-4 py-2 rounded hover:scale-105">Login</button>
				<button className="text-white px-4 py-2 rounded border border-white hover:bg-white hover:text-blue-500">Register</button>
			</div>
		</header>
	)
}

export default Header