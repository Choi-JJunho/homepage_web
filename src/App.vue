<template>
  <my-header v-if="this.$route.path !== '/signin'"></my-header>
  <router-view></router-view>
  <my-footer v-if="this.$route.path !== '/signin'"></my-footer>
</template>

<script>
import headerComponent from "@/components/utils/HeaderComponent";
import footerComponent from "@/components/utils/FooterComponent";

export default {
  name: 'App',
  data() {
    return {
      pathname: window.location.pathname
    }
  },
  components: {
    'my-header': headerComponent,
    'my-footer': footerComponent,
  }
}
</script>

<style scoped>
</style>
