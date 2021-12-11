<template>
  <component
    :is="componentName"
    :data="data"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IQuestion } from '@/models/Question';
import SingleChoice from './SingleChoice.vue';
import TextQuestion from './TextQuestion.vue';

@Component({
  components: {
    SingleChoice,
    TextQuestion,
  },
})
export default class Question extends Vue {
  @Prop({ required: true }) private data!: IQuestion;

  get componentName(): string {
    if (this.data.type === 'rating' || this.data.type === 'age') { return 'SingleChoice'; }
    return 'TextQuestion';
  }
}
</script>
