<style lang="scss" scoped>
.wrapper {
  // padding: 3rem;
  height: 400px;
  position: relative;
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
      <v-flex md6>
        <v-card class="wrapper ma-2">
          <div class="header_card">
            <h4>دیالوگ</h4>
          </div>
          <div class="form-section">
            <div class="form-group">
              <label>
                نوع دیالوگ:
              </label>
              <v-select
                v-model="dialog.dialogTypeModel"
                :items="dialog.dialogType"
                outline
                single-line
                hide-details
              ></v-select>
            </div>
            <div class="form-group">
              <label>
                نوع پیام دیالوگ:
              </label>
              <v-select
                :items="dialog.type"
                v-model="dialog.typeModel"
                outline
                single-line
                hide-details
              ></v-select>
            </div>
            <div class="form-group">
              <label>
                متن پیام دیالوگ:
              </label>
              <v-text-field
                v-model="dialog.message"
                placeholder="در صورت دلخواه میتوانید متن دلخواه خود را وارد نمایید"
                outline
                single-line
                hide-details
              >
              </v-text-field>
            </div>
            <!-- <div class="form-group">
              <label> عنوان پیام دیالوگ</label>
              <v-text-field
                v-model="dialog.title"
                placeholder="در صورت دلخواه میتوانید عنوان دلخواه خود را وارد نمایید"
                outline
                single-line
                hide-details
              >
              </v-text-field>
            </div> -->
            <div class="buttons">
              <v-btn round color="primary" @click="showDialogCustom()"
                >مشاهده دیالوگ کاستوم</v-btn
              >
              <v-btn round color="primary" @click="showDialog()"
                >مشاهده دیالوگ</v-btn
              >
            </div>
          </div>
        </v-card>
      </v-flex>
      <v-flex md6>
        <v-card class=" wrapper ma-2">
          <div class="header_card">
            <h4>نوتیفیکیشن</h4>
          </div>
          <div class="form-section">
            <div class="form-group">
              <label>
                نوع نوتیفیکیشن:
              </label>
              <v-select
                :items="toast.toastType"
                v-model="toast.type"
                outline
                single-line
                hide-details
              ></v-select>
            </div>
            <div class="form-group">
              <label>
                محل قرارگیری نوتیفیکیشن:
              </label>
              <v-checkbox
                v-model="toast.toastPositionY"
                label="top"
                value="top"
              ></v-checkbox>
              <v-checkbox
                v-model="toast.toastPositionY"
                label="bottom"
                value="bottom"
              ></v-checkbox>
              <v-checkbox
                v-model="toast.toastPositionX"
                label="Left"
                value="left"
              ></v-checkbox>
              <v-checkbox
                v-model="toast.toastPositionX"
                label="right"
                value="right"
              ></v-checkbox>
            </div>
            <div class="form-group">
              <label>
                پیام نوتیفیکیشن:
              </label>
              <v-text-field
                v-model="toast.message"
                placeholder="متن مورد نظر خود را وارد نمایید"
                outline
                single-line
                hide-details
              >
              </v-text-field>
            </div>
            <div class="form-group">
              <label>
                زمان پایان نمایش پیام:
              </label>
              <v-text-field
                v-model="toast.timeout"
                placeholder="زمان پایان نمایش پیام را وارد نمایید"
                outline
                single-line
                hide-details
              >
              </v-text-field>
            </div>
            <div class="buttons">
              <v-btn round color="primary" @click="showToast()"
                >مشاهده نوتیفیکیشن</v-btn
              >
            </div>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import dialogList from '@/components/dialog_list/create.vue';
@Component
export default class YourComponent extends Vue {
  dialog = {
    dialogType: ['confirm', 'alert', 'prompt'],
    type: ['warning', 'info', 'question', 'success', 'error'],
    message: 'عملیات با موفقیت ثبت شد',
    typeModel: <any>'warning',
    dialogTypeModel: <any>'confirm',
    title: '',
  };
  // dialogType = ['confirm', 'alert', 'prompt'];
  // type = ['warning', 'info', 'question', 'success', 'error'];
  // message = 'عملیات با موفقیت ثبت شد';
  // typeModel: any = 'warning';
  // dialogTypeModel: any = 'confirm';
  // title = '';
  toast = {
    toastType: ['warning', 'info', 'success', 'error'],
    type: <any>'success',
    message: 'عملیات با موفقیت ثبت شد',
    toastPositionX: null,
    toastPositionY: null,
    timeout: 1000,
  };
  showDialog() {
    if (this.dialog.dialogTypeModel == 'confirm') {
      this.$dialog.confirm({
        // message: this.confirmMessage || '',
        type: this.dialog.typeModel,
        // title: this.confirmTitle || '',
      });
    } else if (this.dialog.dialogTypeModel == 'alert') {
      this.$dialog.alert({
        message: this.dialog.message,
        type: this.dialog.typeModel,
      });
    } else if (this.dialog.dialogTypeModel == 'prompt') {
      this.$dialog.prompt({
        message: this.dialog.message,
        type: this.dialog.typeModel,
      });
    }
  }
  showDialogCustom() {
    this.$dialog.show({
      component: dialogList,
    });
  }
  showToast() {
    this.$toast.show({
      message: this.toast.message,
      type: this.toast.type,
      timeout: this.toast.timeout,
      top: this.toast.toastPositionY === 'top',
      bottom: this.toast.toastPositionY === 'bottom',
      left: this.toast.toastPositionX === 'left',
      right: this.toast.toastPositionX === 'right',
    });
  }
}
</script>
