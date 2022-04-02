<template>
  <div class="about mt-0 lg:mt-16">
    <h1 class="text-4xl" id="title" ref="title">Less is more</h1>
    <p ref="agree" class="text-gray-500 text-xl"></p>
    <h2 ref="explanation" class="mt-16">
      I don't want to make you to lost the time, so let's do it easy
    </h2>
    <div id="timeline" ref="tl" class="relative mt-10 mb-20">
      <component
        v-for="step in steps"
        :ref="step.key"
        :key="step.key"
        :is="step.component"
        :text="step.text"
        :images="step.images"
        :year="step.year"
        :reference="step.key"
      />
    </div>

    <div ref="last" id="last" class="flex flex-row justify-center pb-8">
      {{ new Date() | moment("dddd, MMMM Do YYYY") }}
    </div>

    <div
      v-if="started"
      class="fixed bottom-0 right-0 mb-48 mr-20 md:mb-8 lg:mr-8"
    >
      <button
        v-if="!paused"
        @click="pause"
        class="
          bg-blue-400
          hover:bg-blue-600
          font-bold
          py-2
          px-4
          inline-flex
          items-center
          rounded-l
          border-r border-gray-300
        "
      >
        <img class="h-4 mr-2" src="@/assets/images/pause.svg" alt="pause" />
        <span class="hidden lg:block">Pause</span>
      </button>
      <button
        v-if="paused"
        @click="reanude"
        class="
          bg-blue-400
          hover:bg-blue-600
          font-bold
          py-2
          px-4
          inline-flex
          items-center
          rounded-l
          border-r border-gray-300
        "
      >
        <img class="h-4 mr-2" src="@/assets/images/play.svg" alt="play" />
        <span class="hidden lg:block">Resume</span>
      </button>
      <button
        @click="finish"
        class="
          bg-blue-400
          hover:bg-blue-600
          font-bold
          py-2
          px-4
          inline-flex
          items-center
          rounded-r
          border-l border-gray-300
        "
      >
        <img class="h-4 mr-2" src="@/assets/images/stop.svg" alt="stop" />
        <span class="hidden lg:block">Finish</span>
      </button>
    </div>
  </div>
</template>

<script>
import { TimelineLite, Back, gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";
import TimelineItem from "../components/TimelineItem.vue";

import TimelineItemEnd from "../components/TimelineItemEnd.vue";
TimelineLite.prototype.wait = function (position) {
  return this.set({}, {}, position);
};

export default {
  components: { TimelineItem, TimelineItemEnd },
  data() {
    return {
      timeline: new TimelineLite(),
      timeline2: new TimelineLite(),
      paused: false,
      started: false,
      steps: [
        {
          key: "step1",
          year: 2016,
          component: "TimelineItem",
          images: ["python.svg", "mysql.png"],
          text: "Is where everything started, I started learning <b>Python</b> as my first programming language, at the same time I practiced <b>HTML 5 and CSS 3</b>. Also, I introduced into relational databases.",
        },
        {
          key: "step2",
          year: 2017,
          component: "TimelineItemEnd",
          images: ["js.svg", "php.svg"],
          text: "This first half year I focused on web technologies. <b>Javascript</b> for client-side and <b>PHP</b> for server-side. At this moment I liked more front-end than backend, it was more colorful.",
        },
        {
          key: "step3",
          year: 2017,
          component: "TimelineItem",
          images: ["angular.svg"],
          text: "Second half year of 2017, for first time I started with a JS framework, <b>Angular 2+</b>. It was a completely new word full of unicorns and rainbows.",
        },
        {
          key: "step4",
          year: 2018,
          component: "TimelineItemEnd",
          images: ["laravel.png", "vue.svg"],
          text: "I can consider this year like one of the most important for me. I discover a PHP framework that nowadays is my favourite, <b>Laravel</b>. As alternative to Angular, I began to use <b>Vue.js</b>, I really enjoyed with Laravel/Vue.js projects.",
        },
        {
          key: "step5",
          year: 2018,
          component: "TimelineItem",
          images: ["drupal.png", "ionic.png"],
          text: "Second half year of 2018, I got my first job as web developer in a company placed in Ghent, Belgium. Mostly of the time coding was with <strong>Drupal</strong>, that was my first time I dealt with a CMS. As side projects I worked with mobile technologies, specifically with <strong>Ionic</strong>.",
        },
        {
          key: "step6",
          year: 2018,
          component: "TimelineItemEnd",
          images: ["studies.png"],
          text: "I finished my <b>Web App Development</b> studies and I discovered that this is what I want to do the rest of my life!",
        },
        {
          key: "step7",
          year: 2019,
          component: "TimelineItem",
          images: ["jensen.jpg"],
          text: "I started working in an awesome company, <a href='https://jensen.technology/' target='_blank' rel='noopener noreferrer' class='underline'>Jensen Technologies.</a>",
        },
        {
          key: "step8",
          year: 2019,
          component: "TimelineItemEnd",
          images: ["joomla.png", "docker.png"],
          text: "Mostly of the time was working on Joomla projects, got really good experience. Learning <strong>Docker</strong> make me so much productive!",
        },
        {
          key: "step9",
          year: 2020,
          component: "TimelineItem",
          images: ["nuxt.png"],
          text: "With a nonstop of learning, I wanted to go the next level with Vue.js, so I started learning <strong>Nuxt.js</strong>, an open source framework that uses Vue.js to create Server Side Rendering web applications.",
        },
        {
          key: "step10",
          year: 2021,
          component: "TimelineItemEnd",
          images: ["fitness.png"],
          text: " Joined <a href='https://fitness-kpi.com/' target='_blank' rel='noopener noreferrer' class='underline'>Fitness Technologies</a>! 💙",
        },
        {
          key: "step11",
          year: 2022,
          component: "TimelineItem",
          images: ["lucid.png"],
          text: "After more than 1 year I consolidated my knowledge on software architecture. I had my first contact with hexagonal architecture using Domain Driven Design, at the same time that used Command and Query Responsibility Segregation (CQRS).",
        },
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(TextPlugin, CSSPlugin, ScrollToPlugin);
    const { title, agree, explanation, tl, last } = this.$refs;

    const step1 = this.$refs.step1[0].$el;
    const step2 = this.$refs.step2[0].$el;
    const step3 = this.$refs.step3[0].$el;
    const step4 = this.$refs.step4[0].$el;
    const step5 = this.$refs.step5[0].$el;
    const step6 = this.$refs.step6[0].$el;
    const step7 = this.$refs.step7[0].$el;
    const step8 = this.$refs.step8[0].$el;
    const step9 = this.$refs.step9[0].$el;
    const step10 = this.$refs.step10[0].$el;
    const step11 = this.$refs.step11[0].$el;

    this.timeline2
      .to(window, { duration: 0.5, scrollTo: { y: step1,  } })
      .from(step1, 0.5, { opacity: 0, x: 75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step2,  },
      })
      .from(step2, 1, { opacity: 0, x: -75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step3,  },
      })
      .from(step3, 1, { opacity: 0, x: 75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step4,  },
      })
      .from(step4, 1, { opacity: 0, x: -75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step5,  },
      })
      .from(step5, 1, { opacity: 0, x: 75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step6,  },
      })
      .from(step6, 1, { opacity: 0, x: -75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step7,  },
      })
      .from(step7, 1, { opacity: 0, x: 75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step8,  },
      })
      .from(step8, 1, { opacity: 0, x: -75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step9,  },
      })
      .from(step9, 1, { opacity: 0, x: 75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step10,  },
      })
      .from(step10, 1, { opacity: 0, x: -75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: step11,  },
      })
      .from(step11, 1, { opacity: 0, x: -75, ease: Back.easeOut.config(1.7) })
      .to(window, {
        duration: 0.5,
        scrollTo: { y: "max" },
      })
      .from(last, 1, { opacity: 0, y: -75, ease: Back.easeOut.config(1.7) })
      .call(() => (this.started = false));

    this.timeline
      .wait("=+0.8")
      .to(window, {
        duration: 0.1,
        scrollTo: { y: "#title" },
      })
      .from(title, 0.3, { x: -100, opacity: 0, ease: Back.easeOut.config(1.7) })
      .to(title, 0.5, { x: 0 })
      .to(agree, 0.5, { text: { value: "don't you agree with me?" } })
      .from(explanation, 1, { opacity: 0 })
      .from(tl, 0.1, { opacity: 0 })
      .call(() => (this.started = true))
      .add(this.timeline2);
  },
  methods: {
    pause() {
      this.paused = true;
      this.timeline.pause();
    },
    reanude() {
      this.paused = false;
      this.timeline.resume();
    },
    finish() {
      this.started = false;
      this.timeline.seek(25);
    },
  },
};
</script>
<style>
@media (min-width: 768px) {
  .bullet {
    height: 52px;
    left: calc(50% - 26px);
    width: 52px;
    border-radius: 50%;
    z-index: 999;
  }
}

#timeline:before {
  bottom: 0;
  content: "";
  height: 100%;
  left: calc(50% - 1px);
  position: absolute;
  top: 0;
  width: 2px;
  background-color: #d8d8d8;
}

.year-mobile {
  position: absolute;
  top: -30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow-right {
  position: absolute;
  right: -13px;
  height: 25px;
  width: 25px;
  transform: rotate(45deg);
}

.arrow-left {
  position: absolute;
  left: -13px;
  height: 25px;
  width: 25px;
  transform: rotate(45deg);
}
</style>
