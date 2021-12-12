<template>
  <div class="single-choice">
    <div class="single-choice__index">{{index}}.</div>
    <p class="single-choice__question">
      {{data.label}}
      <span v-if="data.validation.required" class="single-choice__required">
        (required)
      </span>
    </p>
    <div class="single-choice__choices">
      <div v-if="data.type === 'age'" class="single-choice__choices-age">
        <div v-for="opt in ageOptions" :key="opt" class="single-choice__choices-age__wrapper">
          <input
            type="radio"
            :name="data.type"
            :id="opt"
            :required="data.validation.required"
            :value="opt"
            @change="onChange"
          >
          <label :for="opt">{{opt}}</label>
        </div>
      </div>
      <div v-if="data.type === 'rating'" class="single-choice__choices-rating">
        <div v-for="opt in ratingOptions" :key="opt" class="single-choice__choices-rating__wrapper">
          <input
            type="radio"
            :name="data.type"
            :id="opt"
            :required="data.validation.required"
            :value="opt"
            @change="onChange"
          >
          <label :for="opt">{{opt}}</label>
        </div>
      </div>
    </div>
    <div v-if="subQuestions.length">
      <div v-for="q in subQuestions" :key="q.id">
        <Question :data="q" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import { IQuestion, ISubQuestion, IAnsweredQuestion } from '@/models/Question';

@Component({
  components: {
    // since Question component is both parent and child, this is needed to fix the paradox
    Question: () => import('@/components/Question.vue'),
  },
})
export default class SingleChoice extends Vue {
  @Prop({ required: true }) private data!: IQuestion;

  @Prop() private index!: number;

  private selectedOption = '';

  private subQuestions: ISubQuestion[] = [];

  private ageOptions: string[] = [
    '<20',
    '20-29',
    '30-39',
    '40-49',
    '50-59',
    '60-69',
    '70-79',
    '80+',
  ];

  private ratingOptions: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
  ];

  @Watch('selectedOption')
  selectedOptionChanged(newVal: string): void {
    this.selectedOption = newVal;

    // eslint-disable-next-line no-restricted-syntax
    for (const subQ of this.data.sub_questions) {
      if (subQ.values.includes(this.selectedOption)) {
        this.subQuestions = subQ.questions;
        return;
      }

      this.subQuestions = [];
    }
  }

  public onChange(e: Event): void {
    const { value } = e.target as HTMLInputElement;
    this.selectedOption = value;

    const payload: IAnsweredQuestion = {
      id: this.data.id,
      label: this.data.label,
      answer: value,
    };

    this.$store.dispatch('addQuestion', payload);
  }
}
</script>

<style lang="scss" scoped>
.single-choice {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  &__index {
    font-weight: bold;
  }

  &__required {
    color: #B3B6B7;
  }

  &__question {
    margin: 0 0 0.5rem 0;
  }

  &__choices {
    display: flex;
    flex-direction: column;

    &-age {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));

      &__wrapper {
        border: 1px solid #444;
        border-radius: 4px;
        display: flex;
        justify-content: center;

        &:not(:last-child) {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
          margin-right: -1px;
        }

        &:not(:first-child) {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
      }

      label {
        display: inline-block;
        padding: 15px 20px;
        font-family: sans-serif, Arial;
        font-size: 12px;
        text-align: center;
        width: 100%;
      }

      input[type="radio"] {
        opacity: 0;
        width: 0;

        &:checked + label {
          background-color:#9EEDF5;
        }
      }
    }

    &-rating {
      display: inline-flex;
      flex-wrap: wrap;

      &__wrapper {
        margin-bottom: 0.5rem;
        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }

      label {
        display: inline-block;
        background-color: #ddd;
        padding: 15px 20px;
        font-size: 12px;
        border: 2px solid #B3B6B7;
        border-radius: 50%;
        font-weight: bold;
        color: #B3B6B7;
      }

      input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;

        &:checked + label {
          background-color:#9EEDF5;
          border-color: #94DDE4;
          color: initial;
        }
      }
    }
  }
}
</style>
