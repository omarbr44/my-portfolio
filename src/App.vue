<script setup>
  import {  RouterView } from 'vue-router'
  import { onMounted } from 'vue'
  import 'aos/dist/aos.css'
  import AOS from 'aos'

  onMounted (()=>{
  AOS.init()
})
</script>
<template>
    <RouterView />
</template>

<style>
html {
  scroll-behavior: smooth;
}
@font-face {
  font-family: 'din-next-arabic';
  src: url(./assets/fonts/din-next-arabic-bold.ttf);
}
@font-face {
  font-family: 'din-next-arabicmd';
  src: url(./assets/fonts/DINNextLTArabic-Medium-4.ttf);
}
@font-face {
  font-family: 'Vanity-Bold';
  src: url(./assets/fonts/Vanity-Light.ttf);
}
@font-face {
  font-family: 'SIMPLIFICA';
  src: url(./assets/fonts/SIMPLIFICA_Typeface.ttf);
}
</style>
