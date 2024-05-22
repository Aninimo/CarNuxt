<template>
  <section class="p-8" id="car-details">
    <h1 class="text-3xl text-center mb-20">
      Car Details
    </h1>
    <div v-if="car">
      <div class="flex justify-center mb-8">
        <NuxtImg
          preload
          format="webp"
          :placeholder="img(`${car.imageUrl}`, { h: 180, f: 'png', blur: 2, q: 50 })"
          :src="car.image"
          class="w-6/12"
        />
      </div>
      <h2 class="text-2xl font-bold mb-4">{{ car.name }}</h2>
      <p class="text-lg mb-4">{{ car.description }}</p>
      <p class="text-xl font-bold mb-4">
        Price: <span class="text-green-500">${{ car.price }}</span>/Day
      </p>
      <div class="flex justify-center mb-8">
        <ul class="flex gap-8">
          <li class="text-center">
            <div class="w-12 h-12 bg-green-200 rounded-full flex justify-center items-center text-green-400 mb-2">
              <i class="fa-solid fa-couch"></i>
            </div>
            4 Seats
          </li>
          <li class="text-center">
            <div class="w-12 h-12 bg-green-200 rounded-full flex justify-center items-center text-green-400 mb-2">
              <i class="fa-solid fa-fan"></i>
            </div>
             AC
          </li>
          <li class="text-center">
            <div class="w-12 h-12 bg-green-200 rounded-full flex justify-center items-center text-green-400 mb-2">
              <i class="fa-solid fa-crutch"></i>
            </div>
            Auto
          </li>
          <li class="text-center">
            <div class="w-12 h-12 bg-green-200 rounded-full flex justify-center items-center text-green-400 mb-2">
              <i class="fa-solid fa-gas-pump"></i>
            </div>
            Eletric
          </li>
        </ul>
      </div>
      <button @click="handleRent" class="border border-green-500 text-green-500 p-2 px-8 rounded mt-12 ease-in duration-300 hover:bg-green-500 hover:text-white">
        Rent Now
      </button>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Stripe from 'stripe';

  const img = useImage();
  const carId = ref(null);
  const route = useRoute();
  const car = ref(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/getCar/${carId.value}`);
      if (!response.ok) {
        throw new Error('Error fetching car data from API');
      }
      car.value = await response.json();
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  };

  const handleRent = async () => {
    try {
      const stripe = new Stripe(process.env.STRIPE);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: car.value.name,
                description: car.value.description,
                images: [car.value.image],
              },
              unit_amount: car.value.price * 100, 
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000',
      });
      window.location.href = session.url;
    } catch (error) {
      console.error('Error renting car:', error);
    }
  }

  onMounted(() => {
    carId.value = route.params.id;
    fetchData();
  });
</script>
