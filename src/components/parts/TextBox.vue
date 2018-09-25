<template>
  <v-ons-card>
    <div class="title">
      {{question.title}}
    </div>
    <div class="content">
      {{question.body}}
      <div class="center">
        <textarea class="ons-input" rows="5" placeholder="Please input your idea" float v-model="yourInput" />
      </div>
    </div>
  </v-ons-card>
</template>

<script>
export default {
  props: {
    question: {},
  },
  data() {
    return {
      yourInput: '',
    };
  },
};
</script>

<style scoped>
.ons-input {
  margin-top: 20px;
  rows: 5;
  font-size: 15;
}
</style>
