import { component$ } from '@builder.io/qwik';
import { Card } from "../ui/Card";
import { CardHeadline } from "../ui/CardHeadline";

interface Props {
    title?: any;
    subtitle?: any;
    highlight?: any;
    classes?: any;
}

export default component$((props: Props) => {
    const { title = "", subtitle = "", highlight = "", classes = {} } = props;

    return (
        <section class=" scroll-mt-16">
            <Card.Root>
            <Card.Image src='/images/roadmap.jpg' class="h-20"/>
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
                    <dl class="mt-1 space-y-4 mb-4 text-base/7 text-gray-600 dark:text-gray-300">
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Address</span>
                                        <svg
                                            class="h-7 w-6 text-gray-400 dark:text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            data-slot="icon"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                                            />
                                        </svg>
                                    </dt>
                                    <dd>
                                        545 Mavis Island<br />Chicago, IL 99191
                                    </dd>
                                </div>
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Telephone</span>
                                        <svg
                                            class="h-7 w-6 text-gray-400 dark:text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            data-slot="icon"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                            />
                                        </svg>
                                    </dt>
                                    <dd>
                                        <a
                                            class="hover:text-gray-900 dark:hover:text-white"
                                            href="tel:+1 (555) 234-5678"
                                        >
                                            +1 (555) 234-5678
                                        </a>
                                    </dd>
                                </div>
                                <div class="flex gap-x-4">
                                    <dt class="flex-none">
                                        <span class="sr-only">Email</span>
                                        <svg
                                            class="h-7 w-6 text-gray-400 dark:text-gray-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            data-slot="icon"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                            />
                                        </svg>
                                    </dt>
                                    <dd>
                                        <a
                                            class="hover:text-gray-900 dark:hover:text-white"
                                            href="mailto:hello@example.com"
                                        >
                                            hello@example.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                    <form
                        action="#"
                        method="POST"
                        class="px-0 py-0 sm:pb-32 lg:px-8 lg:py-24"
                    >
                        <div class="mx-auto max-w-xl lg:max-w-lg">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        for="first-name"
                                        class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                                    >
                                        Name
                                    </label>
                                    <div class="mt-1.5">
                                        <input
                                            type="text"
                                            id="first-name"
                                            class="block p-2 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="Bonnie"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="last-name"
                                        class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                                    >
                                        Company
                                    </label>
                                    <div class="mt-1.5">
                                        <input
                                            type="text"
                                            id="last-name"
                                            class="block p-2 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="Green"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label
                                        for="email"
                                        class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                                    >
                                        Email
                                    </label>
                                    <div class="mt-1.5">
                                        <input
                                            type="email"
                                            id="email"
                                            class="shadow-sm bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="name@flowbite.com"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-1">
                                    <label
                                        for="phone-number"
                                        class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                                    >
                                        Phone number
                                    </label>
                                    <div class="mt-1.5">
                                        <input
                                            type="number"
                                            id="phone-number"
                                            class="block p-2 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                            placeholder="+12 345 6789"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="topic"
                                        class="pb-1.5 block text-sm/6 font-semibold text-gray-900 dark:text-white"
                                    >
                                        Service
                                    </label>
                                    <select
                                        id="topic"
                                        class="bg-white border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option selected>Select a topic</option>
                                        <option value="US">Switch plans and add-ons</option>
                                        <option value="CA">Billing & Invoice</option>
                                        <option value="DE">Parental controls</option>
                                        <option value="XU">Billing & Invoice</option>
                                    </select>
                                </div>
                                <div class="sm:col-span-2">
                                    <label
                                        for="message"
                                        class="block text-sm/6 font-semibold text-gray-900 dark:text-white"
                                    >
                                        Message
                                    </label>
                                    <div class="mt-1.5">
                                        <textarea
                                            id="message"
                                            rows={3}
                                            class="block p-2 w-full text-md text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Leave a comment..."
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3.5 pb-2 flex">
                                <button
                                    type="submit"
                                    class="py-3 w-full px-5 text-sm font-medium text-center text-white rounded-md bg-gray-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Send message
                                </button>
                            </div>
                        </div>
                    </form>              
                                        </Card.Content>
            </Card.Root>
        </section>
    );
});











        