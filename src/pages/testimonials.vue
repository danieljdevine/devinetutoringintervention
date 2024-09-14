<template>
    <div>
        <BContainer fluid class="page-container strip">
            <BContainer fluid class="strip bg-grayscale-1">
                <div class="p-2 p-xsm-3 p-sm-4 p-lg-5">
                    <h1 class="page-header-long text-center text-primary-blue-5">
                        Let your child get the help <span class="text-secondary-blue-3">they need.</span>
                    </h1>
                    <h3 class="sub-header text-center mt-4">
                        Karen Devine has a long history of impressing parents with their children's vast improvement.
                    </h3>
                </div>
            </BContainer>
            
            <BContainer fluid class="strip bg-primary-green-1">
                <BContainer fluid class="strip bg-image testimonials">
                    <BRow class="g-0 pb-3 pb-sm-5">
                        <BCol cols="0" xl="1" xxl="2"></BCol>
                        <BCol cols="12" xl="10" xxl="8">
                            <div v-for="(testimonial, index) in testimonials" :key="index" class="pt-3 pt-sm-5">
                                <BCard class="shadow m-3 m-sm-5">
                                    <BCardBody class="p-0 p-xsm-2 p-sm-3 pb-0 pb-xsm-0 pb-sm-0">
                                        <div class="text-center p-0 p-sm-3 p-md-5 pb-0 pb-sm-0 pb-md-0">
                                            <p class="large">                
                                                {{ testimonial.text }}
                                            </p>
                                            <h1 class="quotation-mark text-secondary-blue-3 m-0">&rdquo;</h1>
                                        </div>
                                    </BCardBody>
                                </BCard>
                            </div>
                        </BCol>
                    </BRow>
                </BContainer>
            </BContainer>
        </BContainer>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Testimonials',
    setup() {
        const testimonials = ref([
            {
                text: `
                    Words cannot express how grateful I am to Mrs. Devine. 
                    She has guided [my child] with patience, understanding, 
                    and honesty. I am quite certain that she has forever instilled 
                    amazing lessons into [my child].
                    `
            },
            {
                text: `
                    Karen Devine has tutored our daughter for the past two years. 
                    Towards the end of first grade, we were informed that [our daughter] 
                    was reading far below expectations for her grade level. 
                    [Our daughter] started tutoring sessions with Mrs. Devine two 
                    times per week. Using her mastery of Reading Recovery techniques, 
                    within a three month period, Mrs. Devine helped [our daughter] 
                    to improve her reading skills to the level needed to enter second grade.
                `
            },
            {
                text: `
                    [Our son] has improved leaps and bounds since he has been 
                    in Mrs. Devine's class. We think she is an awesome teacher 
                    and a great role model for our son.
                `
            },
            {
                text: `
                    Mrs. Devine is an amazing teacher with a creative spirit 
                    and big heart! I have learned so much from her this year.
                `
            },
            {
                text: `
                    Even though Mrs. Devine and her family have recently moved 
                    out of the immediate area where we live, we intend to drive 
                    30 minutes to continue sessions with Mrs. Devine because 
                    of the wonderful job she has done with our child.
                `
            }
        ]);

        return {
            testimonials
        };
    }
}
</script>

<style lang="scss">
h1.quotation-mark {
    font-family: Catamaran;
    font-size: 100px !important;
    @media screen and (max-width: 576px) {
        font-size: 60px !important;
    }
    @media screen and (max-width: 362px) {
        font-size: 16.57vw !important;
    }
}
</style>