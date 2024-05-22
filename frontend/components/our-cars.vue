<template>
  <section class="p-8 mb-12 animate-slide-down2" :class="{ 'visible': isSectionVisible }" id="our-cars">
    <h1 class="text-3xl text-center">
      Our <span class="text-green-500">Super Cars</span>
    </h1>
    <p class="text-gray-500 text-center mt-4 mb-20">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae nunc nulla. Cras tempor metus gravida, <br/> efficitur nisl ac, malesuada eros. Aenean tempus velit purus.
    </p>
    <swiper
      :slidesPerView="2"
      :spaceBetween="10"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '@0.75': {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="car in cars" :key="car.id">
        <div class="bg-gray-200 p-4 rounded-md md:flex md:flex-col md:justify-center md:items-center">
          <nuxt-link :to="'/car/' + car.id" class="md:flex md:flex-col md:items-center md:text-center">
            <nuxt-img
              preload
              format="webp"
              :placeholder="img(`${image}`, { h: 160, f: 'png', blur: 2, q: 50 })"
              :src="car.imageUrl"
              class="mb-4 md:mb-8 "
            /> 
            <p class="text-center font-bold">{{ car.name }}</p>
            <div class="w-full flex justify-between items-center mt-4 md:mt-8">
              <p class="font-bold text-xl">
                <strong class="text-green-500">${{ car.price }}/</strong>Day
              </p>
              <div>
                <span class="text-gray-500">50 reviews</span>
              </div>
            </div>
            <div class="flex justify-center mt-8">
              <ul class="flex gap-4 md:gap-8">
                <li class="">
                  <div class="w-12 h-12 bg-green-200 flex justify-center items-center text-green-400 mb-2">
                    <i class="fa-solid fa-couch"></i>
                  </div>
                  4 Seats
                </li>
                <li>
                  <div class="w-12 h-12 bg-green-200 flex justify-center items-center text-green-400 mb-2">
                    <i class="fa-solid fa-fan"></i>
                  </div>
                  AC
                </li>
                <li>
                  <div class="w-12 h-12 bg-green-200 flex justify-center items-center text-green-400 mb-2">
                    <i class="fa-solid fa-crutch"></i>
                  </div>
                  Auto
                </li>
                <li>
                  <div class="w-12 h-12 bg-green-200 flex justify-center items-center text-green-400 mb-2">
                    <i class="fa-solid fa-gas-pump"></i>
                  </div>
                  Eletric
                </li>
              </ul>
            </div>
            <button
              class="w-full border border-green-500 text-green-500 p-2 px-8 rounded mt-8 md:mt-12 ease-in duration-300 hover:bg-green-500 hover:text-white">
              Rental now
            </button>
          </nuxt-link>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination, Navigation } from "swiper/modules";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";

  const img = useImage();
  const cars = ref([]);
  const swiperRef = ref(null);
  const modules = [Pagination, Navigation];

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/dados');
      if (!response.ok) {
        throw new Error('Erro ao obter os dados da API');
      }
      cars.value = await response.json();
    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  };

  onMounted(() => {
    fetchData();
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const section = document.getElementById('our-cars');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('visible');
    }
  };
</script>

<style>
  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-down2 {
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .animate-slide-down2.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
