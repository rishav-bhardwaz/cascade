import {Container} from "@/components/Container";
import logoAmazon from "@/images/logos/amazon.svg";
import logoFlipkart from "@/images/logos/flipkart.svg";
import logoWalmart from "@/images/logos/walmart.svg";
import logoLinkedIn from "@/images/logos/linkedin.svg";
import logoPayPal from "@/images/logos/paypal.svg";
import logoMicrosoft from "@/images/logos/microsoft.svg";
import Image from "next/image";

export function SponsorsCollege(props: {sponsers: SponsorData[]}) {
  return (
    <section
      id="sponsors-college"
      className="relative overflow-hidden pt-20 sm:pt-28"
    >
      <Container>
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
          Our Sponsors
        </h2>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              {name: 'Amazon', logo: logoAmazon},
              {name: 'Flipkart', logo: logoFlipkart},
              {name: 'Walmart', logo: logoWalmart},
            ],
            [
              {name: 'LinkedIn', logo: logoLinkedIn},
              {name: 'PayPal', logo: logoPayPal},
              {name: 'Microsoft', logo: logoMicrosoft},
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized/>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}