<template>
  <v-ons-card>
    <div class="title">
      {{question.title}}
    </div>
    <div class="content">
      {{question.body}}
      <v-ons-list>
        <v-ons-list-item v-for="(item, index) in question.items" :key="index">{{item}}</v-ons-list-item>
      </v-ons-list>
    </div>
  </v-ons-card>
</template>

<script>
export default {
  props: {
    question: {},
  },
  mounted() {
    console.log(this.question);
  },
};
</script>

<style scoped>
</style>
