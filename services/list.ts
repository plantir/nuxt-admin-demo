import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types';
// import { INav } from '~/models/Navigation'
export default class ListService {
  constructor(public $axios: NuxtAxiosInstance) {}
  get() {
    return [
      {
        id: '1',
        name: 'سپهر ',
        family: 'ضرغامی',
        username: 'sepehr',
        mobile: '09373389140',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
      {
        id: '1',
        name: 'آرمین',
        family: 'خیرخواهان',
        username: 'armin',
        mobile: '09356659943',
        phone: '0210000000',
      },
    ];
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    list: ListService;
  }
}
