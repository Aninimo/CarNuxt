<template>
  <div class="modal-overlay" @click="$emit('close-modal')" style="z-index: 9999;">
    <div class="modal" @click.stop>
      <template v-if="!userLoggedIn && !showRegisterForm">
        <h6>Login</h6>
        <form @submit.prevent="login">
          <div class="flex flex-col mt-4">
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              v-model="formData.email"
              class="w-60 border p-2 rounded"
            />
            <div class="flex flex-col mt-8">
              <label>Password</label>
              <input
                type="password" 
                placeholder="password"
                v-model="formData.password"
                class="w-60 border p-2 rounded"
              />
            </div>
          </div>
          <button class="bg-green-500 text-white rounded p-2 px-24 mt-12 ease-in duration-300 hover:bg-green-600">
            Login
          </button>
        </form>
        <p class="mt-8" @click="showRegisterForm = true">Não tem uma conta? Registre-se</p>
      </template>

      <template v-else-if="showRegisterForm">
        <h6>Register-se</h6>
        <form @submit.prevent="register">
          <div class="flex flex-col mt-4">
            <label>Name</label>
            <input
              placeholder="name"
              v-model="formData.name"
              class="w-60 border p-2 rounded"
            />
          </div>
          <div class="flex flex-col mt-4">
            <label>Email</label>
            <input
              placeholder="email"
              v-model="formData.email"
              class="w-60 border p-2 rounded"
            />
            <div class="flex flex-col mt-8">
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                v-model="formData.password"
                class="w-60 border p-2 rounded"
              />
            </div>
          </div>
          <button class="bg-green-500 text-white rounded p-2 px-24 mt-12 ease-in duration-300 hover:bg-green-600">
            Registrar
          </button>
        </form>
        <p class="mt-8" @click="showRegisterForm = false">Já tem uma conta? Faça login</p>
      </template>

      <template v-else>
        
        <h6>Bem-vindo, {{ formData.name }}</h6>
        <p>Você está logado!</p>
        <button @click="userLoggedIn = false">Sair</button>
      </template>
    </div>
    <div class="close" @click="$emit('close-modal')">x</div>
  </div>
</template>

<script>
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  export default {
  data() {
    return {
      userLoggedIn: false,
      showRegisterForm: false, 
      formData:{
        name: "",
        email: "",
        password: ""
      },
      loading: false,
      errorMessage: ''
    };
  },
  methods:{
    async login(){
      this.loading = true;
      try{
        const response = await fetch("http://localhost:3001/api/userLogin",{
          method: "POST",
          headers:{
            'Content-Type': "application/json"
          },
          body: JSON.stringify(this.formData)
        })
        const responseData = await response.json();
        if (response.ok) {
          this.userLoggedIn = true;
        } else {
          this.errorMessage = responseData.error || "Error logging in.";
          toast.error("User not found or invalid credentials."); 
        }
      } catch(error){
        toast.error("Error when making the request");
        console.error(error);
        this.errorMessage = "Error when making the request"
      } finally {
        this.loading = false;
     }
   },

    async register(){
    this.loading = true;
    try{
      const response = await fetch("http://localhost:3001/api/userRegister",{
         method: "POST",
         headers:{
          'Content-Type': "application/json"
         },
         body: JSON.stringify(this.formData)
      })
      const responseData = await response.json();
      if (response.ok) {
        toast.success("User registered successfully!");
        console.log(responseData); 
      } else {
          if (response.status === 409) {
          toast.error("This email is already in use.");
        } else {
          toast.error("Error registering user.");
        }
      }
    }catch(error){
      toast.error("Error when making the request");
      console.error(error);
    }finally{
      this.loading = false;
    }
  }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
  z-index: 10000; 
}

.close {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #22c55e;
  border-radius: 50px;
  font-weight: bold;
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
</style>
