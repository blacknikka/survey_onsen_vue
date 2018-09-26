<template>
  <div>
    <v-ons-page>
      <question-item v-for="(item, index) in question" :key="index" :question="item" />
      <submit-button />
    </v-ons-page>
  </div>
</template>

<script>
import QuestionItem from '@/components/parts/QuestionItem';
import SubmitButton from '@/components/parts/SubmitButton';

export default {
  data() {
    return {
      question: [
        {
          title: 'Q1',
          body: 'What Japanese food do you like? (Please select one)',
          items: [
            'sushi',
            'sukiyaki',
            'ramen-noodle',
          ],
          type: 'SelectOne',
        },
        {
          title: 'Q2',
          body: 'What kind OS do you like? (You can select many)',
          items: [
            'iOS',
            'Android',
            'Windows',
            'macOS',
            'Linux',
          ],
          type: 'SelectMany',
        },
        {
          title: 'Q3',
          body: 'Which do you like? (Please select one)',
          items: [
            'Baseball',
            'Football',
          ],
          type: 'SelectOne',
        },
        {
          title: 'Q4',
          body: 'How do you think about this web site? (200 characters max)',
          type: 'WriteAny',
        },
      ],
    };
  },
  components: {
    QuestionItem,
    SubmitButton,
  },
};
</script>

<style scoped>
</style>
