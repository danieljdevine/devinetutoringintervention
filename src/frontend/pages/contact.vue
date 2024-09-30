<template>
    <div>
        <BContainer fluid class="strip page-container bg-secondary-blue-1">
            <BCol class="d-flex align-items-center" style="min-height:100vh"> 
                <BRow class="p-0 g-0 mt-4 mb-4" style="width:100%">
                    <BCol cols="0" md="1" xl="2" class="col-xxxl-3"></BCol>
                    <BCol cols="12" md="10" xl="8" class="col-xxxl-6 ps-4 pe-4">
                        <div class="mb-5">
                            <h1 class="page-header">How Can I Help?</h1>
                        </div>
                        <ContactForm @formSubmission="formSubmission" class="mb-4"></ContactForm>
                        <BAlert v-model="showSuccessAlert" variant="success" dismissible>
                            Thank you for choosing Devine Intervention Tutoring. I will get back to you as soon as I can!
                        </BAlert>
                        <BAlert v-model="showErrorAlert" variant="danger" dismissible>
                            Error submitting your form. Please try again later.
                        </BAlert>
                    </BCol>
                </BRow>
            </BCol>
        </BContainer>
    </div>
</template>

<script setup>
import axios from 'axios';
import { useReCaptcha } from 'vue-recaptcha-v3';
import { onMounted } from 'vue'

onMounted(() => {
    const badge = document.querySelector('.grecaptcha-badge');
    if (badge) badge.style.visibility = 'visible';
});

const showSuccessAlert = ref(false);
const showErrorAlert = ref(false);

const FORM_POST_URL = "https://formspree.io/f/mzzplakr";

const { recaptchaLoaded } = useReCaptcha();

const processForm = (formData) => {
  return {
    "Submitter's Name: ": formData.firstName + " " + formData.lastName,
    "They requested help for: ": formData.helpForSelected.join(", "),
    "They need help with: ": formData.requestForSelected.join(", "),
    "Their email: ": formData.email,
    "Their phone number: ": formData.phone,
    "Their preferred methods of contact: ": formData.contactMethodSelected.length === 0 ? "Email" : formData.contactMethodSelected.join(", "),
    "They left you this short message: ": formData.shortMessage,
    "g-recaptcha-response": formData.recaptchaToken
  };
};

const formSubmission = async (form) => {
  try {
    await recaptchaLoaded();
    const response = await axios.post(FORM_POST_URL, processForm(form));
    showSuccessAlert.value = true;
  } catch (error) {
    showErrorAlert.value = true;
    console.error('Error submitting form:', error);
  }
};
</script>

<style lang="scss">
@import "~/styles/colors.scss";
.alert-danger {
    background-color: $primary-red-1 !important;
    border-color: $primary-red-2 !important;
    color: $primary-red-3 !important;
}
.alert-success {
    background-color: $primary-green-1 !important;
    border-color: $primary-green-2 !important;
    color: $primary-green-5 !important;
}
</style>
