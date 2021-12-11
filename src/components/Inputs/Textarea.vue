<template>
  <label>
    <div>{{label}}</div>
    <input
      v-bind="$attrs"
      type="textarea"
      v-on="$listeners"
      :value="value"
      @input="$emit('update', $event.target.value)">
  </label>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Model,
} from 'vue-property-decorator';

@Component
export default class Textarea extends Vue {
  // inheritAttrs: false;

  @Prop() private label!: string;

  @Model('update', { type: String }) value!: string;
}
</script>
