import { component$ } from '@builder.io/qwik';
import { Card } from "../ui/Card";
import { CardHeadline } from "../ui/CardHeadline";
import IconStar from '../icons/IconStar';
import { Image } from "@unpic/qwik";


interface Props {
    title?: any;
    subtitle?: any;
    highlight?: any;
    classes?: any;
}

export default component$((props: Props) => {
    const { title = "", subtitle = "", highlight = "", classes = {} } = props;

      const stepsData = {
        title: "Our Process: From Idea to Finished Print",
        items: [
          {
            title: "Step 1: Request a Quote",
            description:
              "Start by requesting a personalized quote for your printing needs. Share your project details, and we'll provide you with a clear and competitive estimate.",
            icon: IconStar,
          },
          {
            title: "Step 2: Custom Design Assistance",
            description:
              "Our expert design team can help you refine your artwork or create a custom design that meets your vision. We ensure your project is print-ready and perfect for production.",
            icon: IconStar,
          },
          {
            title: "Step 3: High-Quality Printing",
            description:
              "Once approved, we bring your project to life using state-of-the-art printing technology. We guarantee vibrant colors, sharp details, and exceptional quality in every print.",
            icon: IconStar,
          },
          {
            title: "Step 4: Quality Check & Delivery",
            description:
              "Before your order leaves our shop, we conduct a thorough quality check to ensure perfection. Then, we pack and deliver your prints right to your doorstep, on time and in perfect condition.",
            icon: IconStar,
          },
        ],
        image: {
           src: "/images/hero1.webp",
          alt: "Steps to professional printing success",
        },
      };
    
      const { items, image } = stepsData;

    return (
        <section class="scroll-mt-16">
            <Card.Root>
                    <Card.Header class="relative">
                        <div class="absolute inset-y-0 right-[1%] items-center flex opacity-20 z-10 text-gray-500">
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 animate-[spin_1.5s_ease-in-out]">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7848 0.449982C13.8239 0.449982 14.7167 1.16546 14.9122 2.15495L14.9991 2.59495C15.3408 4.32442 17.1859 5.35722 18.9016 4.7794L19.3383 4.63233C20.3199 4.30175 21.4054 4.69358 21.9249 5.56605L22.7097 6.88386C23.2293 7.75636 23.0365 8.86366 22.2504 9.52253L21.9008 9.81555C20.5267 10.9672 20.5267 13.0328 21.9008 14.1844L22.2504 14.4774C23.0365 15.1363 23.2293 16.2436 22.7097 17.1161L21.925 18.4339C21.4054 19.3064 20.3199 19.6982 19.3382 19.3676L18.9017 19.2205C17.1859 18.6426 15.3408 19.6754 14.9991 21.405L14.9122 21.845C14.7167 22.8345 13.8239 23.55 12.7848 23.55H11.2152C10.1761 23.55 9.28331 22.8345 9.08781 21.8451L9.00082 21.4048C8.65909 19.6754 6.81395 18.6426 5.09822 19.2205L4.66179 19.3675C3.68016 19.6982 2.59465 19.3063 2.07505 18.4338L1.2903 17.1161C0.770719 16.2436 0.963446 15.1363 1.74956 14.4774L2.09922 14.1844C3.47324 13.0327 3.47324 10.9672 2.09922 9.8156L1.74956 9.52254C0.963446 8.86366 0.77072 7.75638 1.2903 6.8839L2.07508 5.56608C2.59466 4.69359 3.68014 4.30176 4.66176 4.63236L5.09831 4.77939C6.81401 5.35722 8.65909 4.32449 9.00082 2.59506L9.0878 2.15487C9.28331 1.16542 10.176 0.449982 11.2152 0.449982H12.7848ZM12 15.3C13.8225 15.3 15.3 13.8225 15.3 12C15.3 10.1774 13.8225 8.69998 12 8.69998C10.1774 8.69998 8.69997 10.1774 8.69997 12C8.69997 13.8225 10.1774 15.3 12 15.3Z"></path>
                                </g>
                            </svg>
                        </div>
                        <CardHeadline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} align="left" />
                    </Card.Header>
                    <Card.Content>
<div class="motion-group md:col-start-2 md:row-start-1 order-2">
          {items.map(({ title, description, icon: Icon }, index) => (
            <div
              key={`item-steps-${index}`}
              class={`flex opacity-0 intersect-once intersect:opacity-100 intersect:motion-preset-slide-up motion-delay-[${index * 150}ms]`}
            >
              <div class="mr-4 flex flex-col items-center">
                <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                  {Icon ? (
                    <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                  ) : (
                    <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                  )}
                </div>
                {index !== items.length - 1 && (
                  <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                )}
              </div>
              <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                {title && (
                  <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">
                    {title}
                  </p>
                )}
                {description && (
                  <p class="text-gray-600 dark:text-slate-400">{description}</p>
                )}
              </div>
            </div>
          ))}
        </div>   
           {typeof image !== "undefined" && (
                  <div class="md:hidden order-3">
                    <Image
                      layout="constrained"
                       src="/images/hero1.webp"
                      width={532}
                      height={504}
                      alt={image.alt}
                      class="w-full rounded-md bg-gray-500 object-cover object-top shadow-lg dark:bg-slate-700 sm:h-[400px]"
                      breakpoints={[320, 480, 640, 768, 1024]}
                    />
                  </div>
                )}
                                 </Card.Content>
            </Card.Root>
        </section>
    );
});






