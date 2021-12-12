<template>
  <div class="result-widget">
    <div v-for="q in $store.state.questions" :key="q.id" class="result-widget__question-wrapper">
      <p>{{q.label}}</p>
      <p class="result-widget__question-wrapper__answer">{{q.answer}}</p>
    </div>
    <hr>
    <p class="result-widget__date">DATE OF EXPERIENCE: {{date}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ResultWidget extends Vue {
  get date(): string {
    const d = new Date();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();
    const yy = d.getFullYear();

    return `${yy}/${mm}/${dd}`;
  }
}
</script>

<style lang="scss" scoped>
.result-widget {
  display: block;
  position: absolute;
  top: 20px;
  right: -110px;
  padding: 20px 15px;
  background: whitesmoke;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 12px;
  font-weight: bold;
  max-width: 200px;

  & hr {
    border-width: 2px;
    border-color: red;
  }

  &__question-wrapper {
    p {
      margin: 0;
      &:not(:first-child) {
        margin-bottom: 15px;
      }
    }

    &__answer {
      font-weight: normal;
    }
  }

  &__date {
    color: blue;
    text-align: center;
    padding: 0 5px;
    font-size: 11px;
    margin-bottom: 0;
  }
}

@media (max-width: 600px) {
  .result-widget {
    display: none;
  }
}
</style>
