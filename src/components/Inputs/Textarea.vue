<template>
  <label>
    <div v-if="label">{{label}}</div>
    <textarea
      v-bind="$attrs"
      v-on="$listeners"
      :value="value"
      @input="$emit('update', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Model,
} from 'vue-property-decorator';

@Component
export default class Textarea extends Vue {
  @Prop() private label!: string;

  @Model('update', { type: String }) value!: string;
}
</script>

<style lang="scss" scoped>
textarea {
  width: 50%;
  padding: 12px 20px;
  box-sizing: border-box;
  border-width: 1px;
  border-radius: 4px;
  font-family: inherit;
}

@media (max-width: 600px) {
  textarea {
    width: 100%;
  }
}
</style>
