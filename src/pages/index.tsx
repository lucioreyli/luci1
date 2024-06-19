import { Link } from "waku";
import { Counter } from "../components/counter";
import { Suspense } from "react";
import { Data } from "../components/data";

function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Data />
      </Suspense>
      <Counter />
      <Link to="/about" className="mt-4 inline-block underline">
        About page
      </Link>
    </div>
  );
}

export const getConfig = () => ({
  render: "static",
});

export default HomePage;
