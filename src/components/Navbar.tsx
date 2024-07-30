import { Link } from "react-router-dom";
import { ClampCalculatorIcon } from "./Icons";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import HamburgerButton from "./Hamburger";
import { useState } from "react";

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
  const [menuOpened, setMenuOpened] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className="position-fixed h-16 flex justify-center bg-c-grey-one">
      <div className="flex w-full max-w-content justify-between items-center px-8">
        <Link to="/" aria-label="Clamp Calculator">
          <ClampCalculatorIcon />
        </Link>
        <div className="flex w-full max-w-80 justify-between mr-20 font-medium">
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
      <HamburgerButton onClick={handleHamburgerClick} menuOpened={menuOpened} />
    </div>
  );
};

export default Navbar;
