<template>
  <section ref="wrapper">
    <v-layout row wrap>
      <v-flex xs2></v-flex>
      <v-flex xs8>
        <v-form-generator v-model="item" :formData="formData"></v-form-generator>
        <div>
          <v-btn color="info" @click="changePassword">تغییر رمز ورود</v-btn>
        </div>
      </v-flex>
      <v-flex xs2></v-flex>
    </v-layout>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      formData: [
        {
          rows: [
            {
              label: "رمز عبور جدید",
              inputType: "password",
              validation: { required: true },
              name: "password",
              ref: "password",
              type: "textField",
              model: "password"
            },
            {
              label: "تکرار رمز عبور جدید",
              validation: { required: true, confirmed: "password" },
              inputType: "password",
              type: "textField",
              model: "confirmpassword"
            }
          ]
        }
      ],
      item: {
        password: "",
        confirmpassword: ""
      }
    };
  },
  methods: {
    changePassword() {
      this.$validator.validateAll().then(async valid => {
        if (valid) {
          let loader = this.$loader.show(this.$refs.wrapper);
          try {
            console.log("changed");
            this.$toast.success().showSimple("رمز ورود با موفقیت تغییر کرد");

            loader.hide();
          } catch (error) {
            this.$toast.error().showSimple("خطایی رخ داده است");
            loader.hide();
          }
        }
      });
    }
  }
});
</script>
