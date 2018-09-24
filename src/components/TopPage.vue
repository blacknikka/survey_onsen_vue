<template>
  <v-ons-page>
    <radio-button v-for="(item, index) in question" :key="index" :question="item">
    </radio-button>
  </v-ons-page>
</template>

<script>
import RadioButton from './parts/RadioButton';

export default {
  data() {
    return {
      question: [
        {
          title: 'q1',
          body: 'What do you like?',
          items: [
            'sushi',
            'sukiyaki',
            'ramen-noodle',
          ],
          type: 'SelectOne',
        },
      ],
    };
  },
  components: {
    RadioButton,
  },
};
</script>

<style scoped>
</style>
