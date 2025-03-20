import { component$, PropsOf } from '@builder.io/qwik';
import { Carousel, Progress } from '@qwik-ui/headless';

export const CarouselProgress = component$((props: PropsOf<typeof Progress.Root>) => {
  return (
    <Progress.Root {...props} class="progress" style={{ marginBottom: '2rem' }}>
      <Progress.Indicator class="progress-indicator bg-blue-50" />
    </Progress.Root>
  );
});

export default component$(() => {
  const services = [
    {
      title: 'Wizard',
      description: 'Building responsive and modern web applications',
      image: '/images/wizard.jpg'
    },
    {
      title: 'Elf',
      description: 'Creating native and cross-platform mobile solutions',
      image: '/images/warrior.png'
    },
    {
      title: 'Dwarf',
      description: 'Designing intuitive and beautiful user interfaces',
      image: '/images/elf.png'
    },
    {
      title: 'Dragon',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.webp'
    },
    {
      title: 'Cloud Services2',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.webp'
    },
    {
      title: 'Cloud Services3',
      description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.webp'
    }
  ];

  return (
    <>

      <Carousel.Root class="carousel-root bg-gray-50 dark:bg-gray-850 border-gray-300" slidesPerView={1.2} gap={25} rewind sensitivity={{
        touch: 1.75,
      }}>
        <Carousel.Scroller class="carousel-scroller">
          {services.map((service) => (
            <Carousel.Slide
              key={service.title}
              class="carousel-slide min-h-60 flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                class="w-full h-50 object-cover rounded-none"
              />
              <div class="service-info p-2 bg-gray-200 dark:bg-gray-800 flex-1 overflow-hidden">
                <h1 class="service-title text-lg font-bold truncate">{service.title}</h1>
                <p class="service-description text-sm line-clamp-2">{service.description}</p>
              </div>
            </Carousel.Slide>
          ))}
        </Carousel.Scroller>
        <div class="flex justify-between items-end">
          <Carousel.Pagination class="carousel-pagination justify-start -mt-1">
            {services.map((service) => (
              <Carousel.Bullet
                key={service.title}
                class="carousel-pagination-bullet w-[10px] h-[10px] bg-[#ccc] rounded-sm transition-all duration-300 data-[active]:!bg-primary data-[active]:scale-125"
              />
            ))}
          </Carousel.Pagination>
          <a
            href="/classes"
            class="text-sm font-medium hover:underline"
            style={{ transform: 'translateY(5px)' }} // Fine-tune downward shift
          >
            Browse All Classes -&gt;
          </a>
        </div>
      </Carousel.Root>



    </>
  );
});