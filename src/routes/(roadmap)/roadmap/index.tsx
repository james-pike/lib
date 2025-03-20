import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Process from "~/components/sections/Process";




import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
    <Process title="KasLords Roadmap"
              subtitle="Follow the journey ahead."
              highlight="Roadmap"
            />
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
