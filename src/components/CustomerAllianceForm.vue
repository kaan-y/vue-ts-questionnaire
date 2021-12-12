<template>
  <div class="ca-form-wrapper">
    <h1>{{ title }}</h1>
    <form @submit.prevent="submitForm" class="ca-form-wrapper__form">
      <div v-for="(q, index) in questions" :key="q.id">
        <Question :data="q" :index="index + 1" v-on="$listeners" />
      </div>
      <button type="submit">Submit</button>
      <ResultWidget question="asdasdasdasd" answer="1" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Question from '@/components/Question.vue';
import ResultWidget from '@/components/ResultWidget.vue';
import questionsJson from '@/data/questions.json';

@Component({
  components: {
    Question,
    ResultWidget,
  },
})
export default class CustomerAllianceForm extends Vue {
  @Prop() private title!: string;

  private questions = questionsJson.questions;
}
</script>

<style lang="scss" scoped>
.ca-form-wrapper {
  padding: 3rem;

  &__form {
    position: relative;
  }
}
</style>
