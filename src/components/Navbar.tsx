import { Link } from "react-router-dom";
import { ClampCalculatorIcon } from "./Icons";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import HamburgerButton from "./common/HamburgerButton";
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
          "position-absolute max-h-screen bg-c-grey-two md:max-h-16 md:bg-c-grey-one":
            menuOpened,
        }
      )}
    >
      <nav className="flex w-full max-w-content justify-between px-8 pt-4 overflow-hidden max-md:flex-col max-md:items-center">
        <Link to="/" aria-label="Clamp Calculator" className="pt-1 max-md:pb-8">
          <ClampCalculatorIcon />
        </Link>
        <div className="flex w-full max-w-80 justify-between mr-20 font-medium  max-md:flex-col max-md:gap-10 max-md:items-center max-md:mr-0 max-md:pt-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.target}
              onClick={() => setMenuOpened(false)}
              className="pt-1 hover:text-c-primary max-md:text-3xl"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <span className="max-md:pt-16">
          <ThemeSwitcher />
        </span>
      </nav>
      <HamburgerButton onClick={handleHamburgerClick} menuOpened={menuOpened} />
    </header>
  );
};

export default Navbar;
