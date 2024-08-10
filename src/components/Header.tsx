import { Company } from "./Company";
import { Alert } from "./Alert";

const Header = () => {
  const username = localStorage.getItem("username");
  return (
    <div className="flex w-full justify-between px-5 pb-2">
      <Company />
      {username?.toLocaleLowerCase() === "admin" && <Alert />}
    </div>
  );
};

export default Header;
