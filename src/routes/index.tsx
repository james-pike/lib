import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/sections/About";
import Contact from "~/components/sections/Contact";
import FAQ from "~/components/sections/FAQ";
import Process from "~/components/sections/Process";
import Services from "~/components/sections/Services";
import { Card } from "~/components/ui/Card";
import { HeroHeadline } from "~/components/ui/HeroHeadline";
import { SITE } from "~/config.mjs";



export default component$(() => {
  return (
    <>
    {/* <Hero/> */}
      <div class="flex flex-col gap-3">

<Card.Root class="py-8 px-4">
<div class="flex flex-col">
            <HeroHeadline title="KasLords of the BlockDag"
              subtitle="Transform your online presence with our custom web design and development services."
              classes={{
                title: "text-4.5xl" // Overrides the default "text-4xl md:text-5xl"
              }}>
            </HeroHeadline>
            <div class=" sm:max-w-md  grid grid-cols-1 pt-4 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">

              <a class="btn2" href="https://www.kaspa.com/nft/collections/TOXIK" target="_blank">Mint KasLords

              </a>
              <a class="btn2" href="https://t.me/+jETQ93SFFyI2YTk5" target="_blank">Join Community

              </a>
            </div>
          </div>
</Card.Root>



        <Services title="Character Classes"
          subtitle="Six unique Kaslord character types."
          highlight="Classes"
        />

          <About  
                  title="About Kaslords"
                  // subtitle="Have questions about our café? Find answers to common inquiries below."
                  highlight="Story"
                  subtitle="Story of the six Kaslords. Text could be LOTR style "
        
                   />

{/* <Items title="Item Rarity Guide"
          subtitle="Browse inventory items and rarities."
          highlight="Items"
        /> */}


    

<Process title="KasLord Roadmap"
          subtitle="Follow the journey ahead."
          highlight="Roadmap"
        />



        <FAQ title="Frequently Asked Questions"
          subtitle="Find answers to common inquiries."
          highlight="FAQs"
        />


        <Contact title="Request A Quote"
          subtitle="Get in touch for a consultation."
          highlight="Contact Us"
        />


      </div>




    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
