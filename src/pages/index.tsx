import { Header } from "@/components/header";
import { Highlight } from "@/components/highlight";

const HomePage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Highlight />
    </div>
  );
};

export const getConfig = () => ({ render: "dynamic" });

export default HomePage;
