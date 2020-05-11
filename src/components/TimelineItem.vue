<template>
    <div class="timeline-item flex flex-row justify-center py-10">
        <div class="timeline-item-start flex items-center justify-end w-2/6 md:w-1/4">
            <div v-if="start" class="bg-red-400 py-8 px-4 flex items-center justify-center rounded">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </div>
        </div>
        <div class="timeline-item-center flex items-center justify-center min-w-1/6 w-1/6 mx-3">
            <div class="w-64 h-32  flex items-center justify-center bullet bg-teal-200">

            </div>
        </div>
        <div class="timeline-item-end w-2/6 md:w-1/4 flex items-center justify-start">
            <div v-if="!start" class="py-8 px-4 bg-green-400 flex items-center justify-center rounded">
                <p v-if="iconCenter">p</p>
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TimelineItem",
        props: {
            start: {
                type: Boolean,
                default: true
            },
            content: {
                type: String,
                default: '',
            },
            contentCenter: {
                type: String,
                default: '',
            },
            iconStart: {
                type: String,
                default: ''
            },
            iconCenter: {
                type: String,
                default: ''
            },
            iconEnd: {
                type: String,
                default: ''
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
