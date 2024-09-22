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
