<script setup>
  import {  RouterView } from 'vue-router'
  import { onMounted } from 'vue'
  import 'aos/dist/aos.css'
  import AOS from 'aos'

  onMounted (()=>{
  AOS.init()
  
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
/* 
lenis.on('scroll', (e) => {
  console.log(e)
})
 */
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
})
</script>
<template>
    <RouterView />
</template>

<style lang="scss">

html::-webkit-scrollbar {
            width: 11px;
        }
        
        html::-webkit-scrollbar-track {
            border-radius: 2px;
            background-color: #0c0c0c
        }
        
        html::-webkit-scrollbar-thumb {
            border-radius: 8px;
          border: 3px solid transparent;
           background-clip: content-box;
            background-color: #ffffff;
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
  font-family: 'SIMPLIFICA';
  src: url(./assets/fonts/SIMPLIFICA_Typeface.ttf);
}
</style>
