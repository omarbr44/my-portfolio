<template>
    <section >
        <div class="abb">
        <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
  
  <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
  
  <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
  
  <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
  <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
  <div class="glowing">
    
    <span style="--i:1;"></span>
    
    <span style="--i:2;"></span>
    
    <span style="--i:3;"></span>
    
  </div>
</div>

<section class="">
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" class=" mx-auto text-center lg:px-52 lg:pt-10 md:px-20 md:pt-32 sm:px-5 sm:pt-32 pb-40 sm:pb-20 bk-img">
       
<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" id="toast-default" class="ml-auto mr-auto flex items-center justify-end w-full sm:w-3/4 max-w-xs p-4 sm:p-2 sm:py-4 text-gray-500 bg-white rounded-lg shadow md:mb-5 sm:mb-7" role="alert">
  <div class="ml-3 text-sm font-normal">
  <h1 class="text-lg">بمناسبة افتتاح الموقع </h1>
        <p
        >
        خصم على تطوير المواقع التعريفية بورتفوليو
-      خاص بأصحاب المهن 
      <br>
      مصممين - مصورين - ناشرين ... الخ

    </p>
  </div>
  <div>
  <div class="mb-3 inline-flex items-center mx-1 justify-center flex-shrink-0 w-8 h-8 text-site-secondary bg-blue-900 rounded-lg ">
      <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
      </svg>
  </div>
  <h1 class="text-xl sm:text-lg">40%</h1>
</div>
</div>

        <h1 class="mb-1 h-auto text-6xl font-normal tracking-tight leading-none md:text-7xl lg:text-9xl bg-gradient-to-r from-white to-to-heading inline-block bg-clip-text text-transparent" style="line-height: 1.5;">
             لـنـحـكـي<br> قــــــصــــــتــــــك
        </h1>
       
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">بأسلوبنا الخاص</p>
        <div >
        <svg class="ml-auto mr-auto" 
          width="30px" viewBox="0 0 14.334 24.75" >
            <circle class="circle-1" fill="white" cx="7.167" cy="6" r="1.2"/>
            <circle class="circle-2" fill="white" cx="7.167" cy="6" r="1.2"/>
          <path stroke="white" fill="transparent" d="M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416                   c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z"/>
        </svg>
        <p class="text-white my-1">انزل لتكملة القصة</p>
      </div>
      </div>
     <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" class="mb-8 lg:mb-16 sm:mb-1 text-center mt-24 p-5  text-white">
      <h4  class="text-3xl sm:text-lg text-anim " >{{ content }}</h4>
      <p  class="text-xl sm:text-lg mt-8 mx-6" >جميع هذه العوامل هي ما يدفعنا في كل مرة لتخطي حدودنا وإبهار عملائنا</p>
      <p  class="text-lg sm:text-sm text-gray-500" >بالعامية : نخليك تقول وااو </p>
        </div> 
</section>
  <div class="txt-scm p-3 pb-52 flex justify-center  w-full">
    <p class="text-2xl text-white mx-3  order-3 aaa" >الخروج</p>
    <p class="text-2xl text-white mx-3 order-1 aaa2">خارج</p>
    <p class="text-2xl text-white mx-3 order-2 aaa3">الصندوق</p>
    <p class="text-2xl text-white mx-3 order-5 aaa4">يحتاج</p>
    <p class="text-2xl text-white mx-3 order-4 aaa5">الى</p>
  </div>
</section>
</template>

<script setup>
import { ref,onMounted } from 'vue';

const content = ref('الرغبة القوية لصنع تغيير')

onMounted(()=>{
  const { gsap} = window;
  gsap.registerPlugin('ScrollTrigger');

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.txt-scm',
      start: 'top center',
      end: 'bottom center',
      scrub: true
    }
  })

tl.to(".aaa", {
  order: 5
});
tl.to(".aaa2", {
  order: 4
});
tl.to(".aaa3", {
  order: 3
});
tl.to(".aaa4", {
  order: 2
});
tl.to(".aaa5", {
  order: 1
});
  
  setInterval(() => {
    updateContent();
  }, 2000);

}) 
  
   const updateContent = ()=> {
      switch (content.value) {
        case 'الرغبة القوية لصنع تغيير':
          content.value = 'الرغبة في القيام بأشياء عظيمة';
          break;
        case 'الرغبة في القيام بأشياء عظيمة':
        content.value = 'الرغبة في ان تكون فريدا';
          break;
        case 'الرغبة في ان تكون فريدا':
        content.value = 'الرغبة القوية لصنع تغيير';
          break;
      }
    }
  
</script>

<style scoped>
h1,h2,h3,h4,h5{
  font-family: 'din-next-arabic';
}
p{
  font-family: 'din-next-arabicmd';
}
.bk-img{
  background-image: url(https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80);
}
.bk-img::before{
  content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #000;
		z-index: -1;
		opacity:0.8;
}
.circle-1, .circle-2 {
  animation: scroll 2s infinite linear;
  opacity:0;
}

.circle-2{
  animation-delay: 1s;
}

@keyframes scroll {
  0% {
    cy: 4;
    opacity: 0;
  }
  45%, 55% {
    opacity: 1;
    cy: 9;
  }
  100% {
    cy: 14;
    opacity: 0;
  }
}
.abb {
  display: flex; 
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: 2;
}
.glowing {
  position: relative;
  min-width: 700px;
  height: 550px;
  margin: -150px;
  transform-origin: right;
  animation: colorChange 5s linear infinite;
}

.glowing:nth-child(even) {
  transform-origin: left;
}

.glowing span {
  position: absolute;
  top: calc(80px * var(--i));
  left: calc(80px * var(--i));
  bottom: calc(80px * var(--i));
  right: calc(80px * var(--i));
}

.glowing span::before {
  content: "";
  position: absolute;
  top: 50%;
  left: -8px;
  width: 7px;
  height: 7px;
  background: #91fd00;
  border-radius: 50%;
}

.glowing span:nth-child(3n + 1)::before {
  background: white;
  box-shadow: 0 0 20px #91fd00,
    0 0 40px rgba(0,226,255,1),
    0 0 60px rgba(0,226,255,1),
    0 0 80px rgba(0,226,255,1),
    0 0 0 8px rgba(0,226,255,.1);
}
.glowing span:nth-child(3n + 2)::before {
  background: white;
  box-shadow: 0 0 20px #91fd00,
    0 0 40px rgba(0,226,255,1),
    0 0 60px rgba(0,226,255,1),
    0 0 80px rgba(0,226,255,1),
    0 0 0 8px rgba(0,226,255,.1);
}
.glowing span:nth-child(3n + 3)::before {
  background: white;
  box-shadow: 0 0 20px #91fd00,
    0 0 40px rgba(0,226,255,1),
    0 0 60px rgba(0,226,255,1),
    0 0 80px rgba(0,226,255,1),
    0 0 0 8px rgba(0,226,255,.1);
}

.glowing span:nth-child(3n + 1) {
  animation: animate 24s alternate infinite;
}

.glowing span:nth-child(3n + 2) {
  animation: animate-reverse 20s alternate infinite;
}

.glowing span:nth-child(3n + 3) {
  animation: animate 17s alternate infinite; 
}

@keyframes animate {
  0% {
    transform: rotate(180deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-reverse {
  0% {
    transform: rotate(360deg);
  }
  
  50% {
    transform: rotate(180deg);
  }
  
  100% {
    transform: rotate(0deg);
  }
}

.text-anim {
  position: relative;
  letter-spacing: 1px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #ffffff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animatee 2s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animatee {
  0% {
    background-position: 500%;
  }
  100% {
    background-position: -500%;
  }
}
</style>