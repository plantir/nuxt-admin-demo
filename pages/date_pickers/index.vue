<style lang="scss" scoped>
.wrapper {
  padding: 3rem 0;
  height: 400px;
  position: relative;
  &.center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header_card {
    border-bottom: 1px dashed #cccc;
    width: 100%;
    margin-bottom: 2rem;
    height: 70px;
    h4 {
      padding: 1.2rem;
      font-size: 20px;
      font-weight: 500;
      color: #000;
    }
  }
  .form-section {
    padding: 0 3rem;
  }
  .buttons {
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
}
</style>
<template>
  <section>
    <v-layout row wrap>
      <v-flex md3>
        <v-card class="wrapper ma-2">
          <div class="form-section">
            <div class="form-group">
              <label>
                نوع تقویم:
              </label>
              <v-select
                v-model="date.type"
                :items="date.typeItems"
                outline
                single-line
                hide-details
              ></v-select>
            </div>
            <div class="form-group">
              <label>
                نوع تاریخ:
              </label>
              <v-select
                v-model="date.typeC"
                :items="date.typeCalender"
                @change="changeCalender"
                outline
                single-line
                hide-details
              ></v-select>
            </div>
          </div>
        </v-card>
      </v-flex>
      <v-flex md9>
        <v-card class=" wrapper center ma-2">
          <div class="form-section">
            <div class="form-group">
              <vr-date-picker
                outline
                single-line
                return-object
                hide-details
                clearable
                v-model="selectedDate"
                :valueFormat="format"
                :format="displayFormat"
                @change="changeDate"
                label="تاریخ مورد نظر خود را انتخاب نمایید"
                :type="date.type"
              >
              </vr-date-picker>
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class YourComponent extends Vue {
  selectedDate = null;
  displayFormat = 'jYYYY-jMM-jDD';
  format = 'YYYY-MM-DD HH:mm:ss';
  date = {
    typeItems: ['date', 'datetime', 'time', 'year-month', 'year', 'month'],
    typeCalender: ['میلادی', 'شمسی'],
    typeC: 'شمسی',
    type: 'date',
  };
  changeCalender() {
    if (this.date.typeC == 'میلادی') {
      this.displayFormat = 'YYYY-MM-DD';
    } else {
      this.displayFormat = 'jYYYY-jMM-jDD';
    }
  }
  changeDate() {
    if (this.date.type == 'time') {
      // this.format = 'YYYY-MM-DD HH:mm:ss';
      this.displayFormat = 'HH:mm';
    }
  }
}
</script>
