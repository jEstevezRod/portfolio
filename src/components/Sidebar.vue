<template>
  <aside class="bg-blue-800 hidden lg:w-3/12 xl:w-3/12 xxl:w-2/12 h-full lg:flex flex-col fixed">
    <div class="w-full h-64 flex justify-center align-center pt-20">
      <section class="relative w-40 h-40">
        <div ref="bubble" class="bubble w-full h-full">
          <img
            ref="bubble"
            class="absolute h-full w-full rounded-full object-cover"
            src="@/assets/images/jesus-low.jpg"
            alt="Profile image of Jesus"
          />
        </div>
        <div ref="bubblePulse" class="bubble-pulse"></div>
      </section>
    </div>
    <div>
      <p ref="jesus" class="text-2xl font-bold text-white mx-5">Jesús Estévez Rodríguez</p>
      <p ref="dev" class="text-base uppercase text-white mx-5">Full-stack Developer</p>
    </div>

    <div class="mb-32 flex-1">
      <nav id="nav" class="flex justify-center items-center flex-col h-full pb-40">
        <router-link to="/" exact class="text-xl my-3 text-white">About</router-link>
        <router-link to="/contact" exact class="text-xl my-3 text-white">Contact</router-link>
        <!--                <router-link to="/projects" exact class="text-xl my-3 text-white">Projects</router-link>-->
      </nav>
    </div>
    <div id="footer" class="pb-5">
      <div class="inline-flex justify-content">
        <a href="/pdfs/Curriculum.pdf" download="Jesus_Estevez_Curriculum.pdf">
          <img class="h-6 w-6 mx-1" src="@/assets/images/cv.svg" alt />
        </a>
        <a href="https://github.com/jEstevezRod" target="_blank">
          <img class="h-6 w-6 mx-1" src="@/assets/images/github.svg" alt="Github Logo" />
        </a>
        <a href="https://www.linkedin.com/in/jesus-estevez-rodriguez" target="_blank">
          <img class="h-6 w-6 mx-1" src="@/assets/images/linkedin.svg" alt="Linkedin Logo" />
        </a>
      </div>
      <p class="text-lg text-white">&#169; 2020. All rights reserved.</p>
    </div>
  </aside>
</template>

<script>
import { TimelineLite, Back, Elastic, Expo } from "gsap";

export default {
  data() {
    return {
      timeline: null
    };
  },
  mounted() {
    const { bubble, bubblePulse } = this.$refs;
    this.timeline = new TimelineLite({ repeat: 2 });
    // this.timeline = new TimelineLite({onComplete: () => this.timeline.restart()})

    this.timeline.to(bubble, 0.4, {
      scale: 0.8,
      rotation: 16,
      ease: Back.easeOut.config(1.7)
    });
    this.timeline.to(
      bubblePulse,
      0.5,
      {
        scale: 0.9,
        opacity: 1
      },
      "-=0.6"
    );

    this.timeline.to(bubble, 1.2, {
      scale: 1,
      rotation: "-=16",
      ease: Elastic.easeOut.config(2.5, 0.5)
    });
    this.timeline.to(
      bubblePulse,
      1.1,
      {
        scale: 3,
        opacity: 0,
        ease: Expo.easeOut
      },
      "-=1.2"
    );
  }
};
</script>

<style>
nav a:hover,
nav a.router-link-active,
nav a.router-link-exact-active {
  text-decoration: none;
  cursor: pointer;
  border-bottom: 2px solid tomato;
  border-radius: 1px;
  padding: 0 10px;
  transition: width 1s ease-in-out;
}

.bubble-pulse {
  position: absolute;
  z-index: -9991;
  height: 120px;
  width: 120px;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  background: #272727;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
}
</style>
