<template>
  <section ref="wrapper">
    <h3>ثبت نام</h3>
    <h6>برای ثبت نام لازم است اطلاعات خود را وارد نمایید</h6>
    <v-form autocomplete="off">
      <div>
        <v-text-field
          v-validate="'required|nationalCode'"
          :error-messages="errors.collect('username')"
          prepend-inner-icon="account_circle"
          name="username"
          v-model="new_user.username"
          label="نام کاربری(کدملی)"
          id="id"
        ></v-text-field>
        <v-text-field
          v-validate="'required|mobile'"
          :error-messages="errors.collect('mobile')"
          prepend-inner-icon="phone"
          name="mobile"
          v-model="new_user.mobile"
          label="موبایل"
          id="id"
        ></v-text-field>
      </div>
      <div class="remember-me">
        <v-checkbox
          v-validate="'required'"
          :error-messages="errors.collect('condition')"
          name="condition"
          label="قبول شرایط سایت"
          v-model="new_user.accept_condition"
        ></v-checkbox>
      </div>
      <v-btn @click="register" round color="info">ثبت نام</v-btn>
      <v-btn @click="$emit('changeView','login')" round color="accent">انصراف</v-btn>
    </v-form>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      new_user: <any>{},
      branches: []
    };
  },
  methods: {
    async register() {}
  }
});
</script>

