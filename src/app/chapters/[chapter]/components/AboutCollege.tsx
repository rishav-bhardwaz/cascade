import {CircleBackground} from "@/components/CircleBackground";
import {Container} from "@/components/Container";
import {PlayStoreLink} from "@/components/PlayStoreLink";

export function AboutCollege(props: {description: string}) {
  return (
    <section
      id="about-college"
      className="relative overflow-hidden pt-20 sm:pt-28"
    >
      <Container className="relative">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          About
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          { props.description }
        </p>
      </Container>
    </section>
  )
}