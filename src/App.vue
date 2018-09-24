<template>
  <top-page id="app">
  </top-page>
</template>

<script>
import TopPage from './components/TopPage';

export default {
  name: 'app',
  components: {
    TopPage,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side='left'][animation='overlay'] {
  border-right: 1px solid #bbb;
}
</style>
