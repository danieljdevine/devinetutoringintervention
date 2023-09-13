<template>
    <BNavbar toggleable="lg" variant="primary-blue-5" fixed="top">
        <BNavbarBrand href="/">
            <img id="logo" src="~/assets/logo.png">
        </BNavbarBrand>
        <BNavbarToggle target="nav-collapse" class="p-0" height="100%">
            <template #default="{ expanded }">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FFFFFF" class="bi bi-justify" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </template>
        </BNavbarToggle>
        <BCollapse id="nav-collapse" variant="grayscale-1" is-nav>
            <BNavbarNav class="ms-auto mb-2 mb-lg-0">
                <li class="nav-item h5 ms-xxl-5 ms-xl-4 ms-lg-1">
                    <NuxtLink to="/" class="nav-link grayscale-1">Home</NuxtLink>
                </li>
                <li class="nav-item h5 ms-xxl-5 ms-xl-4 ms-lg-1">
                    <NuxtLink to="/about-me" class="nav-link grayscale-1">About Me</NuxtLink>
                </li>
                <li class="nav-item h5 ms-xxl-5 ms-xl-4 ms-lg-1">
                    <NuxtLink to="/what-is-dyslexia" class="nav-link grayscale-1">What is Dyslexia</NuxtLink>
                </li>
                <li class="nav-item h5 ms-xxl-5 ms-xl-4 ms-lg-1">
                    <NuxtLink to="/testimonials" class="nav-link grayscale-1">Testimonials</NuxtLink>
                </li>
                <li class="nav-item h5 ms-xxl-5 ms-xl-4 ms-lg-1 me-lg-1 me-xl-4 me-xxl-5">
                    <NuxtLink to="/contact" class="nav-link grayscale-1">Contact</NuxtLink>
                </li>
            </BNavbarNav>
        </BCollapse> 
    </BNavbar>
</template>

<style lang="scss">
    .navbar {
        height: 76px;
        @media screen and (max-width: 768px) {
            height: 58px;
        }
    }
    #logo {
        height: 50px;
        @media screen and (max-width: 768px) {
            height: 30px;
        }
    }
</style>