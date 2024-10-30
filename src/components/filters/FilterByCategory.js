import React from "react";
import { PRODUCTS } from "../../utils/constants";

const FilterByCategory = ({ setFilters }) => {
	const [...categories] = new Set(PRODUCTS.map(product => product.category));

	const categorySelcetChangeHandler = e => {
		setFilters(state => ({
			...state,
			category: e.target.value === "all" ? "" : e.target.value,
		}));
	};

	return (
		<div className="border-b border-dashed border-cyan-300 ">
			<p className="font-bold text-cyan-700">by Category</p>
			<select
				name="all"
				onChange={categorySelcetChangeHandler}
				className="w-full text-[18px]"
			>
				<option value="all">All</option>
				{categories.map(category => (
					<option
						key={category}
						className="cursor-pointer font-medium text-[18px] flex items-center"
						value={category}
					>
						{category}
					</option>
				))}
			</select>
		</div>
	);
};

export default FilterByCategory;
