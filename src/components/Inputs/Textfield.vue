<template>
  <label>
    <div v-if="label">{{label}}</div>
    <input
      type="text"
      v-bind="$attrs"
      v-on="$listeners"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Model,
} from 'vue-property-decorator';

@Component
export default class Textfield extends Vue {
  @Prop() private label!: string;

  @Model('input', { type: String }) value!: string;
}
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 4px;
  border-width: 1px;
  height: 50px;
}
</style>
