<template>
    <div id="app">
        <div v-if="loaded" class="h-screen flex flex-row flex-wrap">
            <div id="sidebar" class="hidden md:block lg:w-3/12 xl:w-3/12 xxl:w-2/12 relative">
                <Sidebar/>
            </div>
            <div id="main-content-page" class="main-bg w-full  lg:w-8/12 xl:w-9/12 xxl:w-10/12">
                <Navbar/>
                <div class="mt-0">
                    <router-view/>
                </div>
            </div>
        </div>

        <div v-else class="w-screen h-screen flex justify-center items-center">
            <Loader></Loader>
        </div>
    </div>
</template>

<script>
    import Sidebar from "@/components/Sidebar.vue";
    import Navbar from "@/components/Navbar";
    import Loader from "@/components/Loader";

    export default {
        name: "App",
        components: {Sidebar, Navbar, Loader},
        data() {
            return {
                loaded: false
            }
        },
        mounted() {

            document.onreadystatechange = () => {
                if (document.readyState == "complete") {
                    setTimeout(() => {
                        this.loaded = true;
                    }, 800)
                }
            }
        }
    };
</script>

<style>
    .main-bg {
        /*background-image: linear-gradient(88deg, rgba(202, 202, 202, 0.02) 0%, rgba(202, 202, 202, 0.02) 58%, transparent 58%, transparent 67%, rgba(220, 220, 220, 0.02) 67%, rgba(220, 220, 220, 0.02) 82%, rgba(8, 8, 8, 0.02) 82%, rgba(8, 8, 8, 0.02) 100%), linear-gradient(318deg, rgba(19, 19, 19, 0.02) 0%, rgba(19, 19, 19, 0.02) 5%, transparent 5%, transparent 50%, rgba(101, 101, 101, 0.02) 50%, rgba(101, 101, 101, 0.02) 65%, rgba(132, 132, 132, 0.02) 65%, rgba(132, 132, 132, 0.02) 100%), linear-gradient(150deg, rgba(166, 166, 166, 0.02) 0%, rgba(166, 166, 166, 0.02) 18%, transparent 18%, transparent 37%, rgba(105, 105, 105, 0.02) 37%, rgba(105, 105, 105, 0.02) 87%, rgba(244, 244, 244, 0.02) 87%, rgba(244, 244, 244, 0.02) 100%), linear-gradient(53deg, rgba(54, 54, 54, 0.02) 0%, rgba(54, 54, 54, 0.02) 26%, transparent 26%, transparent 81%, rgba(251, 251, 251, 0.02) 81%, rgba(251, 251, 251, 0.02) 85%, rgba(19, 19, 19, 0.02) 85%, rgba(19, 19, 19, 0.02) 100%), linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))*/
        /* background-image:linear-gradient(16deg, rgba(116, 116, 116,0.02) 0%, rgba(116, 116, 116,0.02) 25%,transparent 25%, transparent 96%,rgba(177, 177, 177,0.02) 96%, rgba(177, 177, 177,0.02) 100%),linear-gradient(236deg, rgba(148, 148, 148,0.02) 0%, rgba(148, 148, 148,0.02) 53%,transparent 53%, transparent 59%,rgba(56, 56, 56,0.02) 59%, rgba(56, 56, 56,0.02) 100%),linear-gradient(284deg, rgba(16, 16, 16,0.02) 0%, rgba(16, 16, 16,0.02) 46%,transparent 46%, transparent 71%,rgba(181, 181, 181,0.02) 71%, rgba(181, 181, 181,0.02) 100%),linear-gradient(316deg, rgba(197, 197, 197,0.02) 0%, rgba(197, 197, 197,0.02) 26%,transparent 26%, transparent 49%,rgba(58, 58, 58,0.02) 49%, rgba(58, 58, 58,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255)) */
        /*background-image: linear-gradient(74deg, rgba(236, 236, 236,0.02) 0%, rgba(236, 236, 236,0.02) 13%,transparent 13%, transparent 64%,rgba(55, 55, 55,0.02) 64%, rgba(55, 55, 55,0.02) 71%,rgba(239, 239, 239,0.02) 71%, rgba(239, 239, 239,0.02) 100%),linear-gradient(170deg, rgba(8, 8, 8,0.02) 0%, rgba(8, 8, 8,0.02) 1%,transparent 1%, transparent 60%,rgba(9, 9, 9,0.02) 60%, rgba(9, 9, 9,0.02) 80%,rgba(198, 198, 198,0.02) 80%, rgba(198, 198, 198,0.02) 100%),linear-gradient(118deg, rgba(134, 134, 134,0.02) 0%, rgba(134, 134, 134,0.02) 30%,transparent 30%, transparent 43%,rgba(85, 85, 85,0.02) 43%, rgba(85, 85, 85,0.02) 47%,rgba(103, 103, 103,0.02) 47%, rgba(103, 103, 103,0.02) 100%),linear-gradient(249deg, rgba(178, 178, 178,0.02) 0%, rgba(178, 178, 178,0.02) 8%,transparent 8%, transparent 47%,rgba(161, 161, 161,0.02) 47%, rgba(161, 161, 161,0.02) 61%,rgba(19, 19, 19,0.02) 61%, rgba(19, 19, 19,0.02) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))*/
        background-color: #f6f6f6;
    }
</style>
