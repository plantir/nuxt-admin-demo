<style lang="scss" scoped>
#change-password {
  padding: 40px;
  width: 420px;
}
</style>
<template>
  <section id="change-password" ref="wrapper">
    <v-form-generator v-model="item" :formData="formData" :minimal="true"></v-form-generator>
    <v-btn color="info" @click="changePassword">تغییر رمز</v-btn>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import { VRFormData } from "vrwebdesign-nuxt/modules/nuxt-form-generator/types";
export default Vue.extend({
  props: {
    scope: {
      type: Object
    }
  },
  data() {
    return {
      formData: <VRFormData>[
        {
          title: "تغییر رمز عبور",
          rows: [
            {
              label: "رمز عبور جدید",
              type: "textField",
              inputType: "password",
              browserAutocomplete: "new-password",
              model: "password",
              appendIcon: "la-lock",
              validation: { required: true },
              ref: "password"
            },
            {
              label: "تکرار رمز عبور جدید",
              type: "textField",
              inputType: "password",
              browserAutocomplete: "new-password",
              model: "confirm_password",
              appendIcon: "la-lock",
              validation: { required: true, confirmed: "password" }
            }
          ]
        }
      ],
      item: {
        password: ""
      }
    };
  },
  methods: {
    changePassword() {
      this.$validator.validateAll().then(async valid => {
        if (valid) {
          let loader = this.$loader.show(this.$refs.wrapper);
          try {
            await this.scope.done(this.item.password);
            await this.$toast
              .success()
              .timeout(1000)
              .showSimple("رمز ورود با موفقیت تغییر کرد");
            this.$emit("hide");
            loader.hide();
          } catch (error) {
            console.log(error);
            this.$toast.error().showSimple("خطایی رخ داده است");
            loader.hide();
          }
        }
      });
    }
  }
});
</script>
