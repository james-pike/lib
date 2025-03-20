import { component$ } from "@builder.io/qwik";
import { routeLoader$, StaticGenerateHandler } from "@builder.io/qwik-city";

interface Service {
  title: string;
  description: string;
  details: string;
  image: string;
  alt: string;
  slug: string;
}

const services: Service[] = [
  {
    title: "Wizard",
    description: "Wizard Description",
    details: "Class metadata here",
    image: "/images/wizard.jpg",
    alt: "Exhibit Photography",
    
    slug: "wizard" // Added unique slug for routing
  },
  {
    title: "Elf",
    description: "Accurate reproductions for prints, publications, and digital archives.",
    details: "Ensure every detail is captured for stunning, true-to-life reproductions.",
    image: "/images/hero1.webp",
    alt: "Reproduction Services",
   
    slug: "reproduction-services"
  },
  {
    title: "Orc",
    description: "Capture the essence of fine art with our specialized photography services.",
    details: "Highlight textures, colors, and emotions in your artwork.",
    image: "/images/hero1.webp",
    alt: "Fine Art Photography",
    
    slug: "fine-art-photography"
  },
  {
    title: "Warrior",
    description: "Preserve and digitize your valuable artwork or photographs.",
    details: "Convert physical assets into high-quality digital formats.",
    image: "/images/hero1.webp",
    alt: "Digitization Services",
   
    slug: "digitization-services"
  },
  {
    title: "Dragon",
    description: "Professional photography using mobile devices for quick turnarounds.",
    details: "Creative and fast solutions for on-the-go photography needs.",
    image: "/images/hero1.webp",
    alt: "Mobile Photography",
   
    slug: "mobile-photography"
  },
  {
    title: "Dark Lord",
    description: "Capture unforgettable moments with our event photography expertise.",
    details: "Ensure every memory is preserved with beautiful, candid shots.",
    image: "/images/hero1.webp",
    alt: "Event Photography",
    
    slug: "event-photography"
  },
  ];

export const useService = routeLoader$<Service | null>(({ params }) => {
  const service = services.find(s => s.slug === params.slug);
  return service || null;
});

export default component$(() => {
  const service = useService();
  if (!service.value) {
    return (
      <div class="max-w-screen-xl mx-auto px-4 py-16 text-center">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Service Not Found</h1>
        <p class="text-gray-600 dark:text-gray-400">The requested service could not be found.</p>
      </div>
    );
  }

  return (
    <section class="max-w-screen-xl mx-auto px-4 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <div class="flex justify-center md:justify-start">
          <img
            src={service.value.image}
            alt={service.value.alt}
            width={500}
            height={300}
            class="w-full max-w-md rounded-none shadow-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div class="space-y-6 pb-8">
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {service.value.title}
          </h1>
          <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            {service.value.description}
          </p>
          <p class="text-base md:text-lg text-gray-600 dark:text-gray-400">
            {service.value.details}
          </p>
          {/* Optional Call-to-Action */}
      
        </div>
      </div>
    </section>
  );
});

// Pre-render all slugs
export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: services.map(service => ({ slug: service.slug })),
  };
};