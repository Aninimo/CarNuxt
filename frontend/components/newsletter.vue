<script setup>
  import { onMounted, onUnmounted } from 'vue';
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";

  const submit = () => {
    const email = document.getElementById("email").value;

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("You have successfully subscribed to our newsletter!");
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const section = document.querySelector('.animate-slide-down');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('visible');
    }
  }
</script>

<template>
  <section class="flex flex-col justify-center items-center mt-20 mb-20 animate-slide-down">
    <h1 class="text-2xl text-center">Subscribe Our <span class="text-green-500">Newsletter</span></h1>
    <div class="flex mt-4">
      <input
        placeholder="Enter your email address..."
        class="w-64 bg-gray-300 p-2 rounded"
        id="email"
      />
      <button 
        @click="submit"
        class="bg-green-500 p-2 px-8 rounded ease-in duration-300 hover:bg-green-600">
        Subscribe
      </button>
    </div>
  </section>
</template>

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

  .animate-slide-down {
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }

  .animate-slide-down.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
