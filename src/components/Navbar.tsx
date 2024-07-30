type NavLinks = {
  name: string;
  target: string;
};

export const navLinks: NavLinks[] = [
  { name: "Calculator", target: "calculator" },
  { name: "How it Works", target: "how-it-works" },
  { name: "About", target: "about" },
];

const Navbar = () => {
  return (
    <div className="position-fixed h-16 flex justify-center bg-c-grey-one">
      <div className="flex w-full max-w-content justify-between items-center">
        <p>Clamp Calculator</p>
        <div className="flex w-full max-w-80 justify-between ">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.target}
              className="hover:text-c-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
        <p>Theme Switcher</p>
      </div>
    </div>
  );
};

export default Navbar;
