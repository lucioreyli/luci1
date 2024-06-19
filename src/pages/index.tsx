const HomePage: React.FC = () => {
	return (
		<div>
			<h1>hi</h1>
			<h1 className="text-neutral-200">hi</h1>
		</div>
	);
};

export const getConfig = () => ({ render: "static" });

export default HomePage;
