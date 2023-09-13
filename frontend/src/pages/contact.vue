<template>
    <div>
        <BContainer fluid class="strip page-container bg-secondary-blue-1">
            <BCol class="d-flex align-items-center" style="min-height:100vh;width:100vw">
                <BRow class="g-0">
                    <BCol cols="3"></BCol>
                    <BCol cols="6">
                        <div class="mb-5">
                            <h1 class="page-header">How Can I Help?</h1>
                        </div>
                        <ContactForm @formSubmission="formSubmission" class="mb-4"></ContactForm>
                    </BCol>
                </BRow>
            </BCol>
        </BContainer>
    </div>
</template>

<script setup>
function formSubmission(form) {
    alert(JSON.stringify(form));
}
</script>
