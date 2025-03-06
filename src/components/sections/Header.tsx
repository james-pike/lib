import { component$, useStore } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";
import IconChevronDown from "../icons/IconChevronDown";
import { Logo } from "../common/Logo";
import MenuModal from "../widgets/MenuModal";
import ToggleTheme from "../common/ToggleTheme";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
    isMenuExpanded: false,
  });

  // Add signal for banner visibility
  // const isBannerVisible = useSignal(() => {
  //   // Check session storage on initial load
  //   if (typeof window !== 'undefined') {
  //     return sessionStorage.getItem('bannerClosed') !== 'true';
  //   }
  //   return true;
  // });

  const { menu } = useContent();
  const location = useLocation();

  // Function to handle banner close
  // const handleCloseBanner = $(() => {
  //   isBannerVisible.value = false;
  //   if (typeof window !== 'undefined') {
  //     sessionStorage.setItem('bannerClosed', 'true');
  //   }
  // });

  return (
    <header
      id="header"
      class={`sticky top-0 z-40 bg-background max-w-7xl dark:bg-background flex-none mx-auto w-full border-b-2 border-gray-200 dark:border-gray-600 transition-[opacity] ease-in-out ${store.isScrolling
          ? "md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-primary-50 dark:bg-background"
          : ""
        }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="absolute inset-0 pointer-events-none"></div>

      {/* {isBannerVisible.value && (
        <div class="w-full h-6 bg-primary-400 px-4 md:px-7 mx-auto text-white flex justify-between items-center max-w-7xl relative">
          <div>
            <p>Today's Specials: Freshly brewed, just for you!</p>
          </div>
          <div id="test" class="flex gap-4 sm:flex hidden sm:block">
            <a
              class="text-gray-50 px-3 dark:text-gray-400 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm inline-flex items-center"
              href="tel:+16132188063"
            >
              <IconTelegram />
              <p class="pl-1">(613) 218-8063</p>
            </a>
            <p class="text-gray-50">|</p>
            <a
              class="text-gray-50 px-3 dark:text-gray-400 hover:bg-primary-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm inline-flex items-center"
              href="mailto:info@webdev.ca"
            >
              <IconTwitter />
              <p class="pl-1">info@webdev.ca</p>
            </a>
          </div>


          <button
            class="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 focus:outline-none"
            onClick$={handleCloseBanner}
            aria-label="Close banner"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )} */}

      <div class="relative text-default py-1 px-3 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          

          <a href="/contact"
              class="p-0 bg-gray-100 flex items-center h-full dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
                     <Logo />
                     </a>
          <div class="flex items-center md:hidden gap-1">
          <a href="/contact"
              class="p-0 bg-gray-100 flex items-center h-full dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <ToggleTheme iconClass="w-6 h-6" />               </a>

            <a href="/contact"
              class="p-2 bg-gray-100 flex items-center h-full dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
              Get A Quote                </a>
            {/* <a
              class="btn btn-primary bg-primary hover:bg-primary-400 ml-2 py-2.5 px-2.5 md:px-6 font-semibold shadow-none text-sm w-auto"
            >
              Get A Quote
            </a> */}
            <MenuModal />
          </div>
        </div>

        <nav
          class={`
    items-center w-full md:w-auto 
    text-default 
    overflow-y-auto overflow-x-hidden 
    md:overflow-y-visible md:overflow-x-auto 
    md:mx-5 
    absolute md:static 
    left-0 
    top-full 
    dark:bg-gray-900
    shadow-xl md:shadow-none 
    border-primary-200 dark:border-primary-800 
    transition-all duration-300 ease-in-out 
    z-40 
    ${store.isMenuExpanded
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 md:max-h-none md:opacity-100 md:translate-y-0 md:flex"
            }
  `}
          aria-label="Main navigation"
        >
          {menu && menu.items ? (
            <ul
              class="
        flex flex-col md:flex-row 
        md:self-center w-full md:w-auto 
        text-xl md:text-[0.9375rem] 
        tracking-[0.01rem] font-medium 
        py-1 px-4 md:p-0
        group // Keep group for parent-level hover detection
      "
            >
              {menu.items.map(({ text, href, items }, key) => {
                const isActive = location.url.pathname === href;
                return (
                  <li
                    key={key}
                    class={`
              ${items?.length ? "dropdown" : ""} 
              border-b border-primary-100 dark:border-primary-800 
              last:border-b-0 md:border-0
              group relative
            `}
                  >
                    {items?.length ? (
                      <>
                        <button
                          class="
                    flex items-center justify-between w-full md:w-auto 
                    text-primary-700 dark:text-primary-200 
                    hover:text-primary-500 dark:hover:text-primary-400 
                    px-4 py-3 md:py-2 md:px-4
                    transition-all duration-200
                    group-hover:text-primary-500
                  "
                        >
                          {text}
                          <IconChevronDown
                            class="
                      w-6 h-6 md:w-3.5 md:h-3.5 
                      text-primary-500 dark:text-primary-300 
                      ml-0.5 rtl:ml-0 rtl:mr-0.5 
                      hidden md:inline 
                      group-hover:rotate-180
                      transition-transform duration-200
                    "
                          />
                        </button>
                        <ul
                          class="
                    md:backdrop-blur-md 
                    dark:md:bg-slate-800 
                    rounded md:absolute 
                    pl-4 md:pl-0 
                    md:hidden group-hover:md:block
                    font-medium 
                    bg-white dark:bg-gray-800 
                    md:min-w-[200px] 
                    drop-shadow-xl 
                    py-2 md:py-2
                    md:mt-1
                  "
                        >
                          {items.map(({ text: text2, href: href2 }, key2) => (
                            <li key={key2}>
                              <a
                                class="
                          block 
                          py-2 px-5 
                          text-primary-600 dark:text-primary-200 
                          hover:bg-primary-500 hover:text-white
                          first:rounded-t last:rounded-b 
                          transition-all duration-200
                        "
                                href={href2}
                              >
                                {text2}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a
                        class={`
                  block 
                  text-primary-700 dark:text-primary-200 
                  hover:text-primary-500 dark:hover:text-primary-400 
                  px-4 py-3 md:py-2 md:px-4
                  md:hover:bg-primary-50
                  relative
                  transition-all duration-200
                  after:content-[''] 
                  after:absolute 
                  after:bottom-[6px]
                  after:left-1/2 
                  after:h-[2px] 
                  after:bg-primary-500 
                  after:transition-all 
                  after:duration-200
                  ${isActive
                            ? 'after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0'
                            : 'after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4'
                          }
                `}
                        href={href}
                      >
                        {text}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </nav>
        {/* Overlay Below Header */}
        {store.isMenuExpanded && (
          <div
            class="
              fixed left-0 right-0 bottom-0 
              top-[92.8px] 
              bg-black/30 
              z-30 
              md:hidden
              transition-opacity duration-300 ease-in-out
              ${store.isMenuExpanded ? 'opacity-100' : 'opacity-0'}
            "
            onClick$={() => {
              store.isMenuExpanded = false;
            }}
          />
        )}
        <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
          <div class="items-center flex justify-between w-full md:w-auto">
            <div class="flex">{/* <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" /> */}</div>
            <span class="ml-4 rtl:ml-0 rtl:mr-4">
              <a
                href="/contact"
                class="btn btn-primary hover:bg-primary-400 bg-primary ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto"
              >
                Get A Quote
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
});