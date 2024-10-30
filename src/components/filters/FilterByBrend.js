import React from "react";
import { PRODUCTS } from "../../utils/constants";

const FilterByBrend = ({ setFilters }) => {
	const brandSelcetChangeHandler = e => {
		setFilters(state => ({
			...state,
			brand: e.target.value === "all" ? "" : e.target.value,
		}));
	};
	return (
		<div className="border-b border-dashed border-cyan-300">
			<p className="font-bold text-cyan-700">by brand</p>
			<select
				className="w-full text-[18px]"
				onChange={brandSelcetChangeHandler}
			>
				<option value="all">All</option>
				{PRODUCTS.map(product => (
					<option
						key={product.id}
						value={product.brand}
					>
						{product.brand}
					</option>
				))}
			</select>
		</div>
	);
};

export default FilterByBrend;
