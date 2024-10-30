import React from "react";
import FilterByCategory from "./filters/FilterByCategory";
import FilterByBrend from "./filters/FilterByBrend";
import FilterByPrice from "./filters/FilterByPrice";
import FilterByRating from "./filters/FilterByRating";

const SideBar = ({ setFilters, price }) => {
	return (
		<div className="px-4 flex flex-col gap-y-4">
			<p className="text-center font-bold text-xl">Filters</p>
			<FilterByCategory setFilters={setFilters} />
			<FilterByBrend setFilters={setFilters} />
			<FilterByRating setFilters={setFilters} />
			<FilterByPrice
				setFilters={setFilters}
				price={price}
			/>
		</div>
	);
};

export default SideBar;
