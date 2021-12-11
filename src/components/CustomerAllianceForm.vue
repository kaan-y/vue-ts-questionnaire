<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="submitForm">
      <div v-for="(q, index) in questions" :key="q.id">
        <Question :data="q" :index="index + 1" v-on="$listeners" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Question from '@/components/Question.vue';
import questionsJson from '@/data/questions.json';

@Component({
  components: {
    Question,
  },
})
export default class CustomerAllianceForm extends Vue {
  @Prop() private title!: string;

  private questions = questionsJson.questions;
}
</script>
