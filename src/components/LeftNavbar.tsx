import { Company } from "./Company";
import Header from "./Header";
import Individual from "./Individual";
import { Teams } from "./Teams";

const LeftNavbar = () => {
  return (
    <div className="flex h-screen w-80 flex-col gap-4 py-4">
      <Header />
      <Individual />
      <Teams />
    </div>
  );
};

export default LeftNavbar;
