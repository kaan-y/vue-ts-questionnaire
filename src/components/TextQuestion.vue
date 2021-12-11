<template>
  <div class="text-question">
    <div class="text-question__index" v-if="index">{{index}}.</div>
    <div v-if="data.type === 'comment'" class="text-question__comment">
      <Textarea
        :name="data.type"
        rows="2"
        :placeholder="data.label"
        :required="data.validation.required"
      />
    </div>
    <div v-else>
      <p class="text-question__question">{{data.label}}
        <span v-if="data.validation.required" class="text-question__required">
          (required)
        </span>
      </p>
      <Textfield :name="data.type" :required="data.validation.required" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IQuestion } from '@/models/Question';
import Textfield from '@/components/inputs/Textfield.vue';
import Textarea from '@/components/inputs/Textarea.vue';

@Component({
  components: {
    Textfield,
    Textarea,
  },
})
export default class TextQuestion extends Vue {
  @Prop({ required: true }) private data!: IQuestion;

  @Prop() private index!: number;

  private texty = 'asd';
}
</script>

<style lang="scss" scoped>
.text-question {
  display: flex;
  flex-direction: column;

  &__index {
    font-weight: bold;
  }

  &__required {
    color: #B3B6B7;
  }

  &__question {
    margin: 0 0 0.5rem 0;
  }

  &__comment {
    display: inline-flex;
    margin-bottom: 15px;
  }
}
</style>
