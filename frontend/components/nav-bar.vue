<template>
  <nav>
    <div class="p-8">
      <div class="flex items-center justify-between h-16">
        <div class="w-full flex justify-between items-center">
          <div>CarNuxt</div>
          <div class="hidden md:block">
            <ul class="ml-10 flex items-baseline space-x-4">
              <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME</li>
              <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('services')">SERVICES</li>
              <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('how-it-works')">HOW IT WORKS</li>
              <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('our-cars')">CARS</li>
              <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('customers')">REVIEWS</li>
              <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('contact')">CONTACT</li>
              <button @click="showModal = true" class="bg-green-400 text-green-600 rounded p-2 px-4">
                <i class="fa-solid fa-user"></i>
              </button>
            </ul>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button @click="toggleMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-green-500 focus:outline-none focus:bg-green-500 focus:text-white" aria-controls="mobile-menu" :aria-expanded="open">
            <span class="sr-only">Open main menu</span>
            <svg :class="{'hidden': open, 'block': !open}" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg :class="{'block': open, 'hidden': !open}" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="{'block': open, 'hidden': !open}" class="bg-green-500 md:hidden" id="mobile-menu">
      <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">HOME</li>
        <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('services')">SERVICES</li>
        <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('how-it-works')">HOW IT WORKS</li>
        <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('our-cars')">CARS</li>
        <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('customers')">REVIEWS</li>
        <li class="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium" @click="toggleMenu; scrollToSection('contact')">CONTACT</li>
        <button @click="showModal = true" class="bg-green-400 text-green-600 rounded p-2 px-4">
          <i class="fa-solid fa-user"></i>
        </button>
      </ul>
    </div>
  </nav>
  <Modal v-show="showModal" @close-modal="showModal = false" />
</template>

<script>
  export default {
    data() {
      return {
        open: false,
        showModal: false,
      };
    },
    methods: {
      toggleMenu() {
        this.open = !this.open;
      },

      scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
  };
</script>
