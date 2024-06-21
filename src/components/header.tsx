export const Header: React.FC = () => {
  return (
    <header className="flex justify-between px-8 py-4">
      <span>~/</span>
      <nav>
        <ul className="flex gap-4 text-sm uppercase">
          <li>
            <a className="transition-colors hover:text-orange-50/50" href="#a">
              01_Main
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-orange-50/50" href="#a">
              02_Blog
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-orange-50/50" href="#b">
              03_Showcases
            </a>
          </li>
          <li>
            <a className="transition-colors hover:text-orange-50/50" href="#c">
              04_Contact
            </a>
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

// export const getConfig = () => ({ render: "static" });
