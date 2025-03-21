import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Inventory from "~/components/sections/Inventory";
import { SITE } from "~/config.mjs";



export default component$(() => {
  return (
    <>
<Inventory title="Inventory Items"
        highlight="Inventory"
       
        
    
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
