<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CustomerAllianceForm title="Customer Alliance Form"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomerAllianceForm from '@/components/CustomerAllianceForm.vue';

@Component({
  components: {
    CustomerAllianceForm,
  },
})
export default class Home extends Vue {}
</script>
