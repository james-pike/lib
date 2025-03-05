import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import IconTwitter from "~/components/icons/IconTwitter";
import IconInstagram from "~/components/icons/IconInstagram";
import IconFacebook from "~/components/icons/IconFacebook";
import IconTelegram from "../icons/IconTelegram";

export default component$(() => {
  const isVisible = useSignal(false);

  useVisibleTask$(() => {
    isVisible.value = true;
  });

  const links = [
    {
      title: "Menu",
      items: [
        { title: "Breakfast", href: "/menu#breakfast" },
        { title: "Lunch", href: "/menu#lunch" },
        { title: "Pastries", href: "/menu#pastries" },
       
      ],
    },
    {
      title: "Visit",
      items: [
        { title: "Hours", href: "/contact#hours" },
        { title: "Location", href: "/contact#location" },
        { title: "Contact Us", href: "/contact" },
      ],
    },
    // {
    //   title: "About",
    //   items: [
    //     { title: "Our Story", href: "/about#story" },
    //     { title: "Team", href: "/about#team" },
    //     { title: "Sustainability", href: "/about#sustainability" },
    //   ],
    // },
    // {
    //   title: "Connect",
    //   items: [
    //     { title: "Events", href: "/events" },
    //     { title: "Newsletter", href: "/newsletter" },
    //     { title: "Gift Cards", href: "/gift-cards" },
    //   ],
    // },
  ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "https://twitter.com/lapetitebistro" },
    { label: "Instagram", icon: IconInstagram, href: "https://instagram.com/lapetitebistro" },
    { label: "Facebook", icon: IconFacebook, href: "https://facebook.com/lapetitebistro" },
    { label: "Telegram", icon: IconTelegram, href: "tel:+16138988063" },
  ];

  return (
    
      <footer class="border-t border-gray-200 dark:border-slate-800 rounded-none py-10 px-4 sm:px-6">
        <div class="max-w-7xl mx-auto">
          {/* Top Section */}
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Brand Column */}
            <div class="md:col-span-4">
              <Link
                class={`inline-block text-2xl font-bold transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                href="/"
              >
                Webdev.ca
              </Link>
              <p class="mt-4 text-sm leading-relaxed">
              Transform your online presence with our custom web design and development services. We help business create stunning, fast, and secure websites.     

              </p>
              <div class="mt-6 flex space-x-4">
                {social.map(({ label, href, icon: Icon }, index) => (
                  <Link
                    key={index}
                    class={` hover:text-primary-800 dark:hover:text-primary-100 p-2 rounded-none bg-primary-100/50 dark:bg-gray-700/50 transition-all duration-300 transform hover:scale-110 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={label}
                    title={label}
                    href={href}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div class="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {links.map(({ title, items }, index) => (
                <div key={index}>
                  <h3 class={`text-lg font-semibold mb-4 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {title}
                  </h3>
                  <ul class="space-y-1"> {/* Changed from space-y-3 */}
                    {items.map(({ title, href }, idx) => (
                      <li
                        key={idx}
                        class={`transition-opacity duration-500 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${(index * 100) + (idx * 50)}ms` }}
                      >
                        <Link
                          class="hover:text-primary-800 dark:hover:text-primary-100 hover:underline text-sm"
                          href={href}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div class="border-t border-gray-200 -mt-2 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <div class="mb-4 md:mb-0">
              © {new Date().getFullYear()} Webdev.ca · All rights reserved
            </div>
            <div class="flex space-x-6">
              <Link href="/privacy" class="hover:text-primary-800 dark:hover:text-primary-100 hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" class="hover:text-primary-800 dark:hover:text-primary-100 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <style>
          {`
            /* Custom animation for fade-in */
            .animate-fade-in {
              animation: fadeIn 0.5s ease-out forwards;
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            /* Ensure smooth hover effects */
            footer a {
              transition-property: color, transform, text-decoration;
              transition-duration: 0.3s;
              transition-timing-function: ease-in-out;
            }
          `}
        </style>
      </footer>
  
  );
});