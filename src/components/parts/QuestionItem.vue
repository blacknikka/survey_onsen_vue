<template>
  <div>
    <radio-button v-if="GetType === 'SelectOne'" :question="question"/>
    <check-box v-if="GetType === 'SelectMany'" :question="question"/>
  </div>
</template>

<script>
import RadioButton from '@/components/parts/RadioButton';
import CheckBox from '@/components/parts/CheckBox';

export default {
  props: {
    question: {},
  },
  computed: {
    GetType() {
      return this.question.type;
    },
  },
  components: {
    RadioButton,
    CheckBox,
  },
};
</script>

<style scoped>
</style>
