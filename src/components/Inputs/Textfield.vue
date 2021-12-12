<template>
  <div>
    <label>
      <div v-if="label">{{label}}</div>
      <input
        v-bind="$attrs"
        v-on="$listeners"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="validate"
        v-model="val"
      />
    </label>
    <span v-if="showError" class="errorMessage">{{errorMsg}}</span>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Model,
} from 'vue-property-decorator';

@Component
export default class Textfield extends Vue {
  @Prop() private label!: string;

  @Model('input', { type: String }) value!: string;

  private showError = false;

  private val = this.value || '';

  get errorMsg(): string {
    if (this.$attrs.type === 'password') {
      return 'Password must contain at least one lowercase letter and a number.';
    }
    return 'Email not valid.';
  }

  public validate(e: Event): void {
    const { value } = e.target as HTMLInputElement;
    if (this.$attrs.type === 'email') {
      this.emailValidation(value);
    } else if (this.$attrs.type === 'password') {
      this.passwordValidation(value);
    }
  }

  public emailValidation(value: string): void {
    const hasAt = /@/.test(value);
    const hasDot = /\./.test(value);

    this.showError = !hasAt || !hasDot;
    this.$store.dispatch('setEmailValid', hasAt && hasDot);
  }

  public passwordValidation(value: string): void {
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);

    this.showError = !hasLowerCase || !hasNumber;
    this.$store.dispatch('setPasswordValid', hasLowerCase && hasNumber);
  }
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

.errorMessage {
  color: red;
  font-size: 11px;
  margin: 5px 0;
}
</style>
