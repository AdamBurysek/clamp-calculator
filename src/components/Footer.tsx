import { GithubIcon } from './Icons'

const Footer = () => {
  return (
    <footer className="flex w-full justify-center bg-c-grey-one">
      <div className="flex h-36 max-w-content flex-col items-center gap-8">
        <a
          className="mt-10 cursor-pointer duration-300 hover:scale-105"
          href="https://github.com/AdamBurysek/clamp-calculator"
          target="_blank"
          aria-label="Clamp Calculator Github Repository"
        >
          <GithubIcon />
        </a>
        <p>
          Made with ❤️ by{' '}
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
  )
}

export default Footer
