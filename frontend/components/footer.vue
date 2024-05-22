<template>
  <footer class="flex justify-center bg-green-500 text-white p-12" id="contact">
    <div class="flex flex-col gap-24 md:flex-row animate-slide-left" ref="footerContent">
      <div>
        <strong>CarNux</strong>
        <p class="w-72 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla arcu tortor, pretium eu leo eget, hendrerit efficitur ex.
        </p>
        <div>
          <ul class="flex gap-12 mt-8">
            <li class="w-12 h-12 border border-white rounded-full flex justify-center items-center"><i class="fa-brands fa-youtube"></i></li>
            <li class="w-12 h-12 border border-white rounded-full flex justify-center items-center"><i class="fa-brands fa-instagram"></i></li>
            <li class="w-12 h-12 border border-white rounded-full flex justify-center items-center"><i class="fa-brands fa-twitter"></i></li>
          </ul>
        </div>
      </div>

      <div>
        <strong>Quick links</strong>
        <ul class="mt-2">
          <li>Home</li>
          <li>Services</li>
          <li>How it works</li>
          <li>Cars</li>
          <li>Reviews</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <strong>Services</strong>
        <ul class="mt-2">
          <li>Wedding Rides</li>
          <li>Corporate Rides</li>
          <li>Executives Rides</li>
        </ul>
      </div>

      <div>
        <strong>Contact Us</strong>
        <ul class="mt-2">
         <li class="flex items-center gap-4 mb-4">
           <div class="w-12 h-12 bg-green-300 rounded flex justify-center items-center">
             <i class="fa-solid fa-phone"></i>
           </div>
           <div>
             <p>Phone number</p>
             <p>+00 0000-0000</p>
           </div>
         </li>

         <li class="flex items-center gap-4 mb-4">
           <div class="w-12 h-12 bg-green-300 rounded flex justify-center items-center">
             <i class="fa-solid fa-envelope"></i>
           </div>
           <div>
             <p>Email Address</p>
             <p>email@email.com</p>
           </div>
         </li>

         <li class="flex items-center gap-4">
           <div class="w-12 h-12 bg-green-300 rounded flex justify-center items-center">
             <i class="fa-solid fa-location-dot"></i>
           </div>
           <div>
             <p>2746 Victoria Park Avenue Toronto,</p>
             <p>Ontario M2J 4AB, New York</p>
           </div>
         </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
  import '@fortawesome/fontawesome-free/css/all.css'
  import { onMounted, onUnmounted } from 'vue'

  export default {
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const footerContent = this.$refs.footerContent;
        const sectionTop = footerContent.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
          footerContent.classList.add('visible');
        } else {
          footerContent.classList.remove('visible');
        }
      }
    }
  }
</script>

<style>
  @keyframes slideLeft {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .animate-slide-left {
    opacity: 0;
    transform: translateX(-50%);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .animate-slide-left.visible {
    opacity: 1;
    transform: translateX(0);
  }
</style>
