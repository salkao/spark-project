<template>
  <div class="hello">
  <b-carousel
    class="mx-auto"
    id="carousel-1"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    img-width="500"
    img-height="500"
    style="text-shadow: 1px 1px 2px #333;">
      <b-carousel-slide id="carouselText" v-for="(phone, index) in phones"
        :key="phone.id"
        :index="index"
        :text="phone.name">
        <img
          @click="goToRoute(phone.id)"
          @contextmenu.prevent="removePhone(index)"
          slot="img"
          class="d-block img-fluid w-100 h-15"
          :src="phone.image"
          alt="image slot"
          width="800"
          height="500"
        >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  methods: {
    goToRoute(id) {
      this.$router.push(`/phone/${id}`);
    },
    removePhone(index) {
      this.$store.dispatch('removePhone', index);
    },
  },
  computed: {
    phones() {
      return this.$store.getters.phones;
    },
  },
  beforeCreate() {
    this.$store.dispatch('getData');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-fluid {
  max-height: 450px !important;
}
#carousel-1 {
  margin-top: 60px;
  max-width: 600px;
}
#carouselText {
  font-size: 30px;
  text-shadow: 2px -2px 0 #2e3033, 1px 1px 5px #aba8a8;
}
</style>
