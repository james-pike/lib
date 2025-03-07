import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import About from "~/components/sections/About";




import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
     <About  
          title="What We Do"
          // subtitle="Have questions about our café? Find answers to common inquiries below."
          highlight="Services"
          items={[]} />
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
