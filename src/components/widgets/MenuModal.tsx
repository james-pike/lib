import { component$, useSignal } from "@builder.io/qwik";
import { Modal } from "../ui/Modal";
import { Button, buttonVariants } from "../ui/Button";
import { LuX, LuArrowLeft, LuChevronRight } from "@qwikest/icons/lucide";
import { cn } from "@qwik-ui/utils";
import { Logo } from "../common/Logo";
import { Badge } from "../ui/Badge";
import IconHamburger from "../icons/IconHamburger";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const show = useSignal(false);
  const isServicesSection = useSignal(false);
  const location = useLocation();

  // Menu items array structure
  const menuItems = [
    { title: "Home", href: "/", badge: null },
    { title: "Our Story", href: "/about/", badge: null },
    { 
      title: "Portfolio", 
      href: "/gallery/", 
      badge: <Badge class="absolute -top-0.1 left-14.5 bg-primary-300 text-white text-xs px-1 py-0 rounded">New</Badge> 
    },
    { 
      title: "Services", 
      href: "#",
      hasSubmenu: true,
      subitems: [
        { title: "Web Design", href: "/services/web-design" },
        { title: "Development", href: "/services/development" },
        { title: "SEO", href: "/services/seo" }
      ]
    },
    { title: "Technology", href: "/technology/", badge: null },
    { title: "FAQ", href: "/faq/", badge: null },
    { title: "Contact Us", href: "/contact/", badge: null }
  ];

  // Get services subitems safely
  const servicesItem = menuItems.find(item => item.hasSubmenu);
  const servicesSubitems = servicesItem?.subitems ?? [];

  return (
    <>
      <Modal.Root bind:show={show}>
        <div class="flex items-center hover:bg-primary-100 dark:hover:bg-gray-700">
          <Modal.Trigger class=" rounded-sm p-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <IconHamburger class="w-8 h-8 md:w-5 md:h-5 md:inline-block" />
          </Modal.Trigger>
        </div>
        <Modal.Panel position={"left"} class="dark:bg-gray-950">
          {/* Header */}
          <div class="border-b-2 border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-1">
            <Modal.Title class="pt-1">
              <a href="/">
                <Logo />
              </a>
            </Modal.Title>
            <Modal.Description class="text-md font-medium px-2 py-1 text-gray-700 dark:text-gray-200">
              Add some sweetness to your day!
            </Modal.Description>
          </div>

          {/* Navigation Content */}
          <nav class="mt-0 space-y-4 bg-gray-100 dark:bg-gray-800">
            {isServicesSection.value ? (
              // Services Section
              <div class="flex flex-col h-full">
                <div class="flex items-center p-2">
                  <button
                    class="text-gray-700 dark:text-gray-200 hover:text-primary-600 p-2"
                    onClick$={() => (isServicesSection.value = false)}
                  >
                    <LuArrowLeft class="h-5 w-5" />
                  </button>
                  <h2 class="text-lg font-medium dark:text-gray-200 text-gray-700">Services</h2>
                </div>
                <ul class="flex flex-col gap-0 text-lg">
                  {servicesSubitems.map((subitem) => (
                    <li key={subitem.title}>
                      <a
                        href={subitem.href}
                        class={cn(
                          "block text-gray-700 dark:text-gray-200 hover:text-primary-600 p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200",
                          location.url.pathname === subitem.href && "bg-gray-200 dark:bg-gray-700 text-primary-600"
                        )}
                        onClick$={() => (show.value = false)}
                      >
                        {subitem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              // Main Menu
              <div>
                <ul class="flex flex-col gap-0 text-lg">
                  {menuItems.map((item) => (
                    <li key={item.title}>
                      {item.hasSubmenu ? (
                        <button
                          class={cn(
                            "block w-full text-left text-gray-700 dark:text-gray-200 hover:text-primary-600 p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200 flex items-center justify-between",
                            location.url.pathname.startsWith("/services/") && "bg-gray-100  text-primary-600"
                          )}
                          onClick$={() => (isServicesSection.value = true)}
                        >
                          <span>{item.title}</span>
                          <LuChevronRight class="h-5 w-5 text-gray-500 group-hover:text-primary-600" />
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          class={cn(
                            "block text-gray-700 dark:text-gray-200 hover:text-primary-600 p-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium transition-all duration-200 relative",
                            location.url.pathname === item.href && "bg-gray-200 dark:bg-gray-700 text-primary-600"
                          )}
                          onClick$={() => (show.value = false)}
                        >
                          {item.title}
                          {item.badge}
                        </a>
                      )}
                    </li>
                  ))}
                  <li class="p-2 px-3 pb-3 ">
                    <Button
                      look="primary"
                      onClick$={() => {
                        alert("Logged out!");
                        show.value = false;
                      }}
                      class="w-full text-left bg-primary-400 dark:bg-primary-600 text-white"
                    >
                      Order Online
                    </Button>
                  </li>
                </ul>
                
                <div class="bg-gray-100 dark:bg-gray-800 h-40 w-full flex items-center justify-center text-center p-3">
                  <div class="w-full h-full bg-primary-25 dark:bg-gray-700">
                    <h2 class="text-2xl font-bold text-gray-800">Warm Up Your Day!</h2>
                    <p class="text-lg text-gray-600 mt-1">Enjoy 15% off all lattes this week.</p>
                    <p class="text-sm text-primary-600 font-medium mt-2">Use code: LATTELOVE</p>
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* Close Button */}
          <Modal.Close
            class={cn(
              buttonVariants({ size: "icon", look: "link" }),
              "absolute right-4 top-4 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900"
            )}
            type="submit"
          >
            <LuX class="h-6 w-6" />
          </Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});