<template>
  <div>
    <BContainer fluid class="strip bg-image aviator">
      <BRow class="g-0" style="height:50%">
        <BCol alignSelf="center" offset="1" offset-md="2" offset-lg="1" cols="10" md="8" lg="5">
          <transition name="fade">
            <div v-if="loaded">
              <h1 class="landing text-center text-grayscale-1">Is your child's reading stuck on the landing strip?</h1>
            </div>
          </transition>
        </BCol>
      </BRow>
      <BRow class="g-0" style="height:50%">
        <BCol id="landing-subtext-container" class="mb-4" offset="1" offset-md="2" offset-lg="8" offset-xl="7" cols="10" md="8" lg="3" xl="4">
          <transition name="fade">
            <div v-if="h2Loaded">
              <h2 class="landing text-center text-grayscale-1">Let me help get those wheels off the ground and soar into the clouds</h2>
            </div>
          </transition>
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid>
      <BRow class="bg-grayscale-2">
        <BCol cols="0" xl="1" xxl="2"></BCol>
        <BCol cols="12" xl="10" xxl="8">
          <BCard no-body class="shadow m-3 m-sm-5">
            <BRow class="g-0">
              <BCol class="d-flex align-items-center" md="4" lg="6" xxl="5">
                <img
                  src="~/assets/karen-1.jpg"
                  alt="Picture of Karen Devine"
                  class="rounded-0 w-100"
                >
              </BCol>
              <BCol md="8" lg="6" xxl="7" class="d-flex align-items-center">
                <BCardBody>
                  <div>
                    <h1 class="text-primary-blue-5 mt-4 mb-4">
                      My Mission
                    </h1>
                    <p class="mb-4">
                      The mission of Devine Intervention is to provide 
                      <span class="text-secondary-blue-3 emphasis-text">all students</span> with 
                      <span class="text-secondary-blue-3 emphasis-text">quality one-on-one custom-designed</span> 
                      tutoring to meet the <span class="text-secondary-blue-3 emphasis-text">unique needs</span> 
                      of each individual student. I am committed to provide instruction that is backed by 
                      <span class="text-secondary-blue-3 emphasis-text">research</span> with the most effective 
                      methods available delivered in a <span class="text-secondary-blue-3 emphasis-text">warm</span> 
                      and <span class="text-secondary-blue-3 emphasis-text">nurturing</span> environment.
                    </p>
                  </div>
                </BCardBody>
              </BCol>
            </BRow>
          </BCard>
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid class="strip">
      <BRow class="d-flex g-0">
        <BCol class="d-flex align-items-center bg-primary-green-2 side-text-box" alignSelf="stretch" cols="12" lg="6">
          <div class="w-100">
            <h1 class="side-text text-center text-dark">My Services</h1>
          </div>
        </BCol>
        <BCol alignSelf="center" cols="12" lg="6">
          <ul class="mt-4 mb-4 me-4">
            <li><p>
              <strong>Dyslexia Intervention</strong> (2nd-Adult) using Take Flight, the gold standard 
              for the treatment of dyslexia. It was designed by the Luke Waites Dyslexia Research Center 
              at Texas Scottish Rite Hospital for Children
            </p></li>
            <li><p>
              <strong>General Reading Tutoring</strong> (K-8) incorporating Orton Gillingham techniques 
              as well as other multisensory teaching techniques 
            </p></li>
            <li><p><strong>General Math Tutoring</strong> (K-8th)</p></li>
            <li><p><strong>Study and Organization Skills</strong> (2nd-8th)</p></li>
          </ul>
        </BCol>
      </BRow>
    </BContainer>
    <BContainer fluid class="strip">
      <BRow class="g-0">
        <BCol class="order-2 order-lg-1" alignSelf="center" cols="12" lg="6">
          <ul class="mt-4 mb-4 me-4">
            <li><p><strong>21 years</strong> classroom teaching experience</p></li>
            <li><p><strong>7 years</strong> private tutoring</p></li>
            <li><p><strong>Colorado Professional Teacher License</strong></p></li>
            <li><p><strong>Orton Gillingham Trained</strong> through IMSE</p></li>
            <li><p><strong>Fully licensed</strong> in Dyslexia Intervention through The Colorado Literacy and Learning Center</p></li>
            <li><p><strong>Reading Recovery Trained</strong></p></li>
            <li><p><strong>ALTA</strong> student member</p></li>
          </ul>
        </BCol>
        <BCol class="d-flex align-items-center bg-primary-blue-1 side-text-box order-1 order-lg-2" alignSelf="stretch" cols="12" lg="6">
          <div class="w-100">
            <h1 class="side-text text-center text-dark">My Experience</h1>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      h2Loaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
      setTimeout(() => {
        this.h2Loaded = true;
      }, 1400); 
    }, 100);
  }
};
</script>

<style lang="scss">
  @import "../styles/custom.scss";

  h1.landing {
    font-size: 40px;
    @media screen and (min-width: 1000px) {
      font-size: 4vw;
    }
    @media screen and (max-width: 362px) {
      font-size: 11.05vw;
    }
  }
  h2.landing {
    font-size: 30px;
    @media screen and (min-width: 1000px) {
      font-size: 3vw;
    }
    @media screen and (max-width: 362px) {
      font-size: 8.29vw;
    }
  }
  
  #landing-subtext-container {
    @media screen and (max-width: 992px) {
      align-self: flex-end;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s !important;
  }
  .fade-enter, .fade-leave-to {
    opacity: 1 !important;
  }

  #mission-card {
    padding: 0;
  }
</style>
<style>
  @import '../../node_modules/bootstrap-vue-next/dist/bootstrap-vue-next.css';
</style>
