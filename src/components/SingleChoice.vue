<template>
  <div>
    <div>
      {{index}}
    </div>
    <p>{{data.label}} <span v-if="data.validation.required">(required)</span></p>
    <div v-if="data.type === 'age'">
      <div v-for="opt in ageOptions" :key="opt">
        <label :for="opt">{{opt}}</label>
        <input type="radio" :name="data.type" :id="opt">
      </div>
    </div>
    <div v-if="data.type === 'rating'">
      <div v-for="opt in ratingOptions" :key="opt">
        <label :for="opt">{{opt}}</label>
        <input type="radio" :name="data.type" :id="opt">
      </div>
    </div>
    <div v-if="showSubQuestions && data.sub_questions.length">
      <div v-for="(subQ, index) in data.sub_questions" :key="index">
        <div v-for="q in subQ.questions" :key="q.id">
          <Question :data="q" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IQuestion } from '@/models/Question';

@Component({
  components: {
    // since Question component is both parent and child, this is needed to fix paradox
    Question: () => import('@/components/Question.vue'),
  },
})
export default class SingleChoice extends Vue {
  @Prop({ required: true }) private data!: IQuestion;

  @Prop() private index!: number;

  private showSubQuestions = true;

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
}
</script>
