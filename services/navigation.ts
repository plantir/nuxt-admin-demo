import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types';
// import { INav } from '~/models/Navigation'
export default class NavigationService {
  constructor(public $axios: NuxtAxiosInstance) {}
  get(): any[] {
    return [
      {
        icon: 'apps',
        title: 'دشبورد',
        to: '/',
      },
      {
        icon: 'la-chart-bar',
        title: 'چارت ها',
        to: '/charts',
      },
      {
        icon: 'la-server',
        title: 'دیتاگرید',
        to: '/list',
      },
      {
        icon: 'la-align-right',
        title: 'فرم',
        to: '/form',
      },
      {
        icon: 'la-envelope-square',
        title: 'نوتیفیکیشن/دیالوگ ',
        to: '/dialogs',
      },
      {
        icon: 'la-calendar',
        title: 'دیت پیکر',
        to: '/date_pickers',
      },
      {
        icon: 'la-file-upload',
        title: 'اپلود فایل',
        to: '/file_upload',
      },
      // {
      //   icon: 'la-filter',
      //   title: 'گلوبال',
      //   to: '/global',
      // },
      {
        icon: 'la-exclamation-triangle',
        title: 'ارور ها',
        child: [
          {
            icon: 'la-exclamation',
            title: '404',
            to: '/errors/error404',
          },
          {
            icon: 'la-exclamation',
            title: '550',
            to: '/errors/error550',
          },
        ],
      },
    ];
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    navigation: NavigationService;
  }
}
