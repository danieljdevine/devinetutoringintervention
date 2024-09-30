import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6Lc--UsqAAAAAOwRfPLcsFRPWXnFaiDZhQBJUDNG',
        loaderOptions: {
            useRecaptchaNet: true,
            autoHideBadge: false
        }
    });
});