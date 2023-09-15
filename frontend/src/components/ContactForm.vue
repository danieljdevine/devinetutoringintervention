<template>
    <BForm @submit="onSubmit" :key="form.formKey">
        <BRow class="g-0">
            <BCol cols="6">
                <BFormGroup
                    id="input-group-fn"
                    label="First Name"
                    label-for="input-fn"
                >
                    <BFormInput
                        id="input-fn"
                        variant="transparent"
                        v-model="form.firstName"
                        type="text"/>
                </BFormGroup>
            </BCol>
            <BCol cols="6">
                <BFormGroup
                    id="input-group-ln"
                    label="Last Name"
                    label-for="input-ln"
                >
                    <BFormInput
                        id="input-ln"
                        v-model="form.lastName"
                        type="text"/>
                </BFormGroup>
            </BCol>
        </BRow>
        <BRow class="g-0">
            <BCol cols="6">
                <BFormGroup
                    id="checkbox-group-hf"
                    label="I am requesting help for: "
                    label-for="checkbox-hf"
                >
                    <BFormCheckboxGroup
                        id="checkbox-hf"
                        v-model="form.helpForSelected"
                        :options="options.helpForOptions"
                        stacked/>
                </BFormGroup>
            </BCol>
            <BCol cols="6">
                <BFormGroup
                    id="checkbox-group-rf"
                    label="This request relates to: "
                    label-for="checkbox-rf"
                >
                    <BFormCheckboxGroup
                        id="checkbox-rf"
                        v-model="form.requestForSelected"
                        :options="options.requestForOptions"
                        stacked/>
                </BFormGroup>
            </BCol>
        </BRow>
        <BRow class="g-0">
            <BCol cols="7">
                <BFormGroup
                    id="input-group-e"
                    label="Email"
                    label-for="input-e"
                >
                    <BFormInput
                        id="input-e"
                        v-model="form.email"
                        type="email"/>
                </BFormGroup>
            </BCol>
            <BCol cols="5">
                <BFormGroup
                    id="input-group-ph"
                    label="Phone"
                    label-for="input-ph"
                >
                    <BFormInput
                        id="input-ph"
                        v-model="form.phone"
                        type="tel"/>
                </BFormGroup>
            </BCol>
        </BRow>
        <BRow class="g-0">
            <BCol cols="12">
                <BFormGroup
                    id="checkbox-group-cm"
                    label="Preferred method of contact"
                    label-for="checkbox-cm"
                >
                    <BFormCheckboxGroup
                        id="checkbox-cm"
                        v-model="form.contactMethodSelected"
                        :options="options.contactMethodOptions"/>
                </BFormGroup>
            </BCol>
        </BRow>
        <BRow class="g-0">
            <BCol cols="12">
                <BFormGroup
                    id="textarea-group-sm"
                    label="Please leave a short message about your or your child's needs"
                    label-for="textarea-sm"
                >
                    <BFormTextarea 
                        id="textarea-sm"
                        v-model="form.shortMessage"
                        type="text"
                        placeholder="How I can help you or your child..."/>
                </BFormGroup>
                
            </BCol>
        </BRow>
        <BButton type="submit" variant="primary-blue-4">Submit</BButton>
    </BForm>
    <p>
        {{ form }}
    </p>
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