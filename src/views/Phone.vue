<template>
  <div id="phone">
    <b-navbar id="nav" toggleable="lg" variant="dark">
      <b-navbar-brand> <router-link to="/"></router-link></b-navbar-brand>
      <router-link v-if="showBackBtn" to="/">
  <!-- moze se ukloniti v-if zbog odvojenih viewa za rute -->
        <b-button variant="light">
          <font-awesome-icon icon="hand-point-left" size="lg" />
            Go to home
        </b-button>
      </router-link>
      <h1 class="mx-auto"> {{ getHeaderTitle() }}</h1>
    </b-navbar>
    <Phone/>
  </div>
</template>
<script>
import Phone from '../components/Phone.vue';

export default {
  name: 'phone',
  components: {
    Phone,
  },
  data() {
    return {
      showBackBtn: false,
    };
  },
  methods: {
    getHeaderTitle() {
      if (this.$route.params.id) {
        const phone = this.$store.getters.phones
          .find(p => p.id === parseInt(this.$route.params.id, 10));
        this.showBackBtn = true;
        return phone.name;
      }
      this.showBackBtn = false;
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
  #nav {
  color: #FFFFFF;
  background: #FFFFFF;
  text-shadow: 1px 2px 0 #4286f4, 2px 1px 3px #aba8a8;
  border-bottom: 2px solid #4286f4;
  }
</style>
