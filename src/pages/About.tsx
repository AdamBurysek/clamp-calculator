import BackgroundGrid from '../components/common/BackgroundGrid'
import ContactForm from '../components/ContactForm/ContactForm'

const features = [
  {
    title: 'Comments',
    description: 'Generate comments to explain the clamp function.',
  },
  {
    title: 'Custom Target',
    description: 'You can use custom target values like --fs-heading1 in your CSS.',
  },
  {
    title: 'Tailwind Support',
    description: 'Tailwind support is included.',
  },
  {
    title: 'Pixels Output',
    description: 'Unlike many other calculators, this one allows you to output results in pixels.',
  },
  {
    title: 'Dark Mode',
    description: 'The calculator is available in both light and dark modes.',
  },
  {
    title: 'Open Source',
    description: 'The source code is available on GitHub.',
  },
]

function About() {
  return (
    <div className="flex max-w-content flex-col items-center bg-c-background px-4 md:px-20">
      <h1 className="py-4 text-c-grey-nine">About the Calculator</h1>
      <p className="max-w-text-block pb-8 text-center">
        Welcome to my advanced CSS clamp function calculator! I created this tool to make it easier
        for developers and designers to calculate responsive font sizes and other scalable values
        using the CSS clamp() function. Whether you're working on fluid layouts or fine-tuning
        typography, this calculator simplifies the process. I also aim to add new features that go
        beyond what other calculators offer.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-c-background to-c-background-pure px-6 py-12 shadow-md shadow-c-grey-three max-sm:max-w-80"
          >
            <BackgroundGrid size={20} className="opacity-60" />
            <p className="relative z-20 text-heading3 font-bold text-c-grey-nine">
              {feature.title}
            </p>
            <p className="relative z-20 mt-4 text-base font-normal text-c-grey-eight">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <p className="max-w-text-block py-12 text-center">
        I'm always looking to improve this calculator by adding new features that might be helpful
        to you. Your feedback is incredibly valuable in making this tool better. If you have any
        ideas or notice any issues, I’d love to hear from you. Please reach out using the form
        below!
      </p>
      <ContactForm />
    </div>
  )
}

export default About
