export const Header: React.FC = () => {
	return (
		<header className="flex justify-between  px-8 py-4">
			<div className="inline-block">~/</div>
			<nav>
				<ul className="flex gap-4 text-sm uppercase">
					<li className="transition-colors hover:text-zinc-500">
						<a href="#a">01_Main</a>
					</li>
					<li className="transition-colors hover:text-zinc-500">
						<a href="#a">02_Blog</a>
					</li>
					<li className="transition-colors hover:text-zinc-500">
						<a href="#b">03_Showcases</a>
					</li>
					<li className="transition-colors hover:text-zinc-500">
						<a href="#c">04_Contact</a>
					</li>
				</ul>
			</nav>
			<div />
			{/* <button type="button" className="inline-block bg-orange-950">
				Dale!
			</button> */}
		</header>
	);
};

export const getConfig = () => ({ render: "static" });
