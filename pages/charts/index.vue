<style lang="scss" scoped>
.options {
  height: 700px;
  padding: 1rem;
}
.spacer {
  // margin: 0 1rem;
  .content {
    padding: 3rem 0;
    height: 700px;
  }
}
</style>
<template>
  <section>
    <v-layout row wrap>
      <v-flex xs12 md3>
        <v-card class="ma-2">
          <div class="options">
            <!-- <v-select
              :items="items"
              v-model="chartType"
              label="نوع نمودار"
              hide-details
            ></v-select> -->
            <label>نوع نمودار:</label>
            <v-radio-group v-model="chartType" column>
              <v-radio label="line" value="line"></v-radio>
              <v-radio label="pie" value="pie"></v-radio>
              <v-radio label="column" value="column"></v-radio>
            </v-radio-group>
          </div>
        </v-card>
      </v-flex>
      <v-flex xs12 md9>
        <v-card class="spacer ma-2">
          <div class="content">
            <component :is="showChart()" />
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import lineChart from '@/components/charts/line.vue';
import pieChart from '@/components/charts/pie.vue';
import columnChart from '@/components/charts/column.vue';
@Component
export default class YourComponent extends Vue {
  chartType = 'line';
  items = ['line', 'pie', 'column'];
  showChart() {
    if (this.chartType == 'line') {
      return lineChart;
    } else if (this.chartType == 'pie') {
      return pieChart;
    } else if (this.chartType == 'column') {
      return columnChart;
    }
  }
}
</script>
