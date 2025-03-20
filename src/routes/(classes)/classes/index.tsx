import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Classes from "~/components/sections/Classes";





import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
     <Classes
        title="Character Types"
        subtitle="Wizard, Elf, Orc, Man, Dragon, and Dark Lord."
        highlight="Classes"
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
