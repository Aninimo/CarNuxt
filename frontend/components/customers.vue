<script setup>
  import '@fortawesome/fontawesome-free/css/all.css'
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination, Navigation } from "swiper/modules";

  import "swiper/css" ;
  import "swiper/css/pagination";
  import "swiper/css/navigation";

  import { customers } from "~/constants/customers";
</script>

<template>
  <section class="bg-slate-200 p-8 md:py-16 mb-20" id="customers">
    <div class="mb-8">
      <h2 class="text-3xl md:text-4xl lg:text-5xl mb-4">
        What <span class="text-green-500">Our <br class="hidden md:inline"/> Customers</span> Say's
      </h2>
      <p class="text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a justo sed erat venenatis sollicitudin. Curabitur tincidunt justo enim, in porttitor risus feugiat ac. Suspendisse ultrices augue arcu, sed blandit dolor interdum et. 
      </p>
    </div>

    <div>
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
        <swiper-slide v-for="customer in customers" :key="customer.id">
          <div class="w-full md:w-80 flex flex-col justify-center items-center text-center bg-white p-4 rounded">
            <div class="w-20 h-20 border-4 border-green-500 rounded-full">
              <img 
                src="https://github.com/Aninimo.png"
                class="w-20 rounded-full mb-4"/>
            </div>
            <i class="fa-solid fa-quote-left text-green-500 text-2xl mt-4 mb-4"></i>
            <strong class="text-lg md:text-xl lg:text-2xl">
              {{ customer.name }}
            </strong>
            <p class="text-sm md:text-base">
              {{ customer.description }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
