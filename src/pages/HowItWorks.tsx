import clampVideo from '../assets/clamp-video.mp4'
import { ClampGraph } from '../components/Icons'

const HowItWorks = () => {
  return (
    <div className="flex w-full max-w-text-block flex-col items-center bg-c-background px-4">
      <h1 className="py-4 text-c-grey-nine">How Clamp function Works</h1>
      <p>
        The clamp() CSS function clamps a middle value within a range of values between a defined
        minimum bound and a maximum bound. The function takes three parameters: a{' '}
        <b>minimum value</b>, a<b>preferred value</b>, and a <b>maximum value</b>.
      </p>

      <p className="py-4 text-subheading font-bold">clamp(minimum, preferred, maximum)</p>
      <ul className="list-disc px-4 py-4">
        <li>
          The <b>minimum</b> is the smallest value that the function will return.
        </li>
        <li>
          The <b>preferred</b> is the value that the function will return if it falls within the
          specified range.
        </li>
        <li>
          The <b>maximum</b> is the largest value that the function will return.
        </li>
      </ul>
      <h2 className="pb-2 pt-4 text-c-grey-nine">Advantage of using clamp calculator</h2>
      <p>
        Using a calculator, you can determine the optimal preferred value that will adjust linearly
        across a specified viewport width. The value will increase gradually as the viewport width
        expands. Let’s explore this further with an example.
      </p>
      <div className="grid place-items-center gap-2 sm:grid-cols-2 md:grid-cols-3">
        <p className="py-6">
          Imagine you want a font size of 1.5rem on mobile devices and 3rem on desktop devices. Most
          mobile devices have a viewport width of less than 450px, while most desktop devices have a
          viewport width greater than 1024px.
        </p>
        <div className="h-auto max-h-[280px] w-full max-w-[544px] md:col-span-2">
          <ClampGraph className="h-full w-full" />
        </div>
      </div>
      <p className="pt-6">
        If you enter these values into the calculator with the default rem base, you'll get the
        following result:
      </p>
      <p className="pb-2 font-bold">font-size: clamp(1.5rem, 0.324rem + 4.181vw, 3rem);</p>
      <p className="py-4 text-subheading font-bold">This is how the example works</p>
      <video autoPlay muted loop className="w-full">
        <source src={clampVideo} type="video/mp4" />
      </video>
      <span className="flex w-full justify-end">
        <a
          href="https://codepen.io/adam-buryek-the-selector/pen/yLdpjYX"
          target="_blank"
          className="text-sm text-c-grey-seven duration-200 hover:text-c-grey-nine hover:underline"
        >
          See Demo on Codepen
        </a>
      </span>
      <h2 className="pb-2 pt-4 text-c-grey-nine">Disadvantage of using clamp</h2>
      <p>
        In my opinion, the main disadvantage is that you can't determine the viewport range just by
        looking at the clamp function. To address this, I decided to add a comment to the code that
        provides an explanation. You can generate the comment using the calculator.
      </p>
      {/* <h2 className="pb-2 pt-4 text-c-grey-nine">More about clamp function</h2>
      <a
        href="https://www.youtube.com/watch?v=wARbgs5Fmuw&t=8s"
        target="_blank"
        className="duration-500 hover:contrast-125"
      >
        <h3 className="text-c-grey-eight">Great video from Kevin Powell</h3>
        <img src={KevingImage} className="rounded-xl"></img>
      </a>
      <a
        href="https://web.dev/articles/min-max-clamp"
        target="_blank"
        className="mt-6 duration-500 hover:contrast-125"
      >
        <h3 className="text-c-grey-eight">Cool article by Una Kravets</h3>
        <img src={UnaImage} className="rounded-xl"></img>
      </a> */}
    </div>
  )
}

export default HowItWorks
