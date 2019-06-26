<template>
  <div id="phone">
    <b-card id="card" no-body class="overflow-hidden mx-auto" style="max-width: 650px;">
      <b-row no-gutters>
      <b-col md="6 imageCol" class="imageCol">
        <b-card-img :src="phone.image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="phone.price" style="color: red" class="price">
          <b-card-text style="color: #2c3e50">
            <ul>
              <li><span class="spanBold">Manufacteuer:</span> {{ phone.manufacturer }}</li>
              <li><span class="spanBold">RAM:</span> {{ phone.ram }}</li>
              <li><span class="spanBold">Processor (CPU):</span> {{ phone.cpu }}</li>
              <li><span class="spanBold">Graphics (GPU):</span> {{ phone.gpu }}</li>
              <li><span class="spanBold">Internal memory:</span> {{ phone.internal_memory }}</li>
              <li><span class="spanBold">Back camera:</span> {{ phone.back_camera }}</li>
              <li><span class="spanBold">Front camera:</span>  {{ phone.front_camera }}</li>
              <li><span class="spanBold">Battery:</span> {{ phone.battery }}</li>
              <li><span class="spanBold">Battery removable:</span>
                {{ phone.battery_removable | capitalize }}
              </li>
              <li><span class="spanBold">LtE:</span> {{ phone.lte | capitalize }}</li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
</template>

<script>
export default {
  name: 'phone',
  computed: {
    phone() {
      return this.$store.getters.phones.find(p => p.id === parseInt(this.$route.params.id, 10));
    },
  },
  filters: {
    capitalize: value => value.charAt(0).toUpperCase() + value.slice(1),
  },
};
</script>

<style lang="scss" scoped>
  ul {
    padding-left: 20px;
    list-style-type: none;
    text-align: left;
  }
  #card {
    margin-top: 60px;
    text-align: left;
  }
  .row {
    padding: 20px;
  }
  .spanBold {
    font-weight: bold;
  }
  h4 {
    margin-left: 15px;
  }
</style>
