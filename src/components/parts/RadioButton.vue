<template>
  <v-ons-card>
    <div class="title">
      {{question.title}}
    </div>
    <div class="content">
      {{question.body}}
      <v-ons-list>
        <v-ons-list-item v-for="(select, index) in question.items" :key="index">
          <label class="left">
            <v-ons-radio :input-id="'radio-' + index" :value="select" v-model="selected">
            </v-ons-radio>
          </label>
          <label :for="'radio-' + index" class="center">
            {{ select }}
          </label>
        </v-ons-list-item>
      </v-ons-list>
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
      selected: '',
    };
  },
};
</script>

<style scoped>
</style>
