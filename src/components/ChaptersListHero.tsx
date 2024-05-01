import { ChevronRightIcon } from '@heroicons/react/20/solid'

export function ChaptersListHero() {
  return (
    <div className="relative isolate px-6 my-14 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Want to Lead a Chapter?{' '}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true"/>
              Fill the Form <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our College Chapters
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Dive into our network of vibrant chapters across colleges, fostering innovation and collaboration within student communities.
          </p>
          {/* TODO: Add Search Bar here */}
          {/* TODO: Add Slider for colleges here */}
        </div>
      </div>
    </div>
  )
}
