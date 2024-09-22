<template>
    <BForm @submit="onSubmit" :key="form.formKey">
        <BRow class="g-0 mb-4">
            <BCol cols="12" sm="6" class="pe-sm-2 mb-4 mb-sm-0">
                <BFormGroup
                    id="input-group-fn"
                    label="First Name"
                    label-for="input-fn"
                >
                    <BFormInput
                        id="input-fn"
                        class="text-input"
                        v-model="form.firstName"
                        type="text"/>
                </BFormGroup>
            </BCol>
            <BCol cols="12" sm="6" class="ps-sm-2">
                <BFormGroup
                    id="input-group-ln"
                    label="Last Name"
                    label-for="input-ln"
                >
                    <BFormInput
                        id="input-ln"
                        class="text-input"
                        v-model="form.lastName"
                        type="text"/>
                </BFormGroup>
            </BCol>
        </BRow>
        <BRow class="g-0  mb-4">
            <BCol cols="12" sm="6" class="pe-sm-2 mb-4 mb-sm-0">
                <BFormGroup
                    id="checkbox-group-hf"
                    label="I am requesting help for: "
                    label-for="checkbox-hf"
                >
                    <BFormCheckboxGroup
                        id="checkbox-hf"
                        class="checkbox-input"
                        v-model="form.helpForSelected"
                        :options="options.helpForOptions"
                        stacked/>
                </BFormGroup>
            </BCol>
            <BCol cols="12" sm="6" class="ps-sm-2">
                <BFormGroup
                    id="checkbox-group-rf"
                    label="This request relates to: "
                    label-for="checkbox-rf"
                >
                    <BFormCheckboxGroup
                        id="checkbox-rf"
                        class="checkbox-input"
                        v-model="form.requestForSelected"
                        :options="options.requestForOptions"
                        stacked/>
                </BFormGroup>
            </BCol>
        </BRow>
        <BRow class="g-0 mb-4">
            <BCol cols="12" sm="7" class="pe-sm-2 mb-4 mb-sm-0">
                <BFormGroup
                    id="input-group-e"
                    label="Email"
                    label-for="input-e"
                >
                    <BFormInput
                        id="input-e"
                        class="text-input"
                        v-model="form.email"
                        type="email"/>
                </BFormGroup>
            </BCol>
            <BCol cols="12" sm="5" class="ps-sm-2">
                <BFormGroup
                    id="input-group-ph"
                    label="Phone"
                    label-for="input-ph"
                >
                    <BFormInput
                        id="input-ph"
                        class="text-input"
                        v-model="form.phone"
                        type="tel"/>
                </BFormGroup>
            </BCol>
        </BRow>
        <BRow class="g-0 mb-4">
            <BCol cols="12">
                <BFormGroup
                    id="checkbox-group-cm"
                    label="Preferred method of contact"
                    label-for="checkbox-cm"
                >
                    <BFormCheckboxGroup
                        id="checkbox-cm"
                        class="checkbox-input"
                        v-model="form.contactMethodSelected"
                        :options="options.contactMethodOptions"/>
                </BFormGroup>
            </BCol>
        </BRow>
        <BRow class="g-0 mb-4">
            <BCol cols="12">
                <BFormGroup
                    id="textarea-group-sm"
                    label="Please leave a short message about your or your child's needs"
                    label-for="textarea-sm"
                >
                    <BFormTextarea 
                        id="textarea-sm"
                        class="text-input"
                        v-model="form.shortMessage"
                        type="text"
                        placeholder="How I can help you or your child..."/>
                </BFormGroup>
            </BCol>
        </BRow>
        <BRow class="g-0 mb-4">
            <BCol cols="12">
                <BButton type="submit" variant="primary-blue-4"><span class="btn-text">Submit</span></BButton>
            </BCol>
        </BRow>
    </BForm>
</template>

<script>
    import { reactive, defineComponent } from 'vue';

    export default defineComponent({
        setup(_, { emit }) {
            const options = {
                helpForOptions: ['Myself', 'My Child'],
                requestForOptions: ['Dyslexia Intervention', 'Tutoring', 'Study and Organization Skills'],
                contactMethodOptions: ['Email', 'Text', 'Phone Call']
            }

            const form = reactive({
                formKey: 0,
                firstName: '',
                lastName: '',
                helpForSelected: [],
                requestForSelected: [],
                email: '',
                phone: '',
                contactMethodSelected: [],
                shortMessage: ''
            });

            function onSubmit(event) {
                event.preventDefault();

                emit('formSubmission', form);

                form.formKey++;
                form.firstName = '';
                form.lastName = '';
                form.helpForSelected = [];
                form.requestForSelected = [];
                form.email = '';
                form.phone = '';
                form.contactMethodSelected = [];
                form.shortMessage = '';
            };

            return { form, options, onSubmit };
        }
        
    });
</script>