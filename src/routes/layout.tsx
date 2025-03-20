import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";

import Footer from "~/components/sections/Footer";
import { inject } from "@vercel/analytics";
import Header from "~/components/sections/Header";


export default component$(() => {

  useVisibleTask$(() => {
    inject(); // Runs only on clsients side
  });


  return (
    <>
<div class="block sm:hidden">
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
      </div>
    </>
  );
});
