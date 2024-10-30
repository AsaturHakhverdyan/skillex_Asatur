import React from "react";
import { getPriceForRange } from "../../utils/hooks/useGetProducts";

const FilterByPrice = ({ setFilters, price }) => {
	let time;
	const priceInputChangeHandler = e => {
		clearTimeout(time);
		time = setTimeout(() => {
			setFilters(state => ({
				...state,
				price: parseInt(e.target.value),
			}));
		}, 500);
	};
	let maxPrice = getPriceForRange();

	return (
		<div className="border-b border-dashed border-cyan-300">
			<p className="font-bold text-cyan-700">by Price</p>
			<input
				className="outline-none w-full"
				type="range"
				defaultValue={price}
				min={0}
				max={maxPrice}
				onChange={priceInputChangeHandler}
			/>
		</div>
	);
};

export default FilterByPrice;
