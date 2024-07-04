<template>
<header class="pb-6 bg-white lg:pb-0">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- lg+ -->
        <nav class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
                <a href="#" title="" class="flex">
                    <img class="w-auto h-8 lg:h-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                </a>
            </div>

            <button type="button" class="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                <!-- Menu open: "hidden", Menu closed: "block" -->
                <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                </svg>

                <!-- Menu open: "block", Menu closed: "hidden" -->
                <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                <NuxtLink to="/" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </NuxtLink>

                <NuxtLink to="/about" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </NuxtLink>

                <NuxtLink to="/features" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </NuxtLink>
                <NuxtLink to="/resources" title="" class="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </NuxtLink>
            </div>

            <NuxtLink to="/contact" title="" class="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </NuxtLink>
        </nav>

        <!-- xs to lg -->
        <nav class="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div class="flow-root">
                <div class="flex flex-col px-6 -my-2 space-y-1">
                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                    <a href="#" title="" class="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                </div>
            </div>

            <div class="px-6 mt-6">
                <a href="#" title="" class="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started now </a>
            </div>
        </nav>
    </div>
</header>


<section class="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am <br class="block sm:hidden" />Jenny Carter</h2>
                <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <p class="mt-4 text-xl text-gray-600 md:mt-8">
                    <span class="relative inline-block">
                        <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
                        <span class="relative"> Have a question? </span>
                    </span>
                    <br class="block sm:hidden" />Ask me on <a href="#" title="" class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Twitter</a>
                </p>
            </div>

            <div class="relative">
                <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
            </div>
        </div>
    </div>
</section>



<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Integrate with apps</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Gmail</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Slack</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="block w-6 h-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Shopify</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Intercom</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Twitter</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Sketch</p>
                            <p class="mt-px text-sm text-gray-600">Direct Integration</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
            </div>
        </div>

        <div class="mt-12 text-center">
            <a href="#" title="" class="inline-flex p-3 font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"> Check all 1,593 applications </a>
        </div>
    </div>
</section>
<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Pricing & Plans</h2>
            <p class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="mt-10">
            <div class="flex items-center justify-center space-x-2.5">
                <span class="text-base font-medium text-gray-900"> Monthly </span>

                <button type="button" class="relative inline-flex flex-shrink-0 h-6 py-0.5 transition-colors duration-200 ease-in-out bg-transparent border-2 border-blue-600 rounded-full cursor-pointer w-12 focus:outline-none" role="switch">
                    <span aria-hidden="true" class="inline-block w-4 h-4 transition duration-200 ease-in-out translate-x-6 bg-blue-600 rounded-full shadow pointer-events-none"></span>
                </button>

                <span class="text-base font-medium text-gray-900"> Yearly </span>
            </div>
        </div>

        <div class="grid max-w-3xl grid-cols-1 gap-6 mx-auto sm:grid-cols-2 mt-14 md:gap-9">
            <div class="overflow-hidden bg-transparent border-2 border-gray-200 rounded-md">
                <div class="p-6 md:py-8 md:px-9">
                    <h3 class="text-xl font-semibold text-black">Personal</h3>
                    <p class="mt-2.5 text-sm text-gray-600">All the basic features to boost your freelance career</p>

                    <div class="flex items-end mt-5">
                        <div class="flex items-start">
                            <span class="text-xl font-medium text-black"> $ </span>
                            <p class="text-6xl font-medium tracking-tight">39</p>
                        </div>
                        <span class="ml-0.5 text-lg text-gray-600"> / month </span>
                    </div>

                    <a
                        href="#"
                        title=""
                        class="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-gray-900 transition-all duration-200 bg-transparent border-2 rounded-full border-fuchsia-600 hover:bg-fuchsia-600 hover:text-white focus:text-white focus:bg-fuchsia-600"
                        role=""
                    >
                        Start 14 Days Free Trial
                    </a>

                    <ul class="flex flex-col mt-8 space-y-4">
                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> 1 Domain License </span>
                            <svg class="w-4 h-4 ml-0.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Full Celebration Library </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> 120+ Coded Blocks </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <strike class="text-base font-medium text-gray-400"> Design Files Included </strike>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <strike class="text-base font-medium text-gray-400"> Premium Support </strike>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="overflow-hidden bg-white border-2 border-transparent rounded-md">
                <div class="p-6 md:py-8 md:px-9">
                    <h3 class="text-xl font-semibold text-black">Agency</h3>
                    <p class="mt-2.5 text-sm text-gray-600">All the extended features to boost your agency career</p>

                    <div class="flex items-end mt-5">
                        <div class="flex items-start">
                            <span class="text-xl font-medium text-black"> $ </span>
                            <p class="text-6xl font-medium tracking-tight">99</p>
                        </div>
                        <span class="ml-0.5 text-lg text-gray-600"> / month </span>
                    </div>

                    <a href="#" title="" class="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="">
                        Start 14 Days Free Trial
                    </a>

                    <ul class="flex flex-col mt-8 space-y-4">
                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> 100 Domain License </span>
                            <svg class="w-4 h-4 ml-0.5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Full Celebration Library </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> 120+ Coded Blocks </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Design Files Included </span>
                        </li>

                        <li class="inline-flex items-center space-x-2">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-base font-medium text-gray-900"> Premium Support </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-10 bg-blue-900 sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
            <div>
                <img class="w-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo-alt.svg" alt="" />

                <ul class="mt-8 space-y-4">
                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Career </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-lg font-semibold text-white">Help</p>

                <ul class="mt-8 space-y-4">
                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-lg font-semibold text-white">Resources</p>

                <ul class="mt-8 space-y-4">
                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Free eBooks </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Development Tutorial </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> How to - Blog </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> YouTube Playlist </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-lg font-semibold text-white">Extra Links</p>

                <ul class="mt-8 space-y-4">
                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" class="text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Privacy Policy </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="mt-20 md:mt-28 2xl:mt-32">
            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="sm:flex sm:items-center sm:justify-start sm:space-x-8">
                    <ul class="flex items-center justify-start space-x-8">
                        <li>
                            <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                    ></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                    <path
                                        d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                    ></path>
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="#" title="" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                    ></path>
                                </svg>
                            </a>
                        </li>
                    </ul>

                    <ul class="flex flex-wrap items-center justify-start mt-5 gap-x-8 sm:mt-0 gap-y-3">
                        <li>
                            <a href="#" title="" class="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Privacy Policy </a>
                        </li>

                        <li>
                            <a href="#" title="" class="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Terms & Conditions </a>
                        </li>

                        <li>
                            <a href="#" title="" class="text-sm text-blue-200 transition-all duration-200 hover:text-white focus:text-white"> Support </a>
                        </li>
                    </ul>
                </div>

                <p class="mt-6 text-sm text-blue-200 lg:mt-0">© Copyright 2021, All Rights Reserved by Postcraft</p>
            </div>
        </div>
    </div>
</section>

</template>

<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }
}
</script>

