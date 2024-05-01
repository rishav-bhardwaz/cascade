import { Container } from '@/components/Container'
import {
  FingerPrintIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'

const items = [
  {
    title: 'Web Development',
    icon: ComputerDesktopIcon,
    background: 'bg-pink-500',
  },
  {
    title: 'Data Structures & Algorithms',
    icon: CodeBracketIcon,
    background: 'bg-yellow-500',
  },
  {
    title: 'App Development',
    icon: DevicePhoneMobileIcon,
    background: 'bg-green-500',
  },
  {
    title: 'Cyber Security',
    icon: FingerPrintIcon,
    background: 'bg-blue-500',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Domains() {
  return (
    <Container>
      <div className="py-16 text-center lg:px-24 sm:px-24">
        <h2 className="font-display font-bold text-3xl tracking-tight text-gray-900 sm:text-4xl">
          Our Domains
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Get Expert Mentorship in the domain of your choice.
        </p>
        <ul role="list" className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2">
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className="flow-root">
              <div
                className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                <div
                  className={classNames(
                    item.background,
                    'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                  )}
                >
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true"/>
                      <span>{item.title}</span>
                    </a>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
