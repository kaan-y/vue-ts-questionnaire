<template>
  <div class="ca-form">
    <h1>{{ title }}</h1>
    <div class="ca-form__wrapper">
      <form @submit.prevent="submitForm" class="ca-form__wrapper__form">
        <div v-for="(q, index) in questions" :key="q.id">
          <Question :data="q" :index="index + 1" v-on="$listeners" />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ResultWidget v-if="this.$store.state.questions.length" />
    </div>
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
.ca-form {
  padding: 3rem;

  &__wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 80% auto;

    &__form {
      position: relative;
    }
  }

}
</style>
