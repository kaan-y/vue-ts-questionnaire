<template>
  <div class="home">
    <Success v-if="$store.state.isFormSubmitted" />
    <CustomerAllianceForm title="Customer Alliance Form" v-else/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CustomerAllianceForm from '@/components/CustomerAllianceForm.vue';
import Success from '@/components/Success.vue';

@Component({
  components: {
    CustomerAllianceForm,
    Success,
  },
})
export default class Home extends Vue {}
</script>
