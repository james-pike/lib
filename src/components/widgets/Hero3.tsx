import { component$ } from '@builder.io/qwik';
import { Carousel } from 'flowbite-qwik';

export default component$(() => {
  return (
    <section class="relative w-full !h-[70vh] text-white overflow-hidden">
      <Carousel noControls class="w-full !h-full">
        <Carousel.Slide class="w-full !h-full flex">
          <img class="flex-1 w-full !h-full object-cover" src="/images/hero1.webp" alt="Freshly Brewed Coffee" />
        </Carousel.Slide>
        <Carousel.Slide class="w-full !h-full flex">
          <img class="flex-1 w-full !h-full object-cover" src="/images/hero2.webp" alt="Cozy Cafe Ambience" />
        </Carousel.Slide>
      </Carousel>
      <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-center p-4">
        <h1 class="text-5xl md:text-7xl mb-4 font-bold font-heading">Welcome to Aroma Cafe</h1>
        <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">

                Transform your online presence with our custom web design and development services. We help business create stunning, fast, and secure websites.              </p>

   <div class="sm:max-w-md md:max-w-lg lg:max-w-xl m-auto grid grid-cols-1 md:grid-cols-2 gap-4">
  <a href="#">
    <div class="flex justify-center">
      <button class="btn w-full max-w-[400px] motion-preset-slide-right text-white bg-primary-700 hover:bg-primary-300 dark:bg-primary-700 py-2 rounded-md">
        Explore Menu
      </button>
    </div>
  </a>
  <a href="/contact">
    <div class="flex justify-center">
      <button class="btn w-full max-w-[400px] bg-primary-200 hover:bg-primary-300 dark:bg-primary-600 py-2 rounded-md">
        Order Online
      </button>
    </div>
  </a>
</div>

            </div>
      </div>
    </section>
  );
});
