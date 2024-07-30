import { Link } from "react-router-dom";
import { ClampCalculatorIcon } from "./Icons";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import HamburgerButton from "./Hamburger";
import { useState } from "react";
import { cn } from "../utils/classNames";

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
    <header
      className={cn(
        "fixed z-50 w-full max-h-16 h-screen flex justify-center bg-c-grey-one duration-15 transition-[max-height] duration-1000",
        {
          "position-absolute max-h-screen bg-c-grey-two": menuOpened,
        }
      )}
    >
      <div className="flex w-full max-w-content justify-between items-center px-8">
        <Link to="/" aria-label="Clamp Calculator">
          <ClampCalculatorIcon />
        </Link>
        <nav className="flex w-full max-w-80 justify-between mr-20 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.target}
              onClick={() => setMenuOpened(false)}
              className="hover:text-c-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <ThemeSwitcher />
      </div>
      <HamburgerButton onClick={handleHamburgerClick} menuOpened={menuOpened} />
    </header>
  );
};

export default Navbar;
