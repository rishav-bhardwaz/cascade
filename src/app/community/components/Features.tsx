import {Container} from "@/components/Container";

const features = [
  {
    name: 'Search and Filter',
    description:
      'Users can search for NGOs based on various criteria such as location, cause area, size, and impact focus.',
  },
  {
    name: 'Detailed NGO Profiles',
    description:
      'Each NGO listed on the platform has a detailed profile providing information about its mission, programs, achievements, and ways to support or volunteer.',
  },
  {
    name: 'Volunteer Opportunities',
    description:
      'Users can explore volunteer opportunities offered by different NGOs, including details about roles, time commitments, and required skills.',
  },
]

export function Features() {
  return (
    <section
      id="features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32 bg-gray-900"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-100">
            Explore Our Community Features
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Unlock a world of opportunities with these powerful features and <br/>
            Elevate your college journey with our diverse range of offerings.
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
