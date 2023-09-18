<template>
    <div>
        <BContainer fluid class="page-container strip bg-secondary-blue-1">
            <BContainer fluid class="strip video-container">
                <img src="~assets/video-thumbnail.jpg" alt="Blurred Background" class="background-image">
                <iframe 
                    src="https://www.youtube.com/embed/kE3DqJP-nkI"
                    title="What Is Dyslexia? | Dyslexia Explained"
                    class="foreground-video"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            </BContainer>
            <BContainer fluid class="strip">
                <BRow class="d-flex g-0">
                    <BCol class="d-flex align-items-center bg-transparent side-text-box" alignSelf="stretch" cols="12" lg="6">
                        <div class="w-100">
                            <h1 class="side-text text-center text-primary-blue-5">What is Dyslexia?</h1>
                        </div>
                    </BCol>
                    <BCol class="bg-grayscale-1" alignSelf="center" cols="12" lg="6">
                        <div class="m-4">
                            <p>
                                "<span class="text-secondary-blue-3 emphasis-text-large">Dyslexia</span> is 
                                a language-based learning disability. Dyslexia refers to 
                                a cluster of symptoms, which result in people having difficulties with 
                                specific language skills, particularly reading. Students with dyslexia 
                                usually experience difficulties with other language skills such as spelling, 
                                writing, and pronouncing words. Dyslexia affects individuals throughout their lives; 
                                however, its impact can change at different stages in a person's life. 
                                It is referred to as a learning disability because dyslexia can make 
                                it very difficult for a student to succeed academically in the typical 
                                instructional environment, and in its more severe forms, will qualify 
                                a student for special education, special accommodations, or extra support services."
                            </p>
                        </div>
                    </BCol>
                </BRow>
            </BContainer>
        </Bcontainer>
    </div>
</template>

<style lang="scss">
@use "sass:math";
@import "../styles/colors.scss";

.video-container {
    position: relative;
    overflow: hidden;

    height: 900px !important;
    width: 100vw !important;
    @media screen and (max-width: 1800px) {
        height: 50vw !important;
    }
    @media screen and (max-width: 1200px) {
        height: 600px !important;
    }
    @media screen and (max-width: 600px) {
        height: 100vw !important;
    }
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    z-index: 0;
}

.foreground-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    
    height: 100% !important;
    width: 1600px !important;
    @media screen and (max-width: 1800px) {
        width: 50vw * math.div(16, 9) !important;
    }
    @media screen and (max-width: 1200px) {
        width: 600px * math.div(16, 9) !important;
    }
    @media screen and (max-width: 1067px) {
        width: 100vw !important;
        height: 100vw * math.div(9, 16) !important;
    }
}

</style>