import {  $, component$, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import { useContent, useLocation } from "@builder.io/qwik-city";
import IconChevronDown from "../icons/IconChevronDown";
import { Logo } from "../common/Logo";
import MenuModal from "../widgets/MenuModal";
import { cn } from '@qwik-ui/utils';
import { LuX } from '@qwikest/icons/lucide';
import { Modal } from '../ui/Modal';
import { Button, buttonVariants } from '../ui/Button';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import IconGithub from "../icons/IconGithub";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
    isMenuExpanded: false,
  });

  const audioRef = useSignal<HTMLAudioElement>();
  const isAudioReady = useSignal(false); // Track audio readiness

  // Ensure audio element is ready after hydration
  useTask$(() => {
    if (audioRef.value) {
      audioRef.value.addEventListener("canplay", () => {
        isAudioReady.value = true;
      });
    }
  });

  const playAudio = $(async () => {
    if (audioRef.value && isAudioReady.value) {
      try {
        await audioRef.value.play();
        console.log("Audio played successfully");
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    } else {
      console.error("Audio not ready or ref missing");
    }
  });

  const show = useSignal(false);
  const { menu } = useContent();
  const location = useLocation();

  return (
    <>
      <header
        id="header"
        class={`sticky top-0 py-0.5 -mt-0.5 z-40 max-w-7xl bg-background flex-none mx-auto w-full border-gray-200 dark:border-gray-700 transition-[opacity] ease-in-out ${
          store.isScrolling
            ? "md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-background"
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

        <div class="relative text-default md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
          <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
            <a
              href="/"
              class="p-0 bg-gray-100 rounded-sm flex items-center h-full dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
            >
              <Logo />
            </a>
            <div class="flex items-center md:hidden gap-0.5">
              <button
                type="button"
                class="p-2 bg-blue-50 rounded-sm flex items-center h-full dark:bg-gray-800 border-2 border-blue-200 dark:border-gray-700"
                aria-label="Toggle between Dark and Light mode"
                onClick$={playAudio}
              >
                <IconGithub />
              </button>
              <audio
                ref={audioRef}
                src="/images/audio.mp3" // Adjusted path (no /public)
                preload="auto" // Ensure audio loads eagerly
              />
              <a href="https://www.kaspa.com/nft/collections/TOXIK" target="_blank" class="p-2 bg-blue-50 rounded-sm flex items-center h-full dark:bg-gray-800 border-2 border-blue-200 dark:border-gray-700">
                Mint KasLords
              </a>
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
                  group
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
                {/* Add Edit Profile button to navigation */}
                <li>
                  <Button
                    look="outline"
                    onClick$={() => (show.value = true)}
                    class="text-primary-700 dark:text-primary-200 hover:text-primary-500 dark:hover:text-primary-400 px-4 py-2"
                  >
                    Edit Profile
                  </Button>
                </li>
              </ul>
            ) : null}
          </nav>

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

      {/* Modal integrated with shared state */}
      <Modal.Root bind:show={show}>
        <Modal.Panel>
          <Modal.Title>Edit Profile</Modal.Title>
          <Modal.Description>
            Make changes to your profile here. Click save when you're done.
          </Modal.Description>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">
                Name
              </Label>
              <Input name="name" id="name" defaultValue="Pedro Duarte" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right">
                Username
              </Label>
              <Input
                name="username"
                id="username"
                defaultValue="@peduarte"
                class="col-span-3"
              />
            </div>
          </div>
          <footer>
            <Button look="primary" onClick$={() => (show.value = false)}>
              Save
            </Button>
          </footer>
          <Modal.Close
            class={cn(
              buttonVariants({ size: 'icon', look: 'link' }),
              'absolute right-3 top-2',
            )}
            type="submit"
          >
            <LuX class="h-5 w-5" />
          </Modal.Close>
        </Modal.Panel>
      </Modal.Root>
    </>
  );
});