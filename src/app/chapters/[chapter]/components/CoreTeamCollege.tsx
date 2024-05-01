import {Container} from "@/components/Container";
import Image from "next/image";

export function CoreTeamCollege(props: {coreTeam: CoreTeamData[]}) {
  return (
    <section
      id="core-team-college"
      className="relative overflow-hidden pt-20 sm:pt-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Our Team
          </h2>
          {/*<p className="mt-6 text-lg leading-8 text-gray-600">*/}
          {/*  Team Description*/}
          {/*</p>*/}
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {props.coreTeam.map((member) => (
            <li key={member.name}>
              <Image
                width={158}
                height={58}
                className="mx-auto h-24 w-24 rounded-full"
                src={member.imageUrl || "https://images.unsplash.com/photo-1532202802379-df93d543bac3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmUlMjBjYXJ0b29ufGVufDB8fDB8fHww"}
                alt=""
              />
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{member.name}</h3>
              <p className="text-sm leading-6 text-gray-600">{member.role}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}