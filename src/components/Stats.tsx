import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { BuildingLibraryIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'
import {Container} from "@/components/Container";

const stats = [
  { id: 1, name: 'Community Members', stat: '100', icon: UsersIcon, change: '22', changeType: 'increase' },
  { id: 2, name: 'NGOs Across Bhopal', stat: '32', icon: BuildingLibraryIcon, change: '2', changeType: 'increase' },
  { id: 3, name: 'NGOs Working With Us', stat: '14', icon: CalendarDaysIcon, change: '6', changeType: 'increase' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Stats() {
  return (
    <section
      id="stats"
      aria-labelledby="stats"
      className="pb-16 pt-20 sm:pb-12 sm:pt-16 bg-gray-900"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Our Community in Numbers
          </h2>
          <p className="mt-2 mb-16 text-lg text-gray-300">
            Explore our community&apos;s impact and growth through these key statistics.
          </p>
        </div>
        <div>
          <dl
            className="mt-5 mb-8 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((item) => (
              <div key={item.name} className="px-4 py-5 sm:p-6">
                <dt className="text-base font-normal text-gray-900">
                  <div className="absolute rounded-md bg-blue-500 p-3">
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                  </div>
                  <p className="ml-16 truncate">{item.name}</p>
                </dt>
                <dd className="ml-16 mt-1 flex items-baseline justify-between md:block lg:flex">
                  <div className="flex items-baseline text-2xl font-semibold text-blue-600">
                    {item.stat}
                  </div>

                  <div
                    className={classNames(
                      item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                      'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                    )}
                  >
                    {item.changeType === 'increase' ? (
                      <ArrowUpIcon
                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowDownIcon
                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                        aria-hidden="true"
                      />
                    )}

                    <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                    {item.change}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
