<template>
    <section class="h-screen w-full flex flex-col lg:mt-48 items-center">
        <div class="mt-10">
            <img src="@/assets/images/hero.svg" class="w-64" alt="rocket">
        </div>
        <div class="my-10">
            <p class="mx-4 text-2xl">
                <span class="text-blue-400 text-3xl">Hi there! How is going?</span> If you need to tell me something you
                can fill the
                form or send me an email clicking
                <a href="mailto:jesestrod.business@gmail.com" class="text-red-400">here.</a></p>
        </div>

        <form class="w-5/6 max-w-lg mx-10" ref="contactForm" @submit.prevent="sendEmail">
            <div class="md:flex md:items-center mb-3">
                <div class="md:w-1/3 flex justify-start md:block">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                        Full Name
                    </label>
                </div>
                <div class="md:w-2/3 flex flex-col">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                           id="name" name="name" type="text" placeholder="John Doe" v-model.trim="$v.name.$model">
                </div>
            </div>
            <div class="w-full mb-5" v-if="$v.name.$anyError">
                <p class="text-sm text-red-400" v-if="!$v.name.required">Field is required</p>
                <p class="text-red-400 text-sm" v-if="!$v.name.minLength">Name must have at least
                    {{$v.name.$params.minLength.min}} letters.</p>
            </div>
            <div class="md:flex md:items-center mb-3">
                <div class="md:w-1/3 flex justify-start md:block">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email">
                        E-mail
                    </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                           id="email" name="email" type="email" placeholder="John@doe.com"
                           v-model.trim="$v.email.$model"
                    >
                </div>
            </div>
            <div class="w-full mb-5" v-if="$v.email.$anyError">
                <p class="text-red-400 text-sm" v-if="!$v.email.required">Field is required</p>
                <p class="text-red-400 text-sm" v-if="!$v.email.email">Is not a correct email format</p></div>
            <div class="md:flex md:items-center mb-3">
                <div class="md:w-1/3 flex justify-start md:block">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Message
                    </label>
                </div>
                <div class="md:w-2/3">
                    <textarea
                            v-model.trim="$v.messageT.$model"
                            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                            id="messageT" name="messageT"/>
                </div>

            </div>
            <div class="w-full mb-5" v-if="$v.messageT.$anyError">
                <p class="text-red-400 text-sm" v-if="!$v.messageT.required">Field is required</p>
                <p class="text-red-400 text-sm" v-if="!$v.messageT.minLength">Your message must have at least
                    {{$v.messageT.$params.minLength.min}} letters.</p></div>
            <div class="md:flex md:items-center justify-end">

                <button
                        class="shadow bg-blue-700 hover:bg-blue-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                        type="submit">
                    Submit
                </button>
            </div>
        </form>
        <loading :active.sync="isLoading"
                 :can-cancel="false"
                 loader="dots"
                 color="#4287f5"
                 :is-full-page="true"/>
    </section>
</template>

<script>
    import {required, minLength, email} from 'vuelidate/lib/validators'
    import emailjs from 'emailjs-com';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    // import {TimelineLite, Back, gsap} from 'gsap'
    // import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
    // import {TextPlugin} from 'gsap/TextPlugin'
    // import {CSSPlugin} from 'gsap/CSSPlugin'

    export default {
        components: {Loading},
        data() {
            return {
                name: '',
                email: '',
                messageT: '',
                submitStatus: null,
                contactForm: null,
                isLoading: false
            }
        },
        mounted() {

        },
        validations: {
            name: {
                required,
                minLength: minLength(2)
            },
            email: {
                required,
                email
            },
            messageT: {
                required,
                minLength: minLength(15)
            }
        },
        methods: {
            sendEmail(e) {

                this.$v.$touch();
                if (this.$v.$invalid) {
                    this.submitStatus = 'ERROR'
                } else {
                    this.isLoading = true;
                    emailjs.sendForm(
                        'mailjet',
                        'template_gsk0BILi',
                        e.target,
                        'user_PcoWIhwM4rfvlixB9pSfm')
                        .then(() => {
                            this.$swal(`Thanks ${this.name}!`, 'Your email has been sent successfully', "success");
                            this.name = '';
                            this.email = '';
                            this.messageT = '';
                        }, () => {
                            this.$swal(`Ouch!`, 'There are a problem sending the email. If you need to contact me you can do it through: jesestrod.business@gmail.com', "error");
                        })
                        .finally(() => {
                            this.$v.$reset();
                            this.isLoading = false;
                        })


                }
            }
        }
    }
</script>

<style>

</style>
