<template>
    <div class="about mt-0 lg:mt-16">
        <h1 class="text-4xl" id="title" ref="title">Less is more</h1>
        <p ref="agree" class="text-gray-500 text-xl"></p>
        <h2 ref="explanation" class="mt-16">I don't want to make you to lost the time, so let's do it short</h2>
        <div id="timeline" ref="tl" class="relative mt-10 mb-20">


            <div ref="t1" id="t1" class="timeline-item flex flex-row justify-center pt-8 pb-4">
                <div class="timeline-item-start flex items-center justify-end w-5/6 md:w-1/4">
                    <div class="relative bg-gray-300 py-8 px-4 flex flex-col items-center justify-center rounded shadow-lg">
                        <div class="year-mobile bg-gray-400 md:hidden"> 2016</div>
                        <div class="arrow-right bg-gray-300 hidden md:block"></div>
                        <div class="inline-flex flex-row flex-wrap justify-around w-full">
                            <img class="h-16" src="@/assets/images/python.svg" alt="Python logo">
                            <img class="h-16" src="@/assets/images/mysql.png" alt="Mysql logo">
                        </div>
                        <p class="mt-3"> Is where everything started, I started learning <strong>Python</strong> as my
                            first programming
                            language, at the same time I practiced <strong>HTML 5</strong> and <strong>CSS 3</strong>
                            . Also, I introduced into relational databases.</p>
                    </div>
                </div>
                <div class="timeline-item-center flex items-center justify-center min-w-2/6 hidden md:flex w-1/6 mx-3">
                    <div class=" flex items-center justify-center bullet bg-gray-200">
                        2016
                    </div>
                </div>
                <div class="timeline-item-end  w-2/6 md:w-1/4 hidden md:flex items-center justify-start">
                    <div class="py-8 px-4 flex items-center justify-center ">

                    </div>
                </div>
            </div>


            <div ref="t2" id="t2" class="timeline-item flex flex-row justify-center pt-8 pb-4">
                <div class="timeline-item-start hidden md:flex items-center justify-end w-5/6 md:w-1/4">

                </div>
                <div class="timeline-item-center md:flex hidden items-center justify-center min-w-1/6 w-1/6 mx-3">
                    <div class=" flex items-center justify-center bullet bg-gray-200">
                        2017
                    </div>
                </div>
                <div class="timeline-item-end w-5/6 md:w-1/4 flex items-center justify-start">
                    <div class="relative bg-gray-300 py-8 px-4 flex flex-col items-center justify-center rounded shadow-lg">
                        <div class="year-mobile bg-gray-400 md:hidden"> 2017</div>
                        <div class="arrow-left bg-gray-300 hidden md:block"></div>

                        <div class="inline-flex flex-row flex-wrap justify-around w-full">
                            <img class="h-16" src="@/assets/images/js.svg" alt="Javascript logo">
                            <img class="h-16" src="@/assets/images/php.svg" alt="Logo logo">
                        </div>
                        <p class="mt-3"> This first half year I focused on web technologies. <strong>Javascript</strong>
                            for
                            client-side and <strong>PHP</strong> for
                            server-side. At this moment I liked more front-end than backend, it was more colorful ;D.
                        </p>
                    </div>
                </div>
            </div>


            <div ref="t3" id="t3" class="timeline-item flex flex-row justify-center pt-8 pb-4">
                <div class="timeline-item-start flex items-center justify-end w-5/6 md:w-1/4">
                    <div class="relative bg-gray-300 py-8 px-4 flex flex-col items-center justify-center rounded shadow-lg">
                        <div class="year-mobile bg-gray-400 md:hidden"> 2017</div>
                        <div class="arrow-right bg-gray-300 hidden md:block"></div>

                        <div class="inline-flex flex-row flex-wrap justify-around w-full">
                            <img class="h-16" src="@/assets/images/angular.svg" alt="angular logo">

                        </div>
                        <p class="mt-3">
                            Second half year of 2017, for first time I started with a JS framework, <strong>Angular
                            2</strong>. It was a
                            completely new word full of unicorns and rainbows.
                        </p>

                    </div>
                </div>
                <div class="timeline-item-center flex items-center justify-center min-w-2/6 hidden md:flex w-1/6 mx-3">
                    <div class=" flex items-center justify-center bullet bg-gray-200">
                        2017
                    </div>
                </div>
                <div class="timeline-item-end  w-2/6 md:w-1/4 hidden md:flex items-center justify-start">
                    <div class="py-8 px-4 flex items-center justify-center ">

                    </div>
                </div>
            </div>


            <div ref="t4" id="t4" class="timeline-item flex flex-row justify-center pt-8 pb-4">
                <div class="timeline-item-start hidden md:flex items-center justify-end w-5/6 md:w-1/4">

                </div>
                <div class="timeline-item-center md:flex hidden items-center justify-center min-w-1/6 w-1/6 mx-3">
                    <div class=" flex items-center justify-center bullet bg-gray-200">
                        2018
                    </div>
                </div>
                <div class="timeline-item-end w-5/6 md:w-1/4 flex items-center justify-start">
                    <div class="relative bg-gray-300 py-8 px-4 flex flex-col items-center justify-center rounded shadow-lg">
                        <div class="year-mobile bg-gray-400 md:hidden"> 2018</div>
                        <div class="arrow-left bg-gray-300 hidden md:block"></div>

                        <div class="inline-flex flex-row flex-wrap justify-around w-full">
                            <img class="h-20" src="@/assets/images/laravel.png" alt="Laravel logo">
                            <img class="h-16" src="@/assets/images/vue.svg" alt="Vue logo">
                        </div>
                        <p class="mt-3">I can consider this year like one of the most important for me. I
                            discover a PHP framework that nowadays is my favourite, <strong>Laravel</strong>. As
                            alternative to Angular, I began to use <strong>Vue.js</strong>, I really enjoyed with
                            Laravel/Vue.js projects.
                        </p>
                    </div>
                </div>
            </div>


            <div ref="t5" id="t5" class="timeline-item flex flex-row justify-center pt-8 pb-4">
                <div class="timeline-item-start flex items-center justify-end w-5/6 md:w-1/4">
                    <div class="relative bg-gray-300 py-8 px-4 flex flex-col items-center justify-center rounded shadow-lg">
                        <div class="year-mobile bg-gray-400 md:hidden"> 2018</div>
                        <div class="arrow-right bg-gray-300 hidden md:block"></div>

                        <div class="inline-flex flex-row flex-wrap justify-around w-full">
                            <img class="h-12" src="@/assets/images/drupal.png" alt="drupal logo">
                            <img class="h-12" src="@/assets/images/ionic.png" alt="ionic logo">
                        </div>
                        <p class="mt-3">
                            Second half year of 2018, I got my first job as web developer in a company placed in Ghent,
                            Belgium. Mostly of the time coding was with <strong>Drupal</strong>, that was my first time
                            I dealt with a CMS. As side projects I worked with mobile technologies, specifically with
                            <strong>Ionic</strong>.
                        </p>
                    </div>
                </div>
                <div class="timeline-item-center flex items-center justify-center min-w-2/6 hidden md:flex w-1/6 mx-3">
                    <div class=" flex items-center justify-center bullet bg-gray-200">
                        2018
                    </div>
                </div>
                <div class="timeline-item-end  w-2/6 md:w-1/4 hidden md:flex items-center justify-start">
                    <div class="py-8 px-4 flex items-center justify-center ">

                    </div>
                </div>
            </div>


            <div ref="t6" id="t6" class="timeline-item flex flex-row justify-center pt-8 pb-4">
                <div class="timeline-item-start hidden md:flex items-center justify-end w-5/6 md:w-1/4">

                </div>
                <div class="timeline-item-center md:flex hidden items-center justify-center min-w-1/6 w-1/6 mx-3">
                    <div class=" flex items-center justify-center bullet bg-gray-200">
                        2019
                    </div>
                </div>
                <div class="timeline-item-end w-5/6 md:w-1/4 flex items-center justify-start">
                    <div class="relative bg-gray-300 py-8 px-4 flex flex-col items-center justify-center rounded shadow-lg">
                        <div class="year-mobile bg-gray-400 md:hidden"> 2019</div>
                        <div class="arrow-left bg-gray-300 hidden md:block"></div>

                        <div class="inline-flex flex-row flex-wrap justify-around w-full">
                            <img class="h-16" src="@/assets/images/joomla.png" alt="Joomla logo">
                            <img class="h-16" src="@/assets/images/docker.png" alt="Docker logo">
                        </div>
                        <p class="mt-3">I started working in an awesome company named Jensen Technologies placed in
                            Granada, Spain. Mostly of the time was working on Joomla projects, got really good
                            experience. Learning <strong>Docker</strong> make me so much productive!
                        </p>
                    </div>
                </div>
            </div>


            <div ref="t7" id="t7" class="timeline-item flex flex-row justify-center pt-8 pb-4">
                <div class="timeline-item-start flex items-center justify-end w-5/6 md:w-1/4">
                    <div class="relative bg-gray-300 py-8 px-4 flex flex-col items-center justify-center rounded shadow-lg">
                        <div class="year-mobile bg-gray-400 md:hidden"> 2020</div>
                        <div class="arrow-right bg-gray-300 hidden md:block"></div>

                        <div class="inline-flex flex-row flex-wrap justify-around w-full">
                            <img class="h-16" src="@/assets/images/nuxt.png" alt="nuxt logo">

                        </div>
                        <p class="mt-3">
                            With a nonstop of learning, I wanted to go the next level with Vue.js, so I started
                            learning <strong>Nuxt.js</strong>, an open source framework that uses Vue.js to create
                            Server Side Rendering
                            web applications.
                        </p>
                    </div>
                </div>
                <div class="timeline-item-center flex items-center justify-center min-w-2/6 hidden md:flex w-1/6 mx-3">
                    <div class=" flex items-center justify-center bullet bg-gray-200">
                        2020
                    </div>
                </div>
                <div class="timeline-item-end  w-2/6 md:w-1/4 hidden md:flex items-center justify-start">
                    <div class="py-8 px-4 flex items-center justify-center ">

                    </div>
                </div>
            </div>


        </div>

        <div ref="t8" id="t8" class="flex flex-row justify-center pb-8">
            {{ new Date() | moment("dddd, MMMM Do YYYY") }}
        </div>

        <div v-if="started" class="fixed bottom-0 right-0 mb-48 mr-20 md:mb-8 md:mb-8 lg:mr-8">

            <button v-if="!paused" @click="pause"
                    class="bg-blue-400 hover:bg-blue-600  font-bold py-2 px-4  inline-flex items-center rounded-l border-r border-gray-300">
                <img class="h-4 mr-2" src="@/assets/images/pause.svg" alt="pause">
                <span class="hidden lg:block">Pause</span>
            </button>
            <button v-if="paused" @click="reanude"
                    class="bg-blue-400 hover:bg-blue-600 font-bold py-2 px-4  inline-flex items-center rounded-l border-r border-gray-300">
                <img class="h-4 mr-2" src="@/assets/images/play.svg" alt="play">
                <span class="hidden lg:block">Resume</span>
            </button>
            <button @click="finish"
                    class="bg-blue-400 hover:bg-blue-600  font-bold py-2 px-4  inline-flex items-center rounded-r border-l border-gray-300">
                <img class="h-4 mr-2" src="@/assets/images/stop.svg" alt="stop">
                <span class="hidden lg:block">Finish</span>

            </button>

        </div>

    </div>
</template>

<script>
    import {TimelineLite, Back, gsap} from 'gsap'
    import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
    import {TextPlugin} from 'gsap/TextPlugin'
    import {CSSPlugin} from 'gsap/CSSPlugin'

    TimelineLite.prototype.wait = function (position) {
        return this.set({}, {}, position);
    };

    export default {
        data() {
            return {
                timeline: new TimelineLite(),
                timeline2: new TimelineLite(),
                paused: false,
                started: false
            }
        },
        mounted() {
            gsap.registerPlugin(TextPlugin, CSSPlugin, ScrollToPlugin);
            const {title, agree, explanation, tl, t1, t2, t3, t4, t5, t6, t7, t8} = this.$refs;

            this.timeline2
                .to(window, {duration: 0.5, scrollTo: {y: "#t1", offsetY: 150}})
                .from(t1, 0.5, {opacity: 0, x: 75, ease: Back.easeOut.config(1.7)})
                .to(window, {
                    duration: 0.5,
                    scrollTo: {y: "#t2", offsetY: 150}
                })
                .from(t2, 1, {opacity: 0, x: -75, ease: Back.easeOut.config(1.7)})
                .to(window, {
                    duration: 0.5,
                    scrollTo: {y: "#t3", offsetY: 150}
                })
                .from(t3, 1, {opacity: 0, x: 75, ease: Back.easeOut.config(1.7)})
                .to(window, {
                    duration: 0.5,
                    scrollTo: {y: "#t4", offsetY: 150}
                })
                .from(t4, 1, {opacity: 0, x: -75, ease: Back.easeOut.config(1.7)})
                .to(window, {
                    duration: 0.5,
                    scrollTo: {y: "#t5", offsetY: 150}
                })
                .from(t5, 1, {opacity: 0, x: 75, ease: Back.easeOut.config(1.7)})
                .to(window, {
                    duration: 0.5,
                    scrollTo: {y: "#t6", offsetY: 150}
                })
                .from(t6, 1, {opacity: 0, x: -75, ease: Back.easeOut.config(1.7)})
                .to(window, {
                    duration: 0.5,
                    scrollTo: {y: "max"}
                })
                .from(t7, 1, {opacity: 0, x: 75, ease: Back.easeOut.config(1.7)})
                .to(window, {
                    duration: 0.5,
                    scrollTo: {y: "max"}
                })
                .from(t8, 1, {opacity: 0, y: -75, ease: Back.easeOut.config(1.7)})
                .call(() => this.started = false);


            this.timeline
                .wait("=+0.8")
                .to(window, {
                    duration: 0.1,
                    scrollTo: {y: "#title"}
                })
                .from(title, 0.3, {x: -100, opacity: 0, ease: Back.easeOut.config(1.7)})
                .to(title, 0.5, {x: 0})
                .to(agree, 0.5, {text: {value: "don't you agree with me?"}})
                .from(explanation, 1, {opacity: 0})
                .from(tl, 0.1, {opacity: 0})
                .call(() => this.started = true)
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
                this.timeline.seek(15);
            }
        }
    }
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
        content: '';
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
