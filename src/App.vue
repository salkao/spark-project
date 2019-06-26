<template>
  <div id="app">
    <footer>
      <b-navbar type="dark" variant="dark" fixed="bottom">
        <b-nav-form class="mx-auto">
        <b-navbar-brand id="text">Subscribe for top stories, new launches & expert reviews!</b-navbar-brand>
          <b-form-input class="mr-sm-2" placeholder="Email"></b-form-input>
          <b-button variant="outline-primary" class="my-2 my-sm-0" type="submit">Subscribe</b-button>
        </b-nav-form>
      </b-navbar>
    </footer>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // background-color:#aba8a8;
  // color: #2c3e50;
}
h1 {
  color: #fff;
}
nav {
  margin: 0;
}
#text {
  font-size: 16px;
}

</style>
