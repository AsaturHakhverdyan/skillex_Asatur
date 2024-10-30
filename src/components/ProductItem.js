import React from "react";

const ProductItem = ({ product }) => {
	return (
		<div className="w-full border border-sky-500 rounded-xl text-center overflow-hidden">
			<div className="bg-sky-500 py-4">
				<p className="text-[18px] md:text-xl lg:text-2xl text-white">
					{product.name}
				</p>
				<p className="text-[16px] md:text-[18px] text-white">
					Rating : <span>{product.rating}</span>
				</p>
			</div>
			<img
				src={product.imageUrl}
				alt={product.name}
				className="md:min-h-[300px] w-full md:object-contain object-cover drop-shadow-[0_10px_10px]"
			/>
			<p className="font-medium">{product.price + " "}$</p>
		</div>
	);
};

export default ProductItem;
