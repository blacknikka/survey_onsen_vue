<template>
  <section style="margin: 16px">
    <v-ons-button modifier="large" style="margin: 6px 0" :disabled="IsSubmitOK">Submit</v-ons-button>
  </section>
</template>

<script>
export default {
  computed: {
    IsSubmitOK() {
      return true;
    },
  },
};
</script>

<style scoped>
</style>
