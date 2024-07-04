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

<section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-left sm:text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get full access to Celebration</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

        <div class="mt-8 space-y-8 sm:space-x-12 sm:mt-12 sm:flex sm:items-start sm:justify-center sm:space-y-0 md:space-x-20 lg:mt-20">
            <div class="flex items-start">
                <svg class="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div class="ml-4">
                    <h3 class="text-xl font-semibold text-black">130+ Blocks</h3>
                    <p class="mt-1.5 text-base text-gray-600">Ready to use</p>
                </div>
            </div>

            <div class="flex items-start">
                <svg class="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div class="ml-4">
                    <h3 class="text-xl font-semibold text-black">14 Pages</h3>
                    <p class="mt-1.5 text-base text-gray-600">Make it live</p>
                </div>
            </div>

            <div class="flex items-start">
                <svg class="flex-shrink-0 text-orange-400 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <div class="ml-4">
                    <h3 class="text-xl font-semibold text-black">Easy Access</h3>
                    <p class="mt-1.5 text-base text-gray-600">Anyone can use</p>
                </div>
            </div>
        </div>

        <form action="#" method="POST" class="max-w-xl mx-auto mt-12">
            <div class="sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-blue-600 sm:focus-within:ring-1 sm:focus-within:ring-blue-600">
                <div class="flex flex-col items-start sm:flex-row sm:justify-center">
                    <div class="flex-1 w-full min-w-0">
                        <div class="relative text-gray-400 focus-within:text-gray-600">
                            <label for="email" class="sr-only"></label>
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                                </svg>
                            </div>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email address"
                                class="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full focus:border-transparent focus:ring-0 caret-blue-600"
                                required=""
                            />
                        </div>
                    </div>

                    <button type="submit" class="inline-flex items-center justify-center w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full sm:ml-4 sm:mt-0 sm:w-auto hover:bg-blue-700 focus:bg-blue-700">
                        Get instant access
                        <svg class="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </form>

        <div class="flex items-center justify-start mt-8 sm:justify-center sm:px-0">
            <svg class="flex-shrink-0 w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span class="ml-2 text-sm text-gray-600"> Your data is complely secured with us. We don’t share with anyone. </span>
        </div>
    </div>
</section>
<section class="py-10 bg-gray-800 lg:py-0">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div class="h-full pr-12 lg:order-2 lg:mb-40">
                <div class="relative h-full lg:h-auto">
                    <div class="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                        <img class="object-cover object-right w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg" alt="" />
                    </div>
                    <div class="relative lg:-top-12">
                        <img class="" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/girl-drinking-coffee.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
                <div>
                    <p class="text-sm font-semibold tracking-widest text-gray-500 uppercase">Why Should your choose?</p>
                    <h2 class="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">Get work done, fast!</h2>
                    <p class="text-xl leading-relaxed text-gray-200 mt-9">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.</p>
                    <p class="mt-6 text-xl leading-relaxed text-gray-200">Velit officia conse duis enim velit mollit. Exercit ation veniam consequat sunt nostrud amet.</p>
                    <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Explore more </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div class="flex flex-col bg-white border border-gray-200 rounded-md">
                <div class="flex flex-col justify-between flex-1 p-8">
                    <div class="flex-1">
                        <blockquote>
                            <p class="text-lg text-gray-800">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                        </blockquote>
                    </div>

                    <div class="mt-8">
                        <div class="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div class="flex items-center">
                            <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-1.jpg" alt="" />
                            <div class="ml-3">
                                <p class="text-base font-semibold text-gray-800 truncate">Devon Lane</p>
                                <p class="text-base text-gray-500 truncate">President of Sales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col bg-white border border-gray-200 rounded-md">
                <div class="flex flex-col justify-between flex-1 p-8">
                    <div class="flex-1">
                        <blockquote>
                            <p class="text-lg text-gray-800">“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</p>
                        </blockquote>
                    </div>

                    <div class="mt-8">
                        <div class="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div class="flex items-center">
                            <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-2.jpg" alt="" />
                            <div class="min-w-0 ml-3">
                                <p class="text-base font-semibold text-gray-800 truncate">Ronald Richards</p>
                                <p class="text-base text-gray-500 truncate">Marketing Coordinator</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col bg-white border border-gray-200 rounded-md">
                <div class="flex flex-col justify-between flex-1 p-8">
                    <div class="flex-1">
                        <blockquote>
                            <p class="text-lg text-gray-800">“This is a top quality product. No need to think twice before making it live on web.”</p>
                        </blockquote>
                    </div>

                    <div class="mt-8">
                        <div class="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div class="flex items-center">
                            <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-3.jpg" alt="" />
                            <div class="min-w-0 ml-3">
                                <p class="text-base font-semibold text-gray-800 truncate">Jane Cooper</p>
                                <p class="text-base text-gray-500 truncate">Dog Trainer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col bg-white border border-gray-200 rounded-md">
                <div class="flex flex-col justify-between flex-1 p-8">
                    <div class="flex-1">
                        <blockquote>
                            <p class="text-lg text-gray-800">“Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.”</p>
                        </blockquote>
                    </div>

                    <div class="mt-8">
                        <div class="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div class="flex items-center">
                            <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-4.jpg" alt="" />
                            <div class="min-w-0 ml-3">
                                <p class="text-base font-semibold text-gray-800 truncate">Theresa Webb</p>
                                <p class="text-base text-gray-500 truncate">Web Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col bg-white border border-gray-200 rounded-md">
                <div class="flex flex-col justify-between flex-1 p-8">
                    <div class="flex-1">
                        <blockquote>
                            <p class="text-lg text-gray-800">“My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                        </blockquote>
                    </div>

                    <div class="mt-8">
                        <div class="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div class="flex items-center">
                            <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-5.jpg" alt="" />
                            <div class="min-w-0 ml-3">
                                <p class="text-base font-semibold text-gray-800 truncate">Darlene Robertson</p>
                                <p class="text-base text-gray-500 truncate">Medical Assistant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col bg-white border border-gray-200 rounded-md">
                <div class="flex flex-col justify-between flex-1 p-8">
                    <div class="flex-1">
                        <blockquote>
                            <p class="text-lg text-gray-800">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.”</p>
                        </blockquote>
                    </div>

                    <div class="mt-8">
                        <div class="w-full h-0 mb-8 border-t-2 border-gray-200 border-dotted"></div>
                        <div class="flex items-center">
                            <img class="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/8/avatar-6.jpg" alt="" />
                            <div class="min-w-0 ml-3">
                                <p class="text-base font-semibold text-gray-800 truncate">Floyd Miles</p>
                                <p class="text-base text-gray-500 truncate">Nursing Assistant</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">Trusted by world class companies, design teams & popular designers</h2>
        </div>

        <div class="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
            <div class="md:px-4 lg:px-10">
                <img class="-rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/team.jpg" alt="" />
                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Join as a team</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>

            <div class="md:px-4 lg:px-10">
                <img class="rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/work.jpg" alt="" />
                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Work from anywhere</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>

            <div class="md:px-4 lg:px-10">
                <img class="-rotate-1" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/3/success.jpg" alt="" />
                <h3 class="mt-8 text-xl font-semibold leading-tight text-black">Get success</h3>
                <p class="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>
        </div>
    </div>
</section>
<section class="relative py-10 overflow-hidden bg-blue-600 sm:py-16 lg:py-24">
    <div class="absolute bottom-0 right-0 -mb-48 md:inset-y-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/pricing/8/lines.svg" alt="" />
    </div>

    <div class="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="grid items-end grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-20">
            <div>
                <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Join 35k+ web devs & build your next website fast</h2>
                <p class="mt-6 text-base leading-relaxed text-blue-100">Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                <ul class="mt-12 space-y-4 md:mt-20">
                    <li class="flex items-center space-x-3">
                        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                            <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-lg font-medium text-white"> Domain </span>
                    </li>

                    <li class="flex items-center space-x-3">
                        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                            <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-lg font-medium text-white"> 120+ Coded Blocks </span>
                    </li>

                    <li class="flex items-center space-x-3">
                        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                            <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-lg font-medium text-white"> Unlimited Exports </span>
                    </li>

                    <li class="flex items-center space-x-3">
                        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                            <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-lg font-medium text-white"> Design Files Included </span>
                    </li>

                    <li class="flex items-center space-x-3">
                        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                            <svg class="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <span class="text-lg font-medium text-white"> Commercial License </span>
                    </li>
                </ul>
            </div>

            <div class="lg:px-12">
                <div class="overflow-hidden text-center bg-white rounded-md shadow-md">
                    <div class="px-12 py-10">
                        <h3 class="text-xs font-semibold tracking-widest uppercase text-rose-400">Full Pack</h3>
                        <p class="mt-4 text-6xl font-bold text-black">$79</p>

                        <a href="#" title="" class="inline-flex items-center justify-center w-full px-4 py-4 mt-10 font-semibold text-white transition-all duration-200 rounded-full bg-rose-400 hover:bg-rose-500 focus:bg-rose-500" role="button">
                            Get full access
                            <svg class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </a>

                        <div class="flex items-center justify-center mt-5">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span class="ml-2 text-sm text-gray-500"> 14 Days Moneyback Guarantee </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="lg:max-w-3xl">
            <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">What our customers say</h2>

            <div class="mt-20">
                <blockquote>
                    <p class="text-2xl leading-relaxed text-black md:leading-relaxed md:text-3xl">“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save. No need to think twice before making it”</p>
                </blockquote>
                <div class="flex items-center mt-16">
                    <p class="text-lg font-semibold text-black">Jenny Wilson</p>
                    <p class="ml-3 text-lg text-gray-600">Co-founder, Appson</p>
                </div>
            </div>

            <div class="flex items-center mt-12 space-x-4">
                <div class="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-fuchsia-600">
                    <img class="object-cover w-20 h-20 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-1.jpg" alt="" />
                </div>

                <div class="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-transparent">
                    <img class="object-cover w-20 h-20 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-2.jpg" alt="" />
                </div>

                <div class="flex items-center justify-center w-24 h-24 rounded-full ring-2 ring-transparent">
                    <img class="object-cover w-20 h-20 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/9/avatar-3.jpg" alt="" />
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