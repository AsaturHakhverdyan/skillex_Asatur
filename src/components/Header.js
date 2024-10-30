import React from "react";
import { CiSearch } from "react-icons/ci";

const Header = ({ setSearch }) => {
	let time;

	const onchangeHandler = e => {
		clearTimeout(time);
		time = setTimeout(() => {
			setSearch(e.target.value);
		}, 400);
	};

	return (
		<header className="my-8 sm:flex justify-between border-b border-dashed border-cyan-300 pb-4 px-4">
			<h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center">
				Skillex Test
			</h1>
			<div className="sm:max-w-[300px] w-full relative mt-4 sm:mt-0">
				<input
					type="text"
					className="border border-cyan-400 outline-none  w-full py-2 pl-3 pr-[40px] rounded-2xl"
					onChange={onchangeHandler}
					placeholder="Search Product..."
				/>
				<div className="absolute right-3 top-3">
					<CiSearch size={20} />
				</div>
			</div>
		</header>
	);
};

export default Header;
