import React from "react";

const FilterByRating = ({ setFilters }) => {
	const ratingSelcetChangeHandler = e => {
		setFilters(state => ({
			...state,
			rating: parseInt(e.target.value),
		}));
	};

	return (
		<div className="border-b border-dashed border-cyan-300">
			<p className="font-bold text-cyan-700">by rating</p>
			<select
				name="rating"
				className="w-full text-[18px]"
				onChange={ratingSelcetChangeHandler}
			>
				<option value="1">above 1</option>
				<option value="2">above 2</option>
				<option value="3">above 3</option>
				<option value="4">above 4</option>
				<option value="5">above 5</option>
			</select>
		</div>
	);
};

export default FilterByRating;
