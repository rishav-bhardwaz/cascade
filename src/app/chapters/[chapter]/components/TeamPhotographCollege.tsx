import Image from "next/image";
import {Container} from "@/components/Container";

export function TeamPhotographCollege(props: {teamPhotographUrl: string}) {
  return (
    <section
      id="team-photograph-college"
      className="relative overflow-hidden py-20 sm:py-28 xl:mx-8"
    >
      <Image
        fill={true}
        src={props.teamPhotographUrl}
        alt=""
        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </section>
  )
}