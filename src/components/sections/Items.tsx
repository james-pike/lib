import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Card } from "../ui/Card";
import { CardHeadline } from "../ui/CardHeadline";
import { Tabs } from '../ui/Tabs';

import LogoClouds from './LogoClouds';


import { useStyles$ } from "@builder.io/qwik";

const styles = `
    @keyframes breathe {
        0%, 100% {
            box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.3);
        }
        50% {
            box-shadow: 0 0 25px 10px rgba(59, 130, 246, 0.5);
        }
    }
    .breathing-glow {
        animation: breathe 2s ease-in-out infinite;
    }
`;








interface Props {
    title?: any;
    subtitle?: any;
    highlight?: any;
    classes?: any;
}



export default component$((props: Props) => {
    const { title = "", subtitle = "", highlight = "", classes = {} } = props;

      const selectedIndex = useSignal(0); 
      
          useStyles$(styles);

    
      useVisibleTask$(({ track }) => {
        track(() => selectedIndex.value); // Watch for tab changes
    
      });

    return (
        <section class=" scroll-mt-16">
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
                    <Tabs.Root 
  selectedClassName='bg-white' 
  class="max-w-5xl mx-auto flex flex-col" 
  selectedIndex={selectedIndex.value} 
  onSelectedIndexChange$={(index) => (selectedIndex.value = index)}
>
  {/* Responsive Tabs List with order-last */}
  <Tabs.List class="grid grid-cols-4 sm:justify-start sm:inline-flex sm:space-x-4 w-full shadow-md order-last">
    <Tabs.Tab class="px-4 py-2">Weapon</Tabs.Tab>
    <Tabs.Tab class="px-4 py-2">Helmet</Tabs.Tab>
    <Tabs.Tab class="px-4 py-2">Face</Tabs.Tab>
    <Tabs.Tab class="px-4 py-2">Background</Tabs.Tab>
  </Tabs.List>

  {/* Tea Panel */}
  <Tabs.Panel>
    <LogoClouds/>
  </Tabs.Panel>

  <Tabs.Panel>

  </Tabs.Panel>

  {/* Bistro Panel */}
  <Tabs.Panel>
   
  </Tabs.Panel>

  {/* Dessert Panel */}
  <Tabs.Panel>
  
  </Tabs.Panel>
</Tabs.Root>
                    </Card.Content>
            </Card.Root>
        </section>
    );
});






