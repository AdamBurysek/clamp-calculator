import { Link } from "react-router-dom";
import { ClampCalculatorIcon } from "./Icons";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";

type NavLinks = {
  name: string;
  target: string;
};

export const navLinks: NavLinks[] = [
  { name: "Calculator", target: "/" },
  { name: "How it Works", target: "how-it-works" },
  { name: "About", target: "about" },
];

const Navbar = () => {
  return (
    <div className="position-fixed h-16 flex justify-center bg-c-grey-one">
      <div className="flex w-full max-w-content justify-between items-center px-8">
        <Link to="/">
          <ClampCalculatorIcon />
        </Link>
        <div className="flex w-full max-w-80 justify-between mr-24">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.target}
              className="hover:text-c-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
