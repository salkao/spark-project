<template>
  <div class="home">
      <b-navbar id="nav" variant="dark">
        <img src="../assets/mobileIcon.png" width="55px" height="50px">
        <b-navbar-brand id="text">Online Mobile Shop</b-navbar-brand>
      </b-navbar>
    <Carousel class="phone"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'home',
  components: {
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
#nav {
font-weight: bold;
color: #FFFFFF;
background: #FFFFFF;
text-shadow: 1px 2px 0 #4286f4, 2px 1px 3px #aba8a8;
border-bottom: 2px solid #4286f4;
}
#text {
  color: #FFFFFF;
}
</style>
