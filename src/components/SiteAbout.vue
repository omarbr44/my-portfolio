<template>
<section data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="600">
  <div class="py-36 lg:px-32 md:px-24 sm:px-16 mb-14" >
    <div class=" flex flex-row justify-around items-center ">
      <h3 class=" header-line lg:text-5xl md:text-4xl sm:text-3xl  text-white mb-2 [text-shadow:1px_2px_3px_black]">خدماتنا</h3>
    </div>
    <div class=" flex lg:flex-row sm:flex-col md:flex-col justify-between mt-20">
        <div class="">
          <h3 class=" hover:scale-150 transition duration-300 [text-shadow:1px_2px_3px_black] circle text-white  h-auto text-4xl font-normal tracking-tight leading-none md:text-5xl lg:text-5xl text-center">تطوير <br class=" md:hidden">المواقع</h3>
        </div>
        <div class="">
          <h3 class="hover:scale-150 transition duration-300 [text-shadow:1px_2px_3px_black] circle text-white md:my-28 sm:my-24 h-auto text-4xl font-normal tracking-tight leading-none md:text-5xl lg:text-5xl text-center"> التصميم <br class=" md:hidden"> الجرافيكي</h3>
        </div>
        <div class="">
          <h3 class="hover:scale-150 transition duration-300 [text-shadow:1px_2px_3px_black] circle text-white  h-auto text-4xl font-normal tracking-tight leading-none md:text-5xl lg:text-5xl text-center">إدارة <br class=" md:hidden"> الحسابات</h3>
        </div>
    </div>
  </div>
</section>
</template>

<script setup>
   
</script>

<style scoped>
h1,h2,h3,h4,h5{
  font-family: 'din-next-arabicmd';
}
.header-line{
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  font-family: 'din-next-arabic';

}
.header-line::before{
  content: '';
  position: absolute;
  width: 10.5rem;
  height: 1rem;
  border-radius: 4%;
  background-color: #91fd00;
  z-index: -1;
  bottom: 4px;
}
.circle{
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  
}
.circle::before{
  content: '';
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #91fd00;
  z-index: -1;
  bottom: 1px;
}
@media (max-width: 1024px) { 
  .circle::before{

  bottom: -1rem;
}
}

</style>