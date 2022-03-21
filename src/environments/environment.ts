// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {IDictionary} from "../app/shared/interfaces/dictionary";

export const environment = {
  production: false,
  ARTICLE_TYPES: {
    mobileSlider: 1,
    partners: 2,
    about: 3,
    news: 4,
    homeSlider: 5,
  },
  INFO: {
    company: 'company',
    xy: 'xy',
    instagram: 'instagram',
    facebook: 'facebook',
    tel: 'tel',
    email: 'email',
    address: 'address',
    logo: 'logo',
  },
  API: 'http://diplom.loc/api',
  STORAGE: 'http://diplom.loc/storage/',
  BASE_CURRENCY: 'KZT',
  FREECURRENCY_API_KEY: '98ea91e0-792f-11ec-8dab-17796cf0b74f',
  FREECURRENCY_API: 'https://currencyapi.com/api/v2/latest',
  DEFAULT_IMG: 'https://via.placeholder.com/640x480.png/777?text=',
  errors: {
    email: 'Invalid email address',
    mask: 'Invalid field',
    minlength: 'Must be 10 characters.',
    maxlength: 'Must be 10 characters.',
    required: 'This field is required',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
