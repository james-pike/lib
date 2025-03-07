import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import LogoClouds from "~/components/sections/LogoClouds";
import { Headline } from "~/components/ui/Headline";
import { SITE } from "~/config.mjs";





export default component$(() => {
  return (
    <>
     <div class="card">
      <div class="flex flex-col">
      <Headline title="Premium Web Design & Development" 
      subtitle="Transform your online presence with our custom web design and development services. 
      We help business create stunning, fast, and secure websites."
         classes={{
    title: "text-4.5xl" // Overrides the default "text-4xl md:text-5xl"
  }}>
      </Headline>
      <div class=" sm:max-w-md  grid grid-cols-1 pt-4 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-7xl">

      <a class="btn2 w-full py-2" href="/contact">Get A Quote

      </a>
      <a class="btn2 w-full py-2" href="/contact">Book A Consultation

</a>
</div>
      </div>
      </div>



<div class="h-1"></div>

<LogoClouds title="What Our Clients Say"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Reviews"
        items={[]} />


   

    {/* <ServicesX title="What We Do"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Services"
        items={[]} />
        

<Card0.Root class="mx-1.5 mb-1 ">
  <Card0.Content>
     <Hero/>
        </Card0.Content>
        </Card0.Root>

   
<Card2.Root class="mx-2">
  <Card2.Content>
      <Services title="What We Do"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Services"
        items={[]} />
        </Card2.Content>
        </Card2.Root>

      <Features
        highlight="Features"
        title="What you get with Qwind"
        subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."
        items={[
          {
            title: "Qwik + Tailwind CSS Integration",
            description:
              "A seamless integration between two great frameworks that offer high productivity, performance and versatility.",
            icon: IconBrandTailwind,
          },
          {
            title: "Ready-to-use Components",
            description:
              "Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...",
            icon: IconApps,
          },
          {
            title: "Best Practices",
            icon: IconRocket,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          },
          {
            title: "Excellent Page Speed",
            description:
              "Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.",
            icon: IconRocket,
          },
          {
            title: "Search Engine Optimization (SEO)",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
            icon: IconBrandGoogle,
          },
          {
            title: "Open to new ideas and contributions",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
            icon: IconBulb
          },
        ]}
      />

      

<Menu title="Gallery Of Past Work"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Portfolio"
        items={[]} />

<Reviews title="What Our Clients Say"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Reviews"
        items={[]} />



      <Steps title="Our Process"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="Steps To Success"
        items={[]} />

      

<Stats/>

     

      <FAQ title="Frequently Asked Questions"
        subtitle="Have questions about our café? Find answers to common inquiries below."
        highlight="FAQ"
        items={[
            {
              title: "What do I need to start?",
              icon: IconArrowDown,
              description:
                "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            },
            {
              title: "How to install the Qwik + Tailwind CSS template?",
              icon: IconArrowDown,
              description:
                "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.",
            },
            {
              title: "What's something that you don't understand?",
              icon: IconArrowDown,
              description:
                "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
            },
            {
              title: "What's an example of when you changed your mind?",
              icon: IconArrowDown,
              description:
                "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
            },
            {
              title: "What is something that you would like to try again?",
              icon: IconArrowDown,
              description:
                "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
            },
            {
              title: "If you could only ask one question to each person you meet, what would that question be?",
              icon: IconArrowDown,
              description:
                "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
            },
          ]}/>

       

       <Contact /> */}


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
