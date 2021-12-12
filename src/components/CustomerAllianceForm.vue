<template>
  <div class="ca-form">
    <h1>{{ title }}</h1>
    <div class="ca-form__wrapper">
      <form @submit.prevent="submitForm" class="ca-form__wrapper__form">
        <div v-for="(q, index) in questions" :key="q.id">
          <Question :data="q" :index="index + 1" v-on="$listeners" />
        </div>
        <div class="ca-form__wrapper__form__button-wrapper">
          <button type="submit">Submit</button>
        </div>
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

  public submitForm() {
    const { isEmailValid, isPasswordValid } = this.$store.state;

    if (isEmailValid && isPasswordValid) {
      this.$store.dispatch('submitForm', true);
    }
  }
}
</script>

<style lang="scss" scoped>
.ca-form {
  padding: 3rem;
  @media (max-width: 600px) {
    padding: 1rem;
  }

  &__wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 80% auto;

    &__form {
      position: relative;

      &__button-wrapper {
        display: flex;
        justify-content: flex-end;
        margin-top: 30px;

        button {
          display: inline-block;
          outline: none;
          cursor: pointer;
          font-weight: 600;
          border-radius: 3px;
          padding: 12px 24px;
          border: 0;
          color: #000021;
          background: #1de9b6;
          line-height: 1.15;
          font-size: 16px;
          &:hover {
            transition: all .1s ease;
            box-shadow: 0 0 0 0 #fff, 0 0 0 3px #1de9b6;
          }
        }
      }
    }
  }

}
</style>
