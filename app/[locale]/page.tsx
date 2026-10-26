import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { PersonJsonLd } from "@/components/person-json-ld";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <PersonJsonLd />
    </>
  );
}
