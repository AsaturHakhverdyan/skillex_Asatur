import ClipLoader from "react-spinners/ClipLoader";

const Spiner = isLoading => {
	const override = {
		display: "block",
		margin: "0 auto",
		borderColor: "black",
	};

	return (
		<div className="sweet-loading">
			<ClipLoader
				loading={true}
				cssOverride={override}
				size={150}
				aria-label="Loading Spinner"
				data-testid="loader"
			/>
		</div>
	);
};

export default Spiner;
