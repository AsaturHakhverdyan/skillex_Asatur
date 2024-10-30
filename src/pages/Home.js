import React, { useState } from "react";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Spiner from "../spiner/Spiner";
import { useGetProducts } from "../utils/hooks/useGetProducts";

const Home = () => {
	const [search, setSearch] = useState("");
	const [filters, setFilters] = useState({
		category: "",
		brand: "",
		price: 10000,
		rating: 0,
	});

	const { products, isLoading } = useGetProducts(search, filters);

	return (
		<section className="max-w-[1240px] w-full mx-auto">
			<Header setSearch={setSearch} />
			<section className="md:grid grid-cols-4">
				<div className="col-span-1 mb-4">
					<SideBar
						setFilters={setFilters}
						price={filters.price}
					/>
				</div>
				<div className="col-span-3 px-4 sm:px-2 flex flex-col items-center sm:items-start sm:grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-3 gap-4">
					{isLoading ? (
						<Spiner loading={isLoading} />
					) : products.length > 0 ? (
						products.map(product => (
							<div
								className="flex items-center justify-center"
								key={product.id}
							>
								<ProductItem product={product} />
							</div>
						))
					) : (
						<p>No products funded...</p>
					)}
				</div>
			</section>
		</section>
	);
};

export default Home;
