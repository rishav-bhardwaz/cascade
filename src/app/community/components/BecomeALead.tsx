import {Container} from "@/components/Container";

const steps = [
  {
    name: 'Step 1',
    description:
      'Users can search for NGOs based on various criteria such as location, cause area, size, and impact focus.',
  },
  {
    name: 'Step 2',
    description:
      'Your data is protected with top-notch encryption.',
  },
  {
    name: 'Step 3',
    description:
      'Monitor and compare your advancement effortlessly.',
  },
]

export function BecomeALead() {
  return (
    <section
      id="features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Explore Our Community Features
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Unlock a world of opportunities with these powerful features and <br/>
            Elevate your college journey with our diverse range of offerings.
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
              <h3 className="font-semibold text-gray-900">
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
