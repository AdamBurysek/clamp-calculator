import { cn } from "../../utils/classNames";

interface Props {
  onClick: () => void;
  menuOpened: boolean;
}

const HamburgerButton = ({ onClick, menuOpened }: Props) => (
  <button
    aria-label="Hamburger"
    className={cn(
      "absolute cursor-pointer right-4 top-3 md:hidden transition-all duration-300 ease-in-out",
      { "transform rotate-45": menuOpened }
    )}
    onClick={onClick}
    type="button"
  >
    <span
      className={cn(
        "block w-8 h-1 bg-current my-1.5 mx-auto transition-all duration-300 ease-in-out",
        { "transform translate-y-3": menuOpened }
      )}
    />
    <span
      className={cn(
        "block w-8 h-1 bg-current my-1.5 mx-auto transition-all duration-300 ease-in-out",
        { "w-0": menuOpened }
      )}
    />
    <span
      className={cn(
        "block w-8 h-1 bg-current my-1.5 mx-auto transition-all duration-300 ease-in-out",
        { "transform -translate-y-2 rotate-90": menuOpened }
      )}
    />
  </button>
);

export default HamburgerButton;
