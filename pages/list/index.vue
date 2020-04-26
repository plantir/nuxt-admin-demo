<style lang="scss" scoped>
</style>

<template>
  <section>
    <v-card>
      <vr-data-grid
        editUrl="/list/:id/info"
        :headers="headers"
        :title="title"
        :items="items"
        :actions="actions"
        :filters="filters"
        :serverPagination="false"
      >
        <template #items="{item}">
          <td>{{ item.name }}</td>
          <td>{{ item.family }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.mobile || '-' }}</td>
          <td>{{ item.phone || '-' }}</td>
        </template>
      </vr-data-grid>
    </v-card>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import changePassword from "@/components/change_password.vue";
export default Vue.extend({
  data() {
    return {
      items: <any>[],
      title: {
        text: "لیست معمولی",
        icon: "supervised_user_circle"
      },
      headers: [
        { text: "نام", align: "right", value: "name", width: "10%" },
        { text: "نام خانوادگی", align: "right", value: "family", width: "10%" },
        { text: "نام کاربری", align: "right", value: "username", width: "10%" },
        { text: "موبایل", align: "right", value: "mobile", width: "10%" },
        { text: "تلفن", align: "right", value: "phone", width: "10%" }
      ],
      actions: [
        {
          title: "تغییر رمز ورود",
          icon: "la-unlock",
          cb: this["change_password"]
        }
      ],
      filters: [
        {
          icon: "la-search",
          name: "id",
          model: "id",
          label: "شناسه"
        },
        {
          icon: "la-search",
          name: "name",
          model: "name",
          label: "نام"
        },
        {
          icon: "la-search",
          name: "family",
          model: "family",
          label: "نام خانوادگی"
        },
        {
          icon: "la-search",
          name: "national_code",
          model: "national_code",
          label: "کد ملی"
        },
        {
          icon: "la-search",
          name: "mobile",
          model: "mobile",
          label: "شماره موبایل"
        }
      ]
    };
  },
  mounted() {
    this.items = this.$service.list.get();
  },
  methods: {
    change_password(item) {
      this.$dialog.show({
        component: changePassword,
        scope: {
          done: password => {
            console.log("changed");
          }
        }
      });
    }
  }
});
</script>