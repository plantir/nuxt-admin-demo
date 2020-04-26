<style lang="scss">
</style>

<template>
  <section ref="wrap">
    <v-layout row wrap>
      <v-flex xs2></v-flex>
      <v-flex xs8>
        <v-form-generator v-model="item" :formData="formData"></v-form-generator>
        <div>
          <v-btn color="info" @click="save">ذخیره</v-btn>
        </div>
      </v-flex>
      <v-flex xs></v-flex>
    </v-layout>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import { VRFormData } from "vrwebdesign-nuxt/modules/nuxt-form-generator/types";
export default Vue.extend({
  props: {
    item: {
      type: Object as () => any
    }
  },
  data() {
    let formData: VRFormData = [
      {
        title: "اطلاعات عمومی:",
        rows: [
          {
            label: "نام",
            validation: { required: true },
            type: "textField",
            placeholder: "نام را به فارسی وارد نمایید",
            model: "name"
          },
          {
            label: "نام خانوادگی",
            validation: { required: true },
            type: "textField",
            placeholder: "نام خانوادگی را به فارسی وارد نمایید",
            model: "family"
          },
          {
            label: "شماره موبایل",
            validation: { required: true, mobile: true },
            type: "textField",
            placeholder: "شماره موبایل را وارد نمایید",
            model: "mobile"
          },
          {
            label: "شماره ثابت",
            type: "textField",
            placeholder: "شماره ثابت را وارد نمایید",
            model: "phone"
          },
          {
            label: "آدرس",
            type: "textField",
            placeholder: "آدرس هنرجو را وارد نمایید",
            model: "address"
          },
          {
            label: "کد ملی",
            type: "textField",
            validation: {
              required: true,
              nationalCode: true
            },
            placeholder: "کد ملی را وارد نمایید",
            model: "national_code"
          },
          {
            label: "تاریخ تولد",
            type: "datePicker",
            appendIcon: "event",
            placeholder: "تاریخ تولد را وارد نمایید",
            model: "birthday"
          },
          {
            label: "عکس پروفایل",
            type: "fileUpload",
            placeholder: "عکس پروفایل را آپلود نمایید",
            model: "image"
          },
          {
            label: "جنسیت",
            type: "radio",
            items: [
              { text: "مرد", value: "male" },
              { text: "زن", value: "famale" }
            ],
            placeholder: "جنسیت را وارد نمایید",
            model: "gender"
          },
          {
            label: "گروه خونی",
            type: "select",
            items: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
            placeholder: "گروه خونی را وارد نمایید",
            model: "blood_type"
          }
        ]
      }
    ];
    return {
      date: null,
      title: "",
      service: {},
      loading: this.$route.params.id ? false : true,
      formData: formData,
      item: <any>{},
      model: { ...this.item }
    };
  },
  async mounted() {
    let loader = this.$loader.show(this.$refs.wrap);
    // this.item = await this.$service.branches.$get(this.$route.params.id)
    loader.hide();
  },
  methods: {
    save() {
      this.$validator.validateAll().then(async valid => {
        if (valid) {
          this.$emit("update", this.model);
        }
      });
    }
  }
});
</script>
