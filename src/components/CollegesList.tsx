import { Container } from "@/components/Container";
import { chaptersList } from "@/data/data"
import Image from "next/image";
import Link from "next/link";

export function CollegesList() {
  return (
    <Container>
      <div>
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {chaptersList.map((chapter) => (
            // <li
            //   key={chapter.name}
            //   className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow cursor-pointer hover:bg-gray-100"
            // >
            <li
              key={chapter.name}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
            >
              {/*<Link href={`/chapters/${chapter.redirect}`}>*/}
              <div className="flex flex-1 flex-col p-8">
                <Image
                  className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                  src={chapter.imageUrl || "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt=""
                  width={158}
                  height={58}
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{chapter.name}</h3>
                <dl className="mt-1 flex flex-grow flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-sm text-gray-500">{chapter.location}</dd>
                  <dt className="sr-only">Role</dt>

                  <dd className="mt-3">
                    {chapter.role && (
                      <span
                        className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      {chapter.role}
                      </span>
                    )}
                  </dd>
                </dl>
              </div>
              {/*</Link>*/}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}