<template>
  <section>
    <NavBar/>
    <div class="flex flex-col justify-between p-8 relative md:flex-row"> 
      <div class="animate-left">
        <h1 class="text-4xl">
          Easy And <span class="text-green-500">Fast Way</span> To <br/> <span class="text-green-500">Rent Your</span> Car  
        </h1>
        <p class="w-9/12 mt-8 text-gray-500 md:w-2/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod rhoncus metus, id sollicitudin magna iaculis vel. Morbi nunc lacus, molestie commodo erat et, ornare molestie risus.
        </p>
        <button class="bg-green-500 text-white p-2 px-8 rounded mt-4 ease-in duration-300 hover:bg-green-600"> 
          Book Now
        </button>
      </div>

      <div class="animate-right">
        <img src="https://www.jeep.com.br/content/dam/jeep/wrangler/showroom/v2/sahara_unlimited.webp"/>
      </div>
    </div>
    <div class="w-4/5 mt-12 ml-8 p-8 shadow-2xl">
      <form class="flex flex-col items-center gap-8 animate-left md:flex-row" @submit.prevent="submitForm">
        <div class="flex flex-col">
          <label class="font-bold">Pick Up Location</label>
          <input 
            required 
            v-model="pickupLocation"
            class="border border-gray-500 p-2 rounded"
          />
        </div>

        <div class="flex flex-col">
          <label class="font-bold">Return Location</label>
          <input
            required 
            v-model="returnLocation"
            class="border border-gray-500 p-2 rounded"
          />
        </div>

        <div class="flex flex-col">
          <label class="font-bold">Pick Up Date</label>
          <input
            required
            type="date" 
            v-model="pickupDate"
            class="border border-gray-500 p-2 rounded"
          />
        </div>

        <div class="flex flex-col">
          <label class="font-bold">Return Date</label>
          <input
            required 
            type="date"
            v-model="returnDate"
            class="border border-gray-500 p-2 rounded"
          />
        </div>
        <button class="bg-green-500 text-white rounded p-2 px-12 mt-4">
          Search car
        </button>
      </form>
    </div>
  </section>
</template>

<script>
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';
  
  export default {
    data() {
      return {
        pickupLocation: '',
        returnLocation: '',
        pickupDate: '',
        returnDate: ''
      }
    },
    methods: {
      submitForm() {
        if (this.pickupLocation && this.returnLocation && this.pickupDate && this.returnDate) {
          const pickupTimestamp = new Date(this.pickupDate).getTime();
          const returnTimestamp = new Date(this.returnDate).getTime();

          if (pickupTimestamp >= returnTimestamp) {
            toast.success('The return date must be after the withdrawal date.')
          }
          document.querySelector('#our-cars').scrollIntoView({ behavior: 'smooth' });
        } else {
          toast.error('Por favor, preencha todos os campos!');
        }
      }
    }
  }
</script>

<style>
  .animate-left {
    animation: slideInLeft 1s ease-out;
  }

  .animate-right {
    animation: slideInRight 1s ease-out;
  }

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
</style>
