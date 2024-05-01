'use client';

import { Container } from '@/components/Container'
import { Disclosure } from "@headlessui/react"
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { FaqInterface, FaqsPropsInterface } from "@/model/FAQInterface"

export function Faqs({ questions }: FaqsPropsInterface) {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:rishav76000@gmail.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {questions.map((faq: FaqInterface) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({open}) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                      {open ? (
                          <MinusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                      ) : (
                          <PlusSmallIcon className="h-6 w-6" aria-hidden="true"/>
                      )}
                    </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </Container>
    </section>
  )
}
