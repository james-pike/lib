import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Checker from "~/components/widgets/Checker";
import { SITE } from "~/config.mjs";



export default component$(() => {
  return (
    <>
   <Checker/>
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
