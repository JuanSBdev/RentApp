import React from 'react'

export default function Footer() {
  return (
    <div>
        <div class="relative ">
    <div class="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="currentColor" class="w-full -mb-1 text-white" preserveAspectRatio="none">
            <path
                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
            </path>
        </svg>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-[#259073] ">
              Subscribe to our newsletter
            </h2>
            <p class="mb-6 text-base text-gray-200 md:text-lg">
            Find the perfect accommodation for your next trip in the Sierras de Córdoba, Argentina, with our app. Explore a wide range of options, from cozy rural houses to luxurious hotels in dreamy destinations. Your next journey starts here.
            </p>
            <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                <input
          placeholder="Email"
          required=""
          type="text"
          class="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
        />
                <a href="/"
                    class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-[#e2d9c2] transition duration-200 rounded shadow-md md:w-auto  bg-[#259073] hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none">
                    Subscribe
                </a>
            </form>
            <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
            © 2023 Your Accommodation Search App in the Sierras de Córdoba, Argentina
            </p>
           
        </div>
    </div>
</div>
    </div>
  )
}
