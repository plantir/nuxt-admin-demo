import { NuxtAxiosInstance } from "vrwebdesign-nuxt/modules/nuxt-axios/types";
// import { INav } from '~/models/Navigation'
export default class NavigationService {
  constructor(public $axios: NuxtAxiosInstance) {}
  get(): any[] {
    return [
      {
        icon: "apps",
        title: "دشبورد",
        to: "/"
      },
      {
        icon: "list",
        title: "لیست معمولی",
        to: "/list"
      },
      {
        icon: "la-clipboard-list",
        title: "لیست با حالت دیالوگ",
        to: "/dialog_list"
      },
      {
        icon: "list",
        title: "لیست با زیر منو",
        child: [
          {
            icon: "la-list-alt",
            title: "لیست1",
            to: "/"
          },
          {
            icon: "la-list-alt",
            title: "لیست2",
            to: "/list"
          }
        ]
      }
    ];
  }
}

declare module "vue/types/vue" {
  interface NuxtServiceInstance {
    navigation: NavigationService;
  }
}
