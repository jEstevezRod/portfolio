<template>
         <div :ref="reference" :id="reference" class="timeline-item flex flex-row justify-center pt-8 pb-4">
                <div class="timeline-item-start flex items-center justify-end w-5/6 md:w-1/4">
                    <div class="relative bg-gray-300 py-8 px-4 flex flex-col items-center justify-center rounded shadow-lg">
                        <div class="year-mobile bg-gray-400 md:hidden">{{year}}</div>
                        <div class="arrow-right bg-gray-300 hidden md:block"></div>
                        <div class="inline-flex flex-row flex-wrap justify-around w-full">
                            <template v-if="images.length">
                                <img class="h-12" v-for="image of images" :key="image" :src="getImagePath(image)" :alt="image">
                            </template>
                        </div>
                        <p class="mt-4">
                            <span v-html="text"></span>
                        </p>
                    </div>
                </div>
                <div class="timeline-item-center flex items-center justify-center min-w-2/6 hidden md:flex w-1/6 mx-3">
                    <div class=" flex items-center justify-center bullet bg-gray-200">
                        {{year}}
                    </div>
                </div>
                <div class="timeline-item-end  w-2/6 md:w-1/4 hidden md:flex items-center justify-start">
                    <div class="py-8 px-4 flex items-center justify-center ">
                    </div>
                </div>
            </div>
</template>

<script>
    export default {
        name: "TimelineItem",
        props: {
            images: {
                type: Array,
                required: true
            },
            text: String,
            year: Number,
            reference: String
        },
        computed: {
    
        },
        methods: {
            getImagePath(key) {
                return require('@/assets/images/'+ key)
            }
        }
    
    }
</script>

<style scoped>

.bullet {
    height: 52px;
    left: calc(50% - 26px);
    width: 52px;
    border-radius: 50%;
    z-index: 999;
}


</style>
