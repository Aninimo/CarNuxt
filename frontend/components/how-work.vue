<template>
  <section class="bg-slate-200 mt-32 p-8" ref="section" id="how-work-it">  
    <h1 class="font-bold text-center text-3xl mb-16">How It <span class="text-green-500">Works</span></h1>
    <div class="flex flex-col justify-around md:flex-row">
      <div class="bg-white p-4 rounded text-center flex flex-col justify-center items-center mb-8 md:mb-0 transition ease-in-out delay-150 hover:-translate-y-12 duration-500" ref="item1">
        <div class="w-12 h-12 bg-green-200 rounded flex justify-center items-center text-green-500 mb-4">
          <i class="fa-solid fa-map-location-dot"></i>
        </div>
        <strong class="">Choose a location</strong>
        <p class="w-72 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue sed ipsum commodo tincidunt.
        </p>
      </div>

      <div class="bg-white p-4 rounded text-center flex flex-col justify-center items-center mb-8 md:mb-0 transition ease-in-out delay-150 hover:-translate-y-12 duration-500" ref="item2">
        <div class="w-12 h-12 bg-green-200 rounded flex justify-center items-center text-green-500 mb-4">
          <i class="fa-solid fa-calendar-days"></i>
        </div>
        <strong class="">Pick-Up Date</strong>
        <p class="w-72 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue sed ipsum commodo tincidunt.
        </p>
      </div>

      <div class="bg-white p-4 rounded text-center flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-12 duration-500" ref="item3">
        <div class="w-12 h-12 bg-green-200 rounded flex justify-center items-center text-green-500 mb-4">
          <i class="fa-solid fa-car"></i>
        </div>
        <strong class="">Book Your Car</strong>
        <p class="w-72 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue sed ipsum commodo tincidunt.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import '@fortawesome/fontawesome-free/css/all.css'
  export default {
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const section = this.$refs.section;
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          this.animateItem(this.$refs.item1);
          this.animateItem(this.$refs.item2, 150);
          this.animateItem(this.$refs.item3, 300);
        }
      },
      animateItem(item, delay = 0) {
        setTimeout(() => {
          item.classList.add('animate');
        }, delay);
      }
    }
  }
</script>

<style scoped>
  .animate {
    animation-name: slideInFromTop;
    animation-duration: 2s; 
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(-50px);
  }

  @keyframes slideInFromTop {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
