import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import FAQ from "~/components/sections/FAQ";
import { SITE } from "~/config.mjs";
import { qwikSerialized } from "~/utils/qwikSerialized";

const IconArrowDown = qwikSerialized(() => import("~/components/icons/IconArrowDownRight"));


export default component$(() => {
  return (
    <>
<FAQ title="Frequently Asked Questions"
        subtitle="Find answers to common inquiries about our cafe."
        highlight="FAQs"
        items={[
          {
            title: "Do you have vegetarian or gluten-free options?",
            icon: IconArrowDown,
            description:
              "Yes! We offer a variety of vegetarian, vegan, and gluten-free options. Just ask our staff for recommendations!",
          },
      
          {
            title: "Do you offer takeout?",
            icon: IconArrowDown,
            description:
              "Yes, all of our food and drinks are available for takeout. Just let us know when you place your order, and we’ll pack it up for you.",
          },
          {
            title: "Can I bring my laptop and work from the café?",
            icon: IconArrowDown,
            description:
              "Of course! We have free Wi-Fi and plenty of outlets, making our café a great spot for remote work or studying.",
          },
          {
            title: "Do you take reservations?",
            icon: IconArrowDown,
            description:
              "We operate mostly on a walk-in basis, but for larger groups or special occasions, feel free to give us a call to arrange a reservation.",
          },
          {
            title: "Is there outdoor seating available?",
            icon: IconArrowDown,
            description:
              "Absolutely! Enjoy your coffee or meal in our cozy outdoor seating area, perfect for sunny days and fresh air.",
          },
          {
            title: "What are your opening hours?",
            icon: IconArrowDown,
            description:
              "We’re open daily from 7 AM to 8 PM. Join us for a morning coffee, a relaxed lunch, or an evening treat!",
          },
          {
            title: "Do you have vegetarian or gluten-free options?",
            icon: IconArrowDown,
            description:
              "Yes! We offer a variety of vegetarian, vegan, and gluten-free options. Just ask our staff for recommendations!",
          },
      
          {
            title: "Do you offer takeout?",
            icon: IconArrowDown,
            description:
              "Yes, all of our food and drinks are available for takeout. Just let us know when you place your order, and we’ll pack it up for you.",
          },
        
    
        ]}/>
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
