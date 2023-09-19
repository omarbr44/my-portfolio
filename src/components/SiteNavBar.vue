<template>
  
  <div v-if="bloc" class="fixed w-full h-screen z-50 right-0">
    <div style="--tw-bg-opacity: 0.6;" class="flex flex-col p-5 bg-site-primary w-full h-screen justify-center items-center rounded-lg " >
      <a @click="showblock" href="#home">
       <h3 class="text-white text-2xl mb-5 sm:text-lg">البداية</h3> 
      </a>
      <a @click="showblock" href="#who"><h3 class="text-white text-2xl sm:text-lg mb-5">من نحن</h3> </a>
      <a @click="showblock" href="#service"><h3 class="text-white text-2xl sm:text-lg mb-5">خدماتنا</h3> </a>
      <a @click="showblock" href="#work"><h3 class="text-white text-2xl sm:text-lg mb-5">اعمالنا</h3> </a>
      <a @click="showblock" href="#conta"><h3 class="text-white text-2xl sm:text-lg mb-5">تواصل معنا</h3> </a>
    </div>
  </div>
  <div  class="fixed right-0 z-30 p-4 rounded-md ">
    <img src="../assets/OB.png" width="40" alt="">
  </div>
    <div  class="fixed z-50 left-0 p-4">
    <svg v-if="!bloc" @click="showblock" class="ml-auto cursor-pointer" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7L7 7M20 7L11 7" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M20 17H17M4 17L13 17" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M4 12H7L20 12" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <svg class="ml-auto cursor-pointer p-1" @click="showblock" v-if="bloc" fill="#ffffff" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
    </div>
  <div v-if="bloc" @click="showblock" class="z-40 block-back" ></div>
</template>

<script setup>
import { ref } from 'vue';

const bloc = ref(false)
const showblock = ()=>{
	bloc.value = !bloc.value
}
</script>

<style >
h3{
  font-family: 'din-next-arabic';
}
.block-back{
  position: fixed;
    background: #1a1a1a;
    width: 100%;
    height: 100%;
    opacity: 0.1;
}
</style>