import "../styles.css";

import type { PropsWithChildren } from "react";

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="description" content="Welcome to my index!" />
			<link rel="icon" type="image/png" href="https://fav.farm/🏃‍♂️" />
			<main>{children}</main>
		</div>
	);
};

export const getConfig = () => ({ render: "static" });

export default RootLayout;
