<template>
  <div class="success">
    You have successfully submitted the form!
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Success extends Vue {}
</script>

<style lang="scss" scoped>
.success {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  font-size: 24px;
  font-weight: bold;
}
</style>
