import {Container} from "@/components/Container";

const features = [
  {
    name: '1:1 Sessions',
    description:
      'Never question your progress with frequent 1:1 sessions.',
  },
  {
    name: 'Regular Follow-Ups',
    description:
      'Stay motivated and consistent with regular follow-ups.',
  },
  {
    name: 'Tasks & Resources',
    description:
      'Avoid wasting time on irrelevant tasks and resources.',
  },
]

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features for building a portfolio"
      className="py-8 sm:py-32 bg-gray-900"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-100">
            Empower your career with Expert Guidance
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Empowering students to shape their future through personalized mentorship opportunities.
            Take charge of your journey towards success!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-800 p-8 hover:border-gray-200 transition duration-300 ease-in-out"
            >
              {/*<feature.icon className="h-8 w-8" />*/}
              <h3 className="font-semibold text-gray-100">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-300">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
