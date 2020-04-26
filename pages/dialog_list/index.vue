<style lang="scss" scoped>
</style>

<template>
  <section>
    <v-card>
      <vr-data-grid
        :headers="headers"
        :title="title"
        :items="items"
        :widthAdd="false"
        :serverPagination="false"
        :withSearch="true"
      >
        <template #header_add>
          <v-btn @click="showCreate" class="add-new" color="primary" round outline>
            <v-icon>add</v-icon>
            <span>ایجاد جدید</span>
          </v-btn>
        </template>
        <template #actions="{_delete,item}">
          <v-btn icon depressed flat :ripple="false">
            <v-icon @click="showEdit">la-edit</v-icon>
          </v-btn>
          <v-btn icon depressed flat :ripple="false">
            <v-icon @click="_delete(item)">la-trash</v-icon>
          </v-btn>
        </template>
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
import create from "@/components/dialog_list/create.vue";
import edit from "@/components/dialog_list/edit.vue";
export default Vue.extend({
  data() {
    return {
      items: <any>[],
      title: {
        text: "لیست با حالت دیالوگ",
        icon: "supervised_user_circle"
      },
      headers: [
        { text: "نام", align: "right", value: "name", width: "10%" },
        { text: "نام خانوادگی", align: "right", value: "family", width: "10%" },
        { text: "نام کاربری", align: "right", value: "username", width: "10%" },
        { text: "موبایل", align: "right", value: "mobile", width: "10%" },
        { text: "تلفن", align: "right", value: "phone", width: "10%" }
      ]
    };
  },
  mounted() {
    this.items = this.$service.list.get();
  },
  methods: {
    showCreate() {
      this.$dialog.show({
        component: create
      });
    },
    showEdit() {
      this.$dialog.show({
        component: edit
      });
    }
  }
});
</script>