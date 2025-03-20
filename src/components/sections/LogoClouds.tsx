import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import { Tabs } from "~/components/ui/Tabs";

const tabContent: TabContent[] = [
    {
        title: "JavaScript",
        description: "powers interactive elements and dynamic functionality across our web projects. At our design agency, we leverage it to create engaging user experiences, from animated UI components to real-time data updates, ensuring our designs are both beautiful and functional.",
        icon: (
            <svg class="w-14 h-14 mx-auto" viewBox="0 0 128 128">
                <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z" />
                <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z" />
            </svg>
        )
    },
  
];


interface TabContent {
    title: string;
    description: string;
    icon: any;
}



// Assuming tabContent is defined above with the 9 technologies
// ...

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

export default component$(() => {
    const selectedIndex = useSignal<number | undefined>(0);

    useStyles$(styles);

    return (
        <section class="relative scroll-mt-16 max-w-5xl mx-auto">

            {/* Tabs Component */}
            <Tabs.Root
                selectedClassName='bg-white'
                selectedIndex={selectedIndex.value}
                onSelectedIndexChange$={(index) => (selectedIndex.value = index)}
            >
                <Tabs.List class="hidden grid-cols-4 sm:justify-start sm:inline-flex sm:space-x-4 w-full p-2 rounded-lg shadow-md">
                    {tabContent.map((content, index) => (
                        <Tabs.Tab key={index} class="px-4 py-2">{content.title}</Tabs.Tab>
                    ))}
                </Tabs.List>

                {tabContent.map((content, index) => (
                    <Tabs.Panel key={index}>
                       
                                <p class="">
                                    <span class="text-2xl  font-bold">{content.title}</span> {content.description}
                                </p>
                         
                    </Tabs.Panel>
                ))}
            </Tabs.Root>
            <div class="grid grid-cols-3 lg:grid-cols-4 gap-0.5  md:gap-4 xl:gap-8 md:space-y-0 md:mb-8 md:mt-12">
                {tabContent.map((content, index) => (
                    <div
                        key={index}
                        class="relative p-1 cursor-pointer group"
                        onClick$={() => selectedIndex.value = selectedIndex.value === index ? undefined : index}
                    >
                        <div class="relative flex items-center justify-center">
                            <div
                                class={twMerge(
                                    "absolute inset-[-2px] hover:inset-[0px] rounded-none transition-all duration-300",
                                    "bg-blue-100/50 dark:bg-blue-900/50", // Default background
                                    "border border-gray-300 dark:border-gray-700",
                                    selectedIndex.value === index && "bg-blue-300/70 dark:bg-blue-800/70 shadow-[0_0_20px_8px_rgba(59,130,246,0.6)] breathing-glow",
                                    "group-hover:bg-blue-200/70 dark:group-hover:bg-blue-800/70 group-hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.4)]"
                                )}
                            />
                            <div
                                class={twMerge(
                                    "relative bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 w-full p-2",
                                    "transition-transform duration-300",
                                    selectedIndex.value === index && "scale-105",
                                    "group-hover:scale-105"
                                )}
                            >
                                {content.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
});