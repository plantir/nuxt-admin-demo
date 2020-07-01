<style lang="scss">
.wrapper {
  //   padding: 3rem 0;
  min-height: 400px;
  position: relative;
  .header_card {
    border-bottom: 1px dashed #cccc;
    width: 100%;
    // padding: 1rem 0;
    margin-bottom: 2rem;
    height: 70px;
    h4 {
      padding: 1.2rem;
      font-size: 20px;
      font-weight: 500;
      color: #000;
    }
  }
  .inner_wrapper {
    height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

<template>
  <section>
    <v-layout>
      <v-flex md3>
        <v-card class="wrapper">
          <div class="header_card">
            <h4>لیبل</h4>
          </div>
          <div class="inner_wrapper">
            <vr-badge :color="'green'">success</vr-badge>
            <vr-badge :color="'warning'">warning</vr-badge>
            <vr-badge :color="'info'">info</vr-badge>
            <vr-badge :color="'error'">error</vr-badge>
          </div>
        </v-card>
      </v-flex>
      <v-flex md3>
        <v-card class="wrapper">
          <div class="header_card">
            <h4>فیلد مالی</h4>
          </div>
          <div>
            <vr-currency
              v-model="transaction"
              v-validate="'required'"
              :error-messages="errors.collect(`transaction_amount`)"
              :disabled="false"
              :name="`transaction_amount`"
              suffix="تومان"
              data-vv-as="مبلغ"
              placeholder="مبلغ"
              outline
              single-line
            ></vr-currency>
          </div>
        </v-card>
      </v-flex>
      <v-flex md3> </v-flex>
      <v-flex md3> </v-flex>
    </v-layout>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class YourComponent extends Vue {}
</script>
