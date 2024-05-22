<template>
  <section class="flex flex-col items-center p-8 mt-12 mb-12 animate-slide-in md:flex-row" id="services" ref="animationSection">
    <div class="animate-slide-left">
      <img src="https://www.ford.com.br/content/dam/Ford/website-assets/latam/br/nameplate/2023/mustang-mach-e/overview/colorizer/cinza-tores/fbr-mustang-mach-e-coloriser-cinza-torres.jpg.dam.full.high.jpg/1697465311018.jpg"/>
    </div>
    <div class="animate-slide-right mt-4 md:mt-0">
      <h2 class="text-3xl">
        <span class="text-green-500">Feel The</span> Best Experience <br/> With Our <span class="text-green-500">Rental Deals</span>
      </h2>
      <div>
        <ul class="mt-8"> 
          <li class="flex items-center gap-8 mb-4">
            <div class="w-20 h-12 flex justify-center items-center bg-green-200 p-2 rounded text-green-500">
              <i class="fa-solid fa-user-group"></i>
            </div>
            <div>
              <strong>Customer Satisfaction</strong>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit accumsan tempor. Sed ante sapien, vehicula non feugiat non, vehicula at mauris.
              </p>
            </div>
          </li>

          <li class="flex items-center gap-8 mb-4">
            <div class="w-20 h-12 flex justify-center items-center bg-green-200 p-2 rounded text-green-500">
              <i class="fa-solid fa-wallet"></i>
            </div>
            <div>
              <strong>Faster Booking</strong>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit accumsan tempor. Sed ante sapien, vehicula non feugiat non, vehicula at mauris.
              </p>
            </div>
          </li>

          <li class="flex items-center gap-8">
            <div class="w-20 h-12 flex justify-center items-center bg-green-200 p-2 rounded text-green-500">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <strong>Many Pickup Locations</strong>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit accumsan tempor. Sed ante sapien, vehicula non feugiat non, vehicula at mauris.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-slide-in .animate-slide-left {
    animation: slideInLeft 1s ease-out forwards;
  }

  .animate-slide-in .animate-slide-right {
    animation: slideInRight 1s ease-out forwards;
  }
</style>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$refs.animationSection;
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('animate-slide-in');
      } else {
        section.classList.remove('animate-slide-in');
      }
    }
  }
}
</script>
