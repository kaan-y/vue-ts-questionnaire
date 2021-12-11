<template>
  <div>
    <div>
      {{index}}
    </div>
    <p>{{data.label}} <span v-if="data.validation.required">(required)</span></p>
    <div v-if="data.type === 'comment'">
      <textarea :name="data.type" id="" rows="2" :placeholder="data.label"/>
    </div>
    <div v-else>
      <input type="text" :name="data.type" :id="data.id"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IQuestion } from '@/models/Question';

@Component
export default class TextQuestion extends Vue {
  @Prop({ required: true }) private data!: IQuestion;

  @Prop() private index!: number;
}
</script>
