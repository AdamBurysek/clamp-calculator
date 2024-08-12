import { cn } from "../../utils/classNames";

interface Props {
  onClick: () => void;
  menuOpened: boolean;
}

const HamburgerButton = ({ onClick, menuOpened }: Props) => (
  <button
    aria-label="Hamburger"
    className={cn(
      "absolute right-4 top-3 cursor-pointer transition-all duration-300 ease-in-out md:hidden",
      { "rotate-45 transform": menuOpened },
    )}
    onClick={onClick}
    type="button"
  >
    <span
      className={cn(
        "mx-auto my-1.5 block h-1 w-8 bg-current transition-all duration-300 ease-in-out",
        { "translate-y-3 transform": menuOpened },
      )}
    />
    <span
      className={cn(
        "mx-auto my-1.5 block h-1 w-8 bg-current transition-all duration-300 ease-in-out",
        { "w-0": menuOpened },
      )}
    />
    <span
      className={cn(
        "mx-auto my-1.5 block h-1 w-8 bg-current transition-all duration-300 ease-in-out",
        { "-translate-y-2 rotate-90 transform": menuOpened },
      )}
    />
  </button>
);

export default HamburgerButton;
