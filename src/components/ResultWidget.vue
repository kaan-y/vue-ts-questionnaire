<template>
  <div class="result-widget">
    <p>{{question}}</p>
    <p>{{answer}}</p>
    <hr>
    <p class="result-widget__date">DATE OF EXPERIENCE: {{date}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Question extends Vue {
  @Prop({ required: true }) private question!: string;

  @Prop({ required: true }) private answer!: string;

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
  position: absolute;
  top: 20px;
  right: -50px;
  padding: 10px;
  background: whitesmoke;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 12px;
  font-weight: bold;

  & hr {
    border-width: 2px;
    border-color: red;
  }

  &__date {
    color: blue;
    text-align: center;
    padding: 0 5px;
    font-size: 11px;
  }
}
</style>
