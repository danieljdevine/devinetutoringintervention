<template>
    <BContainer fluid class="strip bg-primary-blue-5">
        <BRow class="g-0 h-100">
            <BCol class="d-flex align-items-center ps-4 pe-4 ps-sm-2 pe-sm-2 pt-5 pb-5 pt-sm-0 pb-sm-0" cols="12" sm="6" md="3">
                <img
                    src="~/assets/logo.png"
                    alt="PSite Logo"
                    class="d-flex w-100">
            </BCol>
            <BCol class="ps-3 pe-2" cols="12" sm="5" md="3" lg="2" offset="0" offset-sm="1" offset-md="0" offset-lg="1">
                <ul class="footer-list pb-5 pt-5">
                    <li v-for="(page, index) in pages" :key="index" class="pt-3">
                        <NuxtLink :to="page.path" class="nav-link grayscale-1 footer-text">{{ page.name }}</NuxtLink>
                    </li>
                </ul>
            </BCol>
            <BCol offset-lg="1" cols="12" md="6" lg="5" class="d-flex align-items-center ps-3 ps-md-0 pt-5 pt-md-0 pb-3 pb-md-0">
                <div class="d-flex w-100">
                    <ul class="footer-list w-100">
                        <li>
                            <a href="mailto:devineinterventiontutoring@gmail.com" class="nav-link grayscale-1 footer-text w-100" style="word-wrap:break-word">
                                devineinterventiontutoring@gmail.com
                            </a>
                        </li>
                        <li class="pt-3">
                            <a href="tel:7196508180" class="nav-link grayscale-1 footer-text">
                                (719) 650-8180
                            </a>
                        </li>
                    </ul>
                </div>
            </BCol>
        </BRow>
    </BContainer>
</template>

<style lang="scss">
    .footer-list {
        list-style-type: none;
        margin: 0;
        padding: 0; 
    }
    .footer-text {
        font-family: Poppins, sans-serif;
        font-size: 18px;
    }
</style>

<script>
import { ref } from 'vue';

export default {
    name: 'App Footer',
    setup() {
        const pages = ref([
            {
                name: 'Home',
                path: '/'
            },
            {
                name: 'About Me',
                path: '/about-me'
            },
            {
                name: 'What is Dyslexia',
                path: '/what-is-dyslexia'
            },
            {
                name: 'Testimonials',
                path: '/testimonials'
            },
            {
                name: 'Contact',
                path: '/contact'
            },
        ]);

        return {
            pages
        };
    }
}
</script>