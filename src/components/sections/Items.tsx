import { component$, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import { twMerge } from "tailwind-merge";

// ... (your existing interfaces remain the same) ...

const styles = `
    @keyframes breathe {
        0%, 100% { box-shadow: 0 0 15px 5px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 25px 10px rgba(59, 130, 246, 0.5); }
    }
    .breathing-glow { 
        animation: breathe 2s ease-in-out infinite; 
    }
    @keyframes spin3d {
        0% { 
            transform: perspective(1000px) rotateY(0deg) rotateZ(0deg);
        }
        100% { 
            transform: perspective(1000px) rotateY(360deg) rotateZ(0deg);
        }
    }
    .rotating-item { 
        animation: spin3d 6s linear infinite;
        transform-style: preserve-3d;
        perspective: 1000px; /* Keeps 3D depth */
        transform-origin: center center;
    }
`;

export default component$(({ selectedClass }: ItemsProps) => {
    const selectedCategory = useSignal(0);
    const selectedItem = useSignal(0);

    useStyles$(styles);

    useVisibleTask$(({ track }) => {
        track(() => selectedCategory.value);
        selectedItem.value = 0;
    });

    // Filter items based on selected class and ensure we have valid categories
    const filteredCategories = categories.map(category => ({
        ...category,
        items: category.items.filter(item => 
            !item.metadata.class || item.metadata.class === selectedClass
        )
    })).filter(category => category.items.length > 0);

    const currentCategory = filteredCategories[selectedCategory.value] || filteredCategories[0];
    const currentItem = currentCategory?.items[selectedItem.value] || 
                       currentCategory?.items[0] || 
                       { 
                           title: "No Items Available", 
                           description: "No items found for this class",
                           icon: (
                               <svg class="w-full h-full" viewBox="0 0 24 24">
                                   <path fill="currentColor" d="M12 2v20M2 12h20" />
                               </svg>
                           ),
                           metadata: {}
                       };

    return (
        <section class="scroll-mt-16">
            <div class="max-w-5xl mx-auto">
                {filteredCategories.length > 0 ? (
                    <>
                        <div class="rounded-sm p-4 shadow-md mb-0 border-2 border-gray-800">
                            <div class="flex flex-col md:flex-row items-center gap-6">
                                <div class="rotating-item flex-shrink-0 md:w-2/3 max-w-[150px] max-h-[150px]">
                                    {currentItem.icon}
                                </div>
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
                                                <span class="font-semibold">Rarity:</span>{' '}
                                                <span class={twMerge(
                                                    currentItem.metadata.rarity === "Common" && "text-green-500",
                                                    currentItem.metadata.rarity === "Rare" && "text-orange-400"
                                                )}>
                                                    {currentItem.metadata.rarity}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-4 sm:flex sm:space-x-4 w-full mt-1 border-gray-800 border-2 shadow-md p-2 rounded-sm mb-1">
                            {filteredCategories.map((category, index) => (
                                <button
                                    key={index}
                                    class={twMerge(
                                        "p-2 bg-transparent text-gray-400 transition-colors duration-200",
                                        selectedCategory.value === index && "bg-gray-800 rounded-sm text-white"
                                    )}
                                    onClick$={() => selectedCategory.value = index}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        <div class="grid grid-cols-3 border-gray-800 border-2 p-4 lg:grid-cols-4 gap-0.5 md:gap-4 xl:gap-8 md:mb-8">
                            {currentCategory.items.map((item, index) => (
                                <div
                                    key={index}
                                    class="relative p-1 cursor-pointer group"
                                    onClick$={() => selectedItem.value = index}
                                >
                                    <div class="relative flex items-center justify-center">
                                        <div class={twMerge(
                                            "absolute inset-[-2px] rounded-none transition-all duration-300 bg-blue-100/50 dark:bg-blue-900/50 border border-gray-300 dark:border-gray-700",
                                            selectedItem.value === index && "bg-blue-300/70 dark:bg-blue-800/70 breathing-glow",
                                            "group-hover:bg-blue-200/70 dark:group-hover:bg-blue-800/70 group-hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.4)]"
                                        )} />
                                        <div class={twMerge(
                                            "relative bg-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 w-full p-2 transition-transform duration-300",
                                            selectedItem.value === index && "scale-105",
                                            "group-hover:scale-105"
                                        )}>
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div class="text-center p-4">
                        <p class="text-gray-400">No items available for {selectedClass} class</p>
                    </div>
                )}
            </div>
        </section>
    );
});


const categories: Category[] = [
    {
        name: "Head",
        items: [
            {
                title:"Sorcerer’s Conical Crown"  

,
                description:  "A towering hat imbued with arcane runes, amplifying the wearer’s spellcasting prowess."

                ,
                icon: (<svg viewBox="0 0 128 128" class="w-full h-full"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M94.52 21.81c2.44-1.18 4.13-3.67 4.13-6.56a7.28 7.28 0 0 0-14.56 0c0 2.93 1.73 5.44 4.22 6.6c-2.88 15.6-7.3 27.21-23.75 29.69c0 0 4.43 22.15 25.15 22.15s22.82-21.93 22.82-21.93c-16.81.86-18.23-20.27-18.01-29.95z" fill="#f19534"></path><path d="M34.74 21.81c-2.44-1.18-4.13-3.67-4.13-6.56a7.28 7.28 0 0 1 14.56 0c0 2.93-1.73 5.44-4.22 6.6c2.88 15.6 7.3 27.21 23.75 29.69c0 0-4.43 22.15-25.15 22.15S16.74 51.77 16.74 51.77c16.8.85 18.22-20.28 18-29.96z" fill="#f19534"></path><path d="M89.43 73.69c.09 0 .18.01.27.01c5.71 0 10-1.67 13.22-4.08l-13.49 4.07z" fill="#ffca28"></path><path d="M119.24 16.86c-3.33-.45-6.51 2.72-7.09 7.06c-.36 2.71.37 5.24 1.78 6.87l-2.4 9.95s-3.67 23.51-22.21 28.15C74.5 72.6 69.13 45.47 67.83 37.09c2.82-1.4 4.77-4.3 4.77-7.67c0-4.73-3.83-8.56-8.56-8.56s-8.56 3.83-8.56 8.56c0 3.39 1.98 6.32 4.85 7.7c-1.03 8.27-5.57 34.5-21.57 31.76c-16.24-2.79-23.33-30.14-24.97-37.58c1.95-1.6 3.04-4.42 2.64-7.45c-.58-4.35-4.02-7.47-7.68-6.98c-3.66.49-6.15 4.41-5.57 8.75c.42 3.16 2.36 5.67 4.79 6.62l12.72 79.03s11.1 8.77 43.35 8.77s43.35-8.77 43.35-8.77l12.75-79.24c2.06-1.08 3.68-3.51 4.08-6.49c.59-4.35-1.64-8.23-4.98-8.68z" fill="#ffca28"></path><ellipse cx="64.44" cy="88.3" rx="9.74" ry="11.61" fill="#26a69a"></ellipse><path d="M64.44 79.56c.38.42.72 1.19 0 2.69s-4.6 3.53-5.31 3.94c-.71.42-1.18.23-1.4.06c-1.05-.84-.65-2.74.03-3.9c1.46-2.51 4.55-5.1 6.68-2.79z" fill="#69f0ae"></path><path d="M63.72 92.63c-1.1.53-4.71 2.14-3.52 4.05c.7 1.13 2.15 1.61 3.48 1.67c1.33.06 2.64-.36 3.82-.97c5.6-2.9 6.05-10.52 4.96-11.1c-1.12-.6-1.88.95-2.46 1.61a20.266 20.266 0 0 1-6.28 4.74z" fill="#00796b"></path><path d="M118.09 78.8c1.56-8.63-4.24-10.79-4.24-10.79s-3.74-.68-5.5 9.03c-1.76 9.7 1.98 10.38 1.98 10.38s6.19.01 7.76-8.62z" fill="#26a69a"></path><path d="M115.51 70.96c1.36 1.82-.25 4.51-2.86 6.3c-.77.53-1.79.33-1.94-.11c-.42-1.26-.24-2.69.32-3.9c1.66-3.63 3.79-3.21 4.48-2.29z" fill="#69f0ae"></path><path d="M9.76 79.06C8.19 70.44 14 68.27 14 68.27s3.74-.68 5.5 9.03c1.76 9.7-1.98 10.38-1.98 10.38s-6.2.01-7.76-8.62z" fill="#26a69a"></path><path d="M15.78 71.2c1.34 1 .79 2.31-.22 3.22c-1.15 1.05-2.03 2.2-3.01 3.39c-.15.18-.32.38-.56.43c-.46.1-.83-.37-.98-.82c-.43-1.26-.35-2.74.29-3.9c1.82-3.31 3.96-2.71 4.48-2.32z" fill="#69f0ae"></path><path d="M99.99 87.16c-.69 3.93-3.84 6.66-7.05 6.1c-3.21-.56-3.65-3.91-2.96-7.84c.69-3.93 2.24-6.94 5.44-6.38c3.21.56 5.26 4.2 4.57 8.12z" fill="#f44336"></path><path d="M30.43 87.16c.69 3.93 3.84 6.66 7.05 6.1s3.65-3.91 2.96-7.84c-.69-3.93-2.24-6.94-5.44-6.38s-5.25 4.2-4.57 8.12z" fill="#f44336"></path><path d="M35.08 84.54c-.73.82-2.51 2.47-3.14 1.21c-.86-1.72.33-4.32 1.69-5.18c1.36-.86 2.47-.18 2.66.59c.23.98-.56 2.64-1.21 3.38z" fill="#ffa8a4"></path><path d="M91.98 87.05c-.99-.15-1.1-3.56 1.56-6.24c1.27-1.28 3.09.24 2.63 2.29c-.44 1.95-2.38 4.23-4.19 3.95z" fill="#ffa8a4"></path><path d="M109.15 98.21c-5.99 3-19.73 10.99-45.1 10.99s-39.11-7.99-45.1-10.99c0 0-2.15 1.15-2.15 2.35v9.21c0 1.23.65 2.36 1.71 2.99c4.68 2.76 18.94 9.28 45.55 9.28s40.87-6.52 45.55-9.28a3.475 3.475 0 0 0 1.71-2.99v-9.21c-.02-1.2-2.17-2.35-2.17-2.35z" fill="#ffca28"></path><path d="M39.6 110.84c2.8.55 3.65.79 3.46 2.35c-.39 3.07-6.76 2.34-10.53 1.35c-7.79-2.05-9.37-4.21-9.37-6.14c0-1.77 1.36-1.98 3.46-1.24c2.51.89 6.39 2.39 12.98 3.68z" fill="#fff59d"></path><path d="M109.15 100.23s-16.57 9.38-45.1 9.38s-45.1-9.38-45.1-9.38" fill="none" stroke="#f19534" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10"></path><path d="M26.97 49.57c5.32-3.8 8.18-10.61 8.43-21.45c.02-.98.3-1.27.83-1.33c.85-.09.99.68.98 1.23c-.24 11.7-1.73 19.01-7.63 23.13c-.29.2-2.36 1.46-3.24.59c-1.05-1.02.29-1.93.63-2.17z" fill="#ffca28"></path><path d="M31.84 15.54c-.17-1.81.25-5.07 5-6.55c1.39-.43 2.25.25 2.41.78c.4 1.32-.76 1.84-1.29 2.01c-3.65 1.18-3.83 3-4.58 4.16s-1.48.15-1.54-.4z" fill="#ffca28"></path><path d="M78.22 47.17c4.81-4.27 8-9.04 10.1-19.9c.19-.96.47-1.22.99-1.2c.85.02.89.81.8 1.35c-1.78 11.58-3.47 14.88-9.4 21.45c-.67.74-2.3 1.41-3.22.64c-.83-.69.13-1.8.73-2.34z" fill="#ffca28"></path><path d="M85.3 15.63c-.17-1.81.25-5.07 5-6.55c1.39-.43 2.25.25 2.41.78c.4 1.32-.76 1.84-1.29 2.01c-3.65 1.18-3.83 3-4.58 4.16c-.74 1.16-1.48.15-1.54-.4z" fill="#ffca28"></path><path d="M31.59 71.62C19.97 66.35 16.55 52.6 14.73 46.63c-.24-.79-.12-1.54.67-1.78s1.26.27 1.51 1.06c1.32 4.33 6.45 18.79 17.04 22.9c.77.3 1.97 1.03 1.32 2.28c-.43.81-1.81 1.38-3.68.53z" fill="#fff59d"></path><path d="M12.68 24.63c-.56-1.16-.79-2.26-3.84-3.53c-.77-.32-1.28-1.03-1.07-1.83s1.01-1.4 2.17-1.2c3.77.65 4.59 4.48 4.75 5.81c.15 1.28-1.44 1.91-2.01.75z" fill="#fff59d"></path><path d="M96.87 71.62c11.62-5.27 15.04-19.02 16.86-24.99c.24-.79.12-1.54-.67-1.78s-1.26.27-1.51 1.06c-1.32 4.33-6.45 18.79-17.04 22.9c-.77.3-1.97 1.03-1.32 2.28c.43.81 1.81 1.38 3.68.53z" fill="#fff59d"></path><path d="M115.78 24.63c.56-1.16.79-2.26 3.84-3.53c.77-.32 1.28-1.03 1.07-1.83s-1.01-1.4-2.17-1.2c-3.77.65-4.59 4.48-4.75 5.81c-.15 1.28 1.45 1.91 2.01.75z" fill="#fff59d"></path><path d="M59.38 29.55c.61-1.25 1.68-2.96 5.17-3.68c1.34-.28 1.73-.86 1.61-1.74c-.24-1.83-2.52-1.7-3.75-1.41c-4.1.96-5.01 4.6-5.18 6.04c-.17 1.37 1.55 2.04 2.15.79z" fill="#fff59d"></path></g></svg>),
                metadata: {
                    weight: "5%",
                    durability: "High",
                    rarity: "Rare",
                    class: "Wizard"
                }
            },
            {
                title: "Mystic Guardian Helm",
                description: "A sturdy headpiece blending steel and sorcery, shielding wizards in battle while enhancing focus."

                ,
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "20%",
                    durability: "Medium",
                    rarity: "Common",
                    class: "Wizard"
                }
            },
            {
                title: "Elf Hat",
                description: "Enhances magical abilities",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>),
                metadata: {
                    weight: "20%",
                    durability: "High",
                    rarity: "Common",
                    class: "Elf"
                }
            },
            {
                title: "Orc Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Orc"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Orc"
                }
            },
            {
                title: "Dark Lord Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Dark Lord"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Warrior"
                }
            },
            {
                title: "Dragon Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Dragon"
                }
            },
            // Add more items with class specifications
        ]
    },
    {
        name: "Neck",
        items: [
            {
                title: "Wizard Hat",
                description: "Enhances magical abilities",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>),
                metadata: {
                    weight: "20%",
                    durability: "High",
                    rarity: "Common",
                    class: "Wizard"
                }
            },
            {
                title: "Wizard toque",
                description: "Enhances magical abilities",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>),
                metadata: {
                    weight: "20%",
                    durability: "High",
                    rarity: "Common",
                    class: "Wizard"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Wizard"
                }
            },
            {
                title: "Wizard Hat",
                description: "Enhances magical abilities",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>),
                metadata: {
                    weight: "20%",
                    durability: "High",
                    rarity: "Common",
                    class: "Elf"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Orc"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Orc"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Dark Lord"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Warrior"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Dragon"
                }
            },
            // Add more items with class specifications
        ]
    },

    {
        name: "Torso",
        items: [
            {
                title: "Wizard Hat",
                description: "Enhances magical abilities",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>),
                metadata: {
                    weight: "20%",
                    durability: "High",
                    rarity: "Common",
                    class: "Wizard"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Wizard"
                }
            },
            {
                title: "Elf Hat",
                description: "Enhances magical abilities",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>),
                metadata: {
                    weight: "20%",
                    durability: "High",
                    rarity: "Common",
                    class: "Elf"
                }
            },
            {
                title: "Orc Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Orc"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Orc"
                }
            },
            {
                title: "Dark Lord Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Dark Lord"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Warrior"
                }
            },
            {
                title: "Dragon Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Dragon"
                }
            },
            // Add more items with class specifications
        ]
    },

    {
        name: "Eyes",
        items: [
            {
                title: "Wizard Hat",
                description: "Enhances magical abilities",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>),
                metadata: {
                    weight: "20%",
                    durability: "High",
                    rarity: "Common",
                    class: "Wizard"
                }
            },
            {
                title: "Mystic Guardian Helm",
                description: "A sturdy headpiece blending steel and sorcery, shielding wizards in battle while enhancing focus."

                ,
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Wizard"
                }
            },
            {
                title: "Elf Hat",
                description: "Enhances magical abilities",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>),
                metadata: {
                    weight: "20%",
                    durability: "High",
                    rarity: "Common",
                    class: "Elf"
                }
            },
            {
                title: "Orc Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Orc"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Orc"
                }
            },
            {
                title: "Dark Lord Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Dark Lord"
                }
            },
            {
                title: "Warrior Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Warrior"
                }
            },
            {
                title: "Dragon Helmet",
                description: "Heavy armor for combat",
                icon: (<svg class="w-full h-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>),
                metadata: {
                    weight: "5%",
                    durability: "Medium",
                    rarity: "Rare",
                    class: "Dragon"
                }
            },
            // Add more items with class specifications
        ]
    },
    
    // Add other categories with class-specific items...
];

interface Item {
    title: string;
    description: string;
    icon: any;
    metadata: {
        weight?: string;
        durability?: string;
        rarity?: string;
        class?: string;
    };
}

interface Category {
    name: string;
    items: Item[];
}

interface ItemsProps {
    selectedClass: string;
}