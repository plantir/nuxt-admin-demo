<style lang="scss">
.subheader {
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
  align-items: center;
  &_main {
    display: flex;
  }
  &_back {
    margin: 0;
  }
  .separator {
    display: block;
    width: 12px;
    height: 4px;
    border-radius: 2px;
    background: #dbdce7;
    margin: 0 1rem 0 1rem;
    &-v {
      width: 1px;
      height: 22px;
    }
  }
}

.content {
  background: #fff;
  padding: 24px;
}
</style>

<template>
  <section ref="wrap">
    <div>
      <div class="subheader">
        <div class="subheader_main">
          <h3>ویرایش لیست</h3>
          <span class="separator separator-v"></span>
          <span>{{ item.name }} {{ item.family }}</span>
        </div>
        <div>
          <v-btn
            class="subheader_back"
            active-class="active"
            flat
            @click="$router.go(-1)"
            color="accent"
          >
            <span>بازگشت</span>
            <v-icon class="pr-2">la-arrow-left</v-icon>
          </v-btn>
        </div>
      </div>
      <vr-navbar :items="navigation"></vr-navbar>
      <div class="content">
        <nuxt-child v-if="!loading" :item="item" @update="update"></nuxt-child>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      date: null,
      title: "",
      navigation: [
        {
          icon: "info",
          title: "مشخصات",
          to: "info",
          base: `/list/${this.$route.params.id}/`
        },
        {
          icon: "la-unlock",
          title: "تغییر رمز ورود",
          to: "change_password",
          base: `/list/${this.$route.params.id}/`
        }
      ],
      loading: true,
      item: {}
    };
  },
  async mounted() {
    let loader = this.$loader.show(this.$refs.wrap);
    // this.item = await this.$service.students.$get(this.$route.params.id)
    this.loading = false;
    loader.hide();
  },
  methods: {
    async update(item) {
      let loader = this.$loader.show(this.$refs.wrap);
      try {
        console.log("success");
        this.$toast.success().showSimple("با موفقیت ذخیره شده");
      } catch (error) {
        this.$toast
          .error()
          .showSimple("خطایی رخ داده است لطفا مجددا تلاش کنید");
      }
      loader.hide();
    }
  }
});
</script>
