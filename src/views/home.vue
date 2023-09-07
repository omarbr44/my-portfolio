<script setup>
import SiteNavBar from '../components/SiteNavBar.vue';
import SiteHero from '../components/SiteHero.vue';
import SiteAbout from '../components/SiteAbout.vue';
import SiteContact from '../components/SiteContact.vue';
import { onMounted, ref } from 'vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RouterLink } from 'vue-router';

onMounted(()=>{

    const { gsap, imagesLoaded } = window;

const cardsContainerEl = document.querySelector(".cards__wrapperr");
const cardInfosContainerEl = document.querySelector(".info__wrapper");

function updateCard(e) {
	const card = e.currentTarget;
	const cardtext = e.currentTarget.querySelector('.infoList').querySelector('.info__wrapper').querySelector('.current--info');
	const box = card.getBoundingClientRect();
	const centerPosition = {
		x: box.left + box.width / 2,
		y: box.top + box.height / 2,
	};
	let angle = Math.atan2(e.pageX - centerPosition.x, 0) * (35 / Math.PI);
	gsap.set(card, {
		"--current-card-rotation-offset": `${angle}deg`,
	});
/* 	const currentInfoEl = document.querySelectorAll(".current--info");
 */	
   gsap.set(cardtext, {
		rotateY: `${angle}deg`,
	});

}

function resetCardTransforms(e) {
	const card = e.currentTarget;
	const currentInfoEl = document.querySelectorAll(".current--info");
	gsap.set(card, {
		"--current-card-rotation-offset": 0,
	});
	gsap.set(currentInfoEl, {
		rotateY: 0,
	});
	for (var i = 0; i < currentInfoEl.length; i++) {
   gsap.set(currentInfoEl.item(i), {
		rotateY: 0,
	});
}
}

function initCardEvents() {
	const currentCardEl = cardsContainerEl.querySelectorAll(".current--card");
	for (var i = 0; i < currentCardEl.length; i++) {
   currentCardEl.item(i).addEventListener("pointermove", updateCard);
	currentCardEl.item(i).addEventListener("pointerout", (e) => {
		resetCardTransforms(e);
	});
}
	
}

initCardEvents();

function removeCardEvents(card) {
	card.removeEventListener("pointermove", updateCard);
}

function init() {

	let tl = gsap.timeline();

	tl.to(cardsContainerEl.children, {
		delay: 0.15,
		duration: 0.5,
		stagger: {
			ease: "power4.inOut",
			from: "right",
			amount: 0.1,
		},
		"--card-translateY-offset": "0%",
	})
		.to(document.querySelectorAll(".text"), {
		duration: 0.2,
		stagger: 0.1,
		opacity: 1,
		translateY: 0,
	})
		/* .to(
		[buttons.prev, buttons.next],
		{
			duration: 0.4,
			opacity: 1,
			pointerEvents: "all",
		},
		"-=0.4"
	); */
}

const waitForImages = () => {
	const images = [...document.querySelectorAll("img")];
	const totalImages = images.length;
	let loadedImages = 0;
	const loaderEl = document.querySelector(".loader span");

	gsap.set(cardsContainerEl.children, {
		"--card-translateY-offset": "100vh",
	});
	gsap.set(document.querySelectorAll(".text"), {
		translateY: "40px",
		opacity: 0,
	});
	/* gsap.set([buttons.prev, buttons.next], {
		pointerEvents: "none",
		opacity: "0",
	}); */

	images.forEach((image) => {
        
		imagesLoaded(image, (instance) => {
			if (instance.isComplete) {
				loadedImages++;
				let loadProgress = loadedImages / totalImages;

				gsap.to(loaderEl, {
					duration: 1,
					scaleX: loadProgress,
					backgroundColor: `hsl(${loadProgress * 120}, 100%, 50%`,
				});

				if (totalImages == loadedImages) {
					gsap.timeline()
						.to(".loading__wrapper", {
						duration: 0.8,
						opacity: 0,
						pointerEvents: "none",
					})
						.call(() => init());
				}
			}
		});
	});
};

waitForImages();

})

</script>
<template>
    <div class="bg-site-primary" > 
<SiteNavBar />
<SiteHero id="home" />
<SiteAbout id="service" />
	<div id="work" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="400" class=" flex flex-row justify-around items-center ">
      	<h3 class=" header-line lg:text-5xl md:text-4xl sm:text-3xl text-white mb-2 [text-shadow:1px_2px_3px_black]">اعمالنا</h3>
    </div>
    <section>
      	<h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="400" class=" lg:text-3xl md:text-2xl sm:text-2xl right-block text-end text-white mb-2 [text-shadow:1px_2px_3px_black]">التصميم</h3>
		<div  style="margin: 2rem;" class="scrollbar" id="scrollbar1">
    <div class="grid grid-cols-3 grid-rows-8  grid-flow-row-dense gap-4">
		<div class="grid col-span-3 row-span-2 gap-4">
		<div class="col-span-3 row-span-2">
			<img class="w-full sm:h-40 rounded-lg blcandwit" src="../assets/finale-2.jpg"  alt="">
		</div>
		</div>
		<div class="grid gap-4">
			<div class="col-span-1 row-span-1">
				<img class=" h-full w-full  sm:h-56 rounded-lg blcandwit" src="../assets/finale.jpg" alt="">
			</div>
			<div class="col-span-1 row-span-1">
				<img class="h-full w-full sm:h-44 rounded-lg blcandwit" src="../assets/cooki2.jpg" alt="">
			</div>
			<div class="col-span-1 row-span-1">
				<img class="h-full w-full sm:h-44 rounded-lg blcandwit" src="../assets/cooki3(2).jpg" alt="">
			</div>
		</div>
		<div class="grid gap-4">
			<div class="col-span-1 row-span-1">
				<img class="h-full w-full sm:h-44 rounded-lg blcandwit" src="../assets/port3.jpg" alt="">
			</div>
			<div class="col-span-1 row-span-1">
				<img class=" h-full w-full sm:h-56 rounded-lg blcandwit" src="../assets/infogra.jpg" alt="">
			</div>
			<div class="col-span-1 row-span-1">
				<img class="h-full w-full sm:h-44  rounded-lg blcandwit" src="../assets/icecream.jpg" alt="">
			</div>
		</div>
		<div class="grid gap-4">
			<div class="col-span-1 row-span-1">
				<img class="h-full w-full sm:h-44 rounded-lg blcandwit" src="../assets/card1.jpg" alt="">
			</div>
			<div class="col-span-1 row-span-1">
				<img class="h-full w-full sm:h-44 rounded-lg blcandwit" src="../assets/oreo.jpg" alt="">
			</div>
			<div class="col-span-1 row-span-1">
				<img class=" h-full w-full sm:h-56 rounded-lg blcandwit" src="../assets/cooki.jpg" alt="">
			</div>
		</div>
		<div class="grid col-span-3 row-span-2 gap-4">
		<div class="col-span-3 row-span-2">
			<img class="w-full sm:h-52 rounded-lg blcandwit" src="../assets/planets1.jpg"  alt="">
		</div>
		</div>
    </div>
    
	</div>
	<a title="Behance" class="icons1  flex justify-center" rel="noopener"  href="https://behance.net/ibarbo44448c10" target="_blank">
                <svg width="33px" height="33px" viewBox="0 -3.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    <title>behance [#163]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-100.000000, -7482.000000)" >
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path class="st0" d="M56.981,7324.11726 L62.069,7324.11726 L62.069,7322.65997 L56.981,7322.65997 L56.981,7324.11726 Z M59.489,7327.04322 C58.354,7327.04322 57.492,7327.74656 57.409,7329.04584 L61.481,7329.04584 C61.205,7327.50385 60.52,7327.04322 59.489,7327.04322 L59.489,7327.04322 Z M59.648,7333.06968 C60.696,7333.06968 61.465,7332.40764 61.622,7331.84992 L63.826,7331.84992 C63.196,7333.86701 61.895,7335 59.559,7335 C56.578,7335 54.905,7332.87964 54.905,7330.06626 C54.905,7323.44077 64.465,7323.20323 63.985,7330.68491 L57.409,7330.68491 C57.473,7332.20418 58.1,7333.06968 59.648,7333.06968 L59.648,7333.06968 Z M49.73,7332.77842 C50.933,7332.77842 51.775,7332.31572 51.775,7331.06705 C51.775,7329.77191 51.031,7329.21006 49.782,7329.21006 L46.768,7329.21006 L46.768,7332.77842 L49.73,7332.77842 Z M49.571,7327.26218 C50.572,7327.26218 51.263,7326.79638 51.263,7325.71399 C51.263,7324.57377 50.459,7324.22158 49.36,7324.22158 L46.768,7324.22158 L46.768,7327.26218 L49.571,7327.26218 L49.571,7327.26218 Z M49.924,7322 C52.295,7322 53.943,7322.7839 53.943,7325.22237 C53.943,7326.42973 53.458,7327.32931 52.233,7327.93557 C53.801,7328.40137 54.543,7329.62422 54.543,7331.23127 C54.543,7333.78232 52.52,7335 50.1,7335 L44,7335 L44,7322 L49.924,7322 Z" id="behance-[#163]">

</path>
            </g>
        </g>
    </g>
</svg>
		<p class="text-lg st0 w-fit" style="margin-left: 1rem;">لتفاصيل اكثر</p>
          </a>
	<h3 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" class=" lg:text-3xl md:text-2xl sm:text-2xl right-block text-end text-white mb-2 [text-shadow:1px_2px_3px_black]">تطوير المواقع</h3>

<swiper data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" class="cards__wrapperr mySwiper " style="padding-top: 7rem;
    padding-bottom: 2.5rem;" :navigation="true"
:effect="'coverflow'"
  :grabCursor="true"
  :centeredSlides="true"
  :slidesPerView="'auto'"
  :coverflowEffect="{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }"
  :pagination="true"
  >
  <swiper-slide>

  <RouterLink 
                    :to="{
                        name: 'siteprojects',
                        params: {id:1},
                         }">
	<div class="card  current--card sm:w-52 sm:h-28 md:w-80 md:h-44 lg:w-96 lg:h-60">

            <div class="card__image " >
                <img class="shadow-[1px_2px_5px_1px_rgba(145,253,0,0.2)]" src="../assets/lib1.jpg" alt="" />
            </div>
			
			<div class="infoList z-10 ">
    <div class="info__wrapper ">
        <div class="info current--info lg:-top-6 lg:right-36 md:-top-10 md:right-36 sm:-top-6 sm:right-10">
            <h1 class="text name lg:text-5xl md:text-3xl sm:text-xl [text-shadow:1px_2px_3px_black]"> المكتبة الرقمية</h1>
            <h4 class="text location sm:mb-0 mb-5 lg:text-3xl sm:text-lg [text-shadow:1px_2px_3px_black]"> <span>تجاري</span></h4>
            <p class="text description sm:text-lg [text-shadow:1px_2px_3px_black]"></p>
        </div>

    </div>
</div>
        </div>

	</RouterLink>
	 </swiper-slide>
  <swiper-slide>
	<RouterLink 
                    :to="{
                        name: 'siteprojects',
                        params: {id:2},
                         }">
	<div class="card current--card sm:w-52 sm:h-28 md:w-80 md:h-44 lg:w-96 lg:h-60">
            <div class="card__image " >
                <img class="shadow-[1px_2px_5px_1px_rgba(145,253,0,0.2)]" src="../assets/ateqa1.jpg" alt="" />
            </div>
			<div class="infoList z-10 ">
    <div class="info__wrapper ">
        <div class="info current--info lg:-top-6 lg:right-36 md:-top-10 md:right-36 sm:-top-6 sm:right-10">
            <h1 class="text name lg:text-5xl md:text-3xl sm:text-xl [text-shadow:1px_2px_3px_black]"> شركة العتيقة</h1>
            <h4 class="text location sm:mb-0 mb-5 lg:text-3xl sm:text-lg [text-shadow:1px_2px_3px_black]"> <span>تجاري</span></h4>
            <p class="text description sm:text-lg [text-shadow:1px_2px_3px_black]"></p>
        </div>

    </div>
</div>
        </div>
	</RouterLink>
	 </swiper-slide>
  <swiper-slide>
	<RouterLink 
                    :to="{
                        name: 'siteprojects',
                        params: {id:3},
                         }">
	<div class="card current--card sm:w-52 sm:h-28 md:w-80 md:h-44 lg:w-96 lg:h-60">
            <div class="card__image " >
                <img class="shadow-[1px_2px_5px_1px_rgba(145,253,0,0.2)]" src="../assets/todo1.jpg" alt="" />
            </div>
			<div class="infoList z-10 ">
    <div class="info__wrapper ">
        <div class="info current--info lg:-top-6 lg:right-36 md:-top-10 md:right-36 sm:-top-6 sm:right-10">
            <h1 class="text name lg:text-5xl md:text-3xl sm:text-xl [text-shadow:1px_2px_3px_black]"> سجل مهامك</h1>
            <h4 class="text location sm:mb-0 mb-5 lg:text-3xl sm:text-lg [text-shadow:1px_2px_3px_black]"> <span>شخصي</span></h4>
            <p class="text description sm:text-lg [text-shadow:1px_2px_3px_black]"></p>
        </div>

    </div>
</div>
        </div>
		</RouterLink>
	 </swiper-slide>
  <swiper-slide>
	<RouterLink 
                    :to="{
                        name: 'siteprojects',
                        params: {id:4},
                         }">
	<div class="card current--card sm:w-52 sm:h-28 md:w-80 md:h-44 lg:w-96 lg:h-60">
            <div class="card__image " >
                <img class="shadow-[1px_2px_5px_1px_rgba(145,253,0,0.2)]" src="../assets/web2.jpg" alt="" />
            </div>
			<div class="infoList z-10 ">
    <div class="info__wrapper ">
        <div class="info current--info lg:-top-6 lg:right-36 md:-top-10 md:right-36 sm:-top-6 sm:right-10">
            <h1 class="text name lg:text-5xl md:text-3xl sm:text-xl [text-shadow:1px_2px_3px_black]">الايواء السياحي</h1>
            <h4 class="text location sm:mb-0 mb-5 lg:text-3xl sm:text-lg [text-shadow:1px_2px_3px_black]"> <span>تجاري</span></h4>
            <p class="text description sm:text-lg [text-shadow:1px_2px_3px_black]"></p>
        </div>

    </div>
</div>
        </div>
	</RouterLink>
	 </swiper-slide>

</swiper>
<a title="Behance" class="icons1  flex justify-center mt-5" rel="noopener"  href="https://github.com/omarbr44/" target="_blank">
	<svg width="30px" height="30px" viewBox="0 0 50 50" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"><defs></defs><path class="st0" d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"/></svg>   

		<p class="text-lg st0 w-fit" style="margin-left: 1rem;">لتفاصيل اكثر</p>
          </a>
</section>

<div class="loading__wrapper">
<div class="min-h-screen ">
	<div class="loader" >
      <div class="circles">
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
      </div>
      <div class="pacman">
        <span class="top"></span>
        <span class="bottom"></span>
        <span class="left"></span>
        <div class="eye"></div>
      </div>
    </div>
</div>
	<div class="loader">
    <span></span>
</div>
</div>
<SiteContact id="conta" />

</div>
</template>

<style scoped lang="scss">

.loader{position:absolute;top:50%;left:50%;height:60px;width:160px;margin:0;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}
.circles{position:absolute;left:-5px;top:0;height:60px;width:180px}
.circles span{position:absolute;top:25px;height:12px;width:12px;border-radius:12px;background-color:#EFEFEF}
.circles span.one{right:80px}
.circles span.two{right:40px}
.circles span.three{right:0px}
.circles{-webkit-animation:animcircles 0.5s infinite linear;animation:animcircles 0.5s infinite linear}
@-webkit-keyframes animcircles{0%{-webkit-transform:translate(0px,0px);transform:translate(0px,0px)}100%{-webkit-transform:translate(-40px,0px);transform:translate(-40px,0px)}}
@keyframes animcircles{0%{-webkit-transform:translate(0px,0px);transform:translate(0px,0px)}100%{-webkit-transform:translate(-40px,0px);transform:translate(-40px,0px)}}
.pacman{position:absolute;left:0;top:0;height:60px;width:60px}
.pacman .eye{position:absolute;top:10px;left:30px;height:7px;width:7px;border-radius:7px;background-color:#1C163A}
.pacman span{position:absolute;top:0;left:0;height:60px;width:60px}
.pacman span::before{content:"";position:absolute;left:0;height:30px;width:60px;background-color:#FFFB16}
.pacman .top::before{top:0;border-radius:60px 60px 0px 0px}
.pacman .bottom::before{bottom:0;border-radius:0px 0px 60px 60px}
.pacman .left::before{bottom:0;height:60px;width:30px;border-radius:60px 0px 0px 60px}
.pacman .top{-webkit-animation:animtop 0.5s infinite;animation:animtop 0.5s infinite}
@-webkit-keyframes animtop{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}
@keyframes animtop{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}}
.pacman .bottom{-webkit-animation:animbottom 0.5s infinite;animation:animbottom 0.5s infinite}
@-webkit-keyframes animbottom{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(45deg);transform:rotate(45deg)}}
@keyframes animbottom{0%,100%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}50%{-webkit-transform:rotate(45deg);transform:rotate(45deg)}}

.scrollbar {
            height: 700px;
            overflow: auto;
        }

#scrollbar1::-webkit-scrollbar {
            width: 13px;
        }
        
        #scrollbar1::-webkit-scrollbar-track {
            border-radius: 2px;
            background-color: rgba($color: #fff, $alpha: 0.0);
        }
        
        #scrollbar1::-webkit-scrollbar-thumb {
            border-radius: 8px;
          border: 3px solid transparent;
           background-clip: content-box;
            background-color: #91fd00;
        }
* {
	box-sizing: border-box;
}
.right-block{
	position: relative;
	padding-right: 2rem;
	margin-top: 2rem;
}
.right-block::before{
	position: absolute;
	content: '';
  width: 1rem;
  height: 100%;
  border-radius: 4%;
  background-color: #91fd00;
  z-index: 1;
  right: 0;
}
.header-line{
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  font-family: 'din-next-arabic';

}
.st0{fill:#fff;
	color: white;}
h1,.right-block{
  font-family: 'din-next-arabic';
}
h4,p{
  font-family: 'din-next-arabicmd';
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
.swiper-slide {
  /* text-align: center;
  font-size: 18px; */
  /* background: #fff; */

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide .card {
  display: block;
 /*  width: 100%; */
  /* height: 100%; */
  object-fit: cover;
}


.app {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

}


  .cards__wrapperr {
	display: flex;
	justify-content: space-between;
	position: relative;
	width: 100%;
	height: 100%;
	perspective: 1000px;
	
}  
.icons1:hover::before{
  transform: scale(1.3);
}
.icons1:hover p{
	color: #000 !important;
	z-index: 11;
}
.icons1:hover .st0 {
    fill: #000 !important;
}
.icons1::before{
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    right: -1px;
    left: -1px;
    background-color: #fff;
    border-radius: 4px;
    z-index: 1;
    transform: scale(0);
    transition: transform .25s ease-in-out;
}.icons1{
  position: relative;
  width: fit-content;
    margin-left: auto;
    margin-right: auto;
}
.icons1 svg,.icons1 p{
  position: relative;
    z-index: 10;
    transition: fill .25s ease-in-out;
}

.card {
	/* --card-translateY-offset: 100vh; */
	
	transform: rotateY(var(--card-rotation-offset))
		scale(var(--card-scale-offset));
	
	transition: transform 800ms
		ease;
	user-select: none;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: #000;
		z-index: 1;
		transition: opacity 800ms
			ease;
		opacity: calc(1 - var(--opacity));
	}

	&__image {
		width: 100%;
		height: 100%;
		img {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	&.current--card {
		display: flex;
		--current-card-rotation-offset: 0;
		--card-rotation-offset: var(--current-card-rotation-offset);
		--card-scale-offset: 1.2;
		--opacity: 0.8;
	}

}

.infoList {
	height: 300px;
	pointer-events: none;

	.info__wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: flex-end;
	perspective: 1000px;
	transform-style: preserve-3d;
	}
}
.blcandwit{
	filter: grayscale(100%);
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 250ms;
}
.blcandwit:hover{
	filter: grayscale(0);
}
.info {
	position: absolute;
	/* margin-bottom: calc(300px / 8);
	margin-left: calc(200px / 1.5); */
	transform: translateZ(2rem);
	transition: transform 800ms
		ease;
	.text {
		position: relative;
		/* font-size: calc(200px * var(--text-size-offset, 0.2)); */
		white-space: nowrap;
		color: #fff;
		width: fit-content;
	}

	.location {
		--mg-left: 40px;
		--text-size-offset: 0.12;
		font-weight: 400;
		margin-left: var(--mg-left);
		padding-bottom: 0.8rem;
		&::before,
		&::after {
			content: "";
			position: absolute;
			background: #fff;
			left: 0%;
			transform: translate(calc(-1 * var(--mg-left)), -50%);
		}
		&::before {
			top: 50%;
			width: 20px;
			height: 5px;
		}
		&::after {
			bottom: 0;
			width: 60px;
			height: 2px;
		}
	}

	.description {
		--text-size-offset: 0.065;
		font-weight: 500;
		width: 11rem;
	}

	&.current--info {
		opacity: 1;
		display: block;
	}
	&.previous--info,
	&.next--info {
		opacity: 0;
		display: none;
	}
}

.loading__wrapper {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #000;
	z-index: 200;
	.loader--text {
		color: #fff;
		font-family: "Montserrat";
		font-weight: 500;
		margin-bottom: 1.4rem;
	}
	.loader {
		position: relative;
		width: 200px;
		height: 2px;
		
	}
}
@media (max-width: 640px) { 
	.info{
		right: 1rem;
	}
	.description{
		font-size: 0.9rem;
	}
	.card{
		width: 11rem;
		height: 100%;
	}
	.scrollbar {
            height: 300px;
        }

#scrollbar1::-webkit-scrollbar {
            width: 10px;
        }
}
 @media (max-width: 380px) { 
	.location {
		--mg-left: 20px;
		--text-size-offset: 0.12;
		font-weight: 400;
		margin-left: var(--mg-left);
		padding-bottom: 0.8rem;
		&::before,
		&::after {
			content: "";
			position: absolute;
			background: #fff;
			left: 0%;
			transform: translate(calc(-1 * var(--mg-left)), -50%);
		}
		&::before {
			top: 50%;
			width: 20px;
			height: 5px;
		}
		&::after {
			bottom: 0;
			width: 60px;
			height: 2px;
		}
	}

	.info{
		right: 1rem;
	}
	.name{
		font-size: 0.9rem;
	}
	.location{
		font-size: 0.9rem;
	}

} 
@media only screen and (min-width: 800px) {

    .cardList {
     width: calc(3 * 250px);
    }
}


</style>
