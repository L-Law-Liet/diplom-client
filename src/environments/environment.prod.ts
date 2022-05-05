export const environment = {
  production: true,
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
  API: 'https://api.edev.kz/api',
  STORAGE: 'https://api.edev.kz/storage/',
  BASE_CURRENCY: 'KZT',
  FREECURRENCY_API_KEY: '98ea91e0-792f-11ec-8dab-17796cf0b74f',
  FREECURRENCY_API: 'https://api.currencyapi.com/api/v2/latest',
  DEFAULT_IMG: 'https://via.placeholder.com/640x480.png/777?text=',
  errors: {
    email: 'Invalid email address',
    mask: 'Invalid field',
    minlength: 'Must be 10 characters.',
    maxlength: 'Must be 10 characters.',
    required: 'This field is required',
  }
};
