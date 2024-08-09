import { GithubIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-c-grey-one w-full flex justify-center mt-12">
      <div className="max-w-content h-36 flex flex-col items-center gap-8">
        <a
          className="cursor-pointer mt-10"
          href="https://github.com/AdamBurysek/clamp-calculator"
          target="_blank"
          aria-label="Clamp Calculator Github Repository"
        >
          <GithubIcon />
        </a>
        <p>
          Made with ❤️ by{" "}
          <a
            className="cursor-pointer font-semibold"
            href="https://code.adamplanet.cz"
            target="_blank"
            aria-label="Adam Code Website"
          >
            Adam Code
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
