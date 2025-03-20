import { component$, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import { twMerge } from "tailwind-merge";

interface Item {
    title: string;
    description: string;
    icon: any;
    metadata: {
        weight?: string;
        durability?: string;
        rarity?: string;
    };
}

interface Category {
    name: string;
    items: Item[];
}

const categories: Category[] = [
    {
        name: "Head",
        items: [
            {
                title: "Helmet",
                description: "Protects the head from impacts and projectiles. Enhances neck protection and style.",
                icon: (
                    <svg class="w-full h-full" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </svg>
                ),
                metadata: {
                    weight: "20%",
                    durability: "High",
                    rarity: "Common"
                }
            },
            {
                title: "Necklace",
                description: "Protects the head from impacts and projectiles. Enhances neck protection and style.",
                icon: (
                    <svg class="w-full h-full" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/>
                    </svg>
                ),
                metadata: {
                    weight: "0.1 kg",
                    durability: "Medium",
                    rarity: "Rare"
                }
            },
            // Add more head items here
        ]
    },
    {
        name: "Neck",
        items: [
            {
                title: "Necklace",
                description: "Protects the head from impacts and projectiles. Enhances neck protection and style.",
                icon: (
                    <svg class="w-full h-full" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/>
                    </svg>
                ),
                metadata: {
                    weight: "0.1 kg",
                    durability: "Medium",
                    rarity: "Rare"
                }
            },
            // Add more neck items here
        ]
    },
    {
        name: "Eyes",
        items: [
            {
                title: "Goggles",
                description: "Protects the head from impacts and projectiles. Enhances neck protection and style.",
                icon: (
                    <svg class="w-full h-full" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5z"/>
                    </svg>
                ),
                metadata: {
                    weight: "0.3 kg",
                    durability: "Low",
                    rarity: "Uncommon"
                }
            },
            // Add more eyes items here
        ]
    }
];



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
    @keyframes rotate3d {
        0% {
            transform: rotateY(0deg);
        }
        100% {
            transform: rotateY(360deg);
        }
    }
    .rotating-item {
        animation: rotate3d 6s linear infinite;
        transform-style: preserve-3d;
    }
`;

export default component$(() => {
    const selectedCategory = useSignal(0);
    const selectedItem = useSignal(0);

    useStyles$(styles);

    useVisibleTask$(({ track }) => {
        track(() => selectedCategory.value);
        selectedItem.value = 0; // Reset item selection when category changes
    });

    const currentItem = categories[selectedCategory.value].items[selectedItem.value];

    return (
        <section class="scroll-mt-16">
            <div class="max-w-5xl mx-auto">
                {/* Showcase Area */}
                <div class=" rounded-xl p-2 shadow-md mb-0">
                    <div class="flex flex-col md:flex-row items-center gap-6">
                        {/* Larger Revolving Item Image */}
                        <div class="rotating-item flex-shrink-0 md:w-2/3 max-w-[150px] max-h-[150px]">
                            {currentItem.icon}
                        </div>
                        {/* Smaller Title, Description, and Metadata */}
                        <div class="flex-1 md:w-1/3">
                            <h3 class="text-xl font-bold mb-1">{currentItem.title}</h3>
                            <p class="text-sm text-gray-400 mb-2">{currentItem.description}</p>
                            <div class="grid grid-cols-2 gap-2 text-sm text-gray-400">
                                {currentItem.metadata.weight && (
                                    <div>
                                        <span class="font-semibold">Drop rate:</span> {currentItem.metadata.weight}
                                    </div>
                                )}
                                {currentItem.metadata.rarity && (
                                    <div>
                                        <span class="font-semibold">Rarity:</span> <span class="text-green-500">{currentItem.metadata.rarity}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Category Tabs */}
                <div class="grid grid-cols-3 sm:flex sm:space-x-4 w-full shadow-md p-2 rounded-lg mb-8">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            class={twMerge(
                                "p-2 bg-transparent",
                                selectedCategory.value === index && "border-b-2 border-blue-500"
                            )}
                            onClick$={() => selectedCategory.value = index}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Items Grid */}
                <div class="grid grid-cols-3 lg:grid-cols-4 gap-0.5 md:gap-4 xl:gap-8 md:mb-8">
                    {categories[selectedCategory.value].items.map((item, index) => (
                        <div
                            key={index}
                            class="relative p-1 cursor-pointer group"
                            onClick$={() => selectedItem.value = index}
                        >
                            <div class="relative flex items-center justify-center">
                                <div
                                    class={twMerge(
                                        "absolute inset-[-2px] rounded-none transition-all duration-300 bg-blue-100/50 dark:bg-blue-900/50 border border-gray-300 dark:border-gray-700",
                                        selectedItem.value === index && "bg-blue-300/70 dark:bg-blue-800/70 breathing-glow",
                                        "group-hover:bg-blue-200/70 dark:group-hover:bg-blue-800/70 group-hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.4)]"
                                    )}
                                />
                                <div
                                    class={twMerge(
                                        "relative bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 w-full p-2 transition-transform duration-300",
                                        selectedItem.value === index && "scale-105",
                                        "group-hover:scale-105"
                                    )}
                                >
                                    {item.icon}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});