import {Container} from "@/components/Container";

const steps = [
  {
    name: 'Step 1',
    description:
      'Shortlist a Mentor for yourself according to your needs.',
  },
  {
    name: 'Step 2',
    description:
      'Book a complimentary trial session to see how the mentor can help you.',
  },
  {
    name: 'Step 3',
    description:
      'Start preparing via one-on-one mentorship with your mentor.',
  },
]

export function FindMentors() {
  return (
    <section
      id="features"
      aria-label="Features for building a portfolio"
      className="py-8 sm:py-16"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Get started in three easy steps
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Gain access to a network of experienced mentors ready to guide you on your path to success.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {steps.map((step) => (
            <li
              key={step.name}
              className="rounded-2xl border border-gray-200 p-8 hover:border-gray-800 transition duration-300 ease-in-out"
            >
              {/*<feature.icon className="h-8 w-8" />*/}
              <h3 className="font-semibold text-xl text-gray-900">
                {step.name}
              </h3>
              <p className="mt-2 text-gray-700">{step.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
