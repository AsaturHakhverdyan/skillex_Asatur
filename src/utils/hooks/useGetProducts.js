import { useEffect, useState } from "react";
import { PRODUCTS } from "../constants";

export const getPriceForRange = () => {
	let price = 0;
	PRODUCTS.forEach(prod => {
		if (price < prod.price) {
			price = Math.round(prod.price);
		}
	});
	return price;
};

export const useGetProducts = (search, filters) => {
	const [products, setProducts] = useState(PRODUCTS);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		try {
			const newProducts = PRODUCTS.filter(
				prod =>
					prod.name.toLowerCase().includes(search.toLowerCase()) &&
					(!filters.category || prod.category === filters.category) &&
					(!filters.brand || prod.brand === filters.brand) &&
					prod.price <= filters.price &&
					prod.rating >= filters.rating
			);
			setProducts(newProducts);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}, [search, filters]);

	return {
		products,
		isLoading,
	};
};
