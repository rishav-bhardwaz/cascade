'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'A Gateway to Innovation',
    body: 'Cascade opens doors for students to explore innovation through coding and collaboration effortlessly.',
    author: 'Harsh Singh',
    rating: 5,
  },
  {
    title: 'Empowerment at Its Best',
    body: 'NGO Explorer has been a game-changer for me in my quest to support causes that matter. With their user-friendly interface and comprehensive database, I was able to find and connect with an NGO dedicated to womens rights and education in my area. ',
    author: 'Rishav Bhardwaz',
    rating: 5,
  },
  {
    title: 'Innovate, Collaborate, Create',
    body: 'As a passionate advocate for gender equality, Ive always struggled to find local NGOs aligned with my values. Thats until I discovered NGO Explorer!',
    author: 'Asmi Vats',
    rating: 5,
  },
  {
    title: 'A LifeSaver',
    body: 'NGO Explorer has been a lifesaver for me! As a busy professional, I didnt have the time to search endlessly for NGOs supporting womens rights and education',
    author: 'Anushrav Rathi',
    rating: 5,
  },
  {
    title: 'Fueling Tomorrow\'s Leaders',
    body: 'NGO Explorers easy-to-use search function and filter options, I quickly found an organization that resonated with me.',
    author: 'Ayush Mankar',
    rating: 5,
  },
  {
    title: 'Transformative Learning Experience',
    body: 'Thanks to NGO Explorer, Ive found my perfect match and am proud to be a part of their impactful initiatives.',
    author: 'Srishti Rana',
    rating: 5,
  },
  {
    title: 'Unlock Your Potential',
    body: 'I was able to find and connect with an NGO dedicated to womens rights and education in my area.',
    author: 'Ambika Sharma',
    rating: 5,
  },
  {
    title: 'Fueling Tomorrow\'s Leaders',
    body: 'NGO Explorers easy-to-use search function and filter options, I quickly found an organization that resonated with me.',
    author: 'Ayush Mankar',
    rating: 5,
  },
  {
    title: 'Innovate, Collaborate, Create',
    body: 'As a passionate advocate for gender equality, Ive always struggled to find local NGOs aligned with my values. Thats until I discovered NGO Explorer!',
    author: 'Asmi Vats',
    rating: 5,
  },
  {
    title: 'A LifeSaver',
    body: 'NGO Explorer has been a lifesaver for me! As a busy professional, I didnt have the time to search endlessly for NGOs supporting womens rights and education',
    author: 'Anushrav Rathi',
    rating: 5,
  },
  // {
  //   title: 'You need this app.',
  //   body: 'description',
  //   author: 'Person',
  //   rating: 5,
  // },
  // {
  //   title: 'You need this app.',
  //   body: 'description',
  //   author: 'Person',
  //   rating: 5,
  // },
  // {
  //   title: 'You need this app.',
  //   body: 'description',
  //   author: 'Person',
  //   rating: 5,
  // },
  // {
  //   title: 'You need this app.',
  //   body: 'description',
  //   author: 'Person',
  //   rating: 5,
  // },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-yellow-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          What Our Members Say
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Discover how Cascade Community has transformed the college experience for students across the globe.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
