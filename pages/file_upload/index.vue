<style lang="scss" scoped>
.wrapper {
  padding: 3rem 0;
  min-height: 400px;
  position: relative;
  &.center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > div {
    padding: 3rem;
  }
}
</style>
<template>
  <section>
    <v-card class="wrapper">
      <div>
        <vr-file-upload v-model="file" errorMessage=""> </vr-file-upload>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class YourComponent extends Vue {
  file = null;
}
</script>
