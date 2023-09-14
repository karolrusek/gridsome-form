// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    components: ['BContainer', 'BRow', 'BCol', 'BFormGroup', 'BForm', 'BFormInput', 'BButton', 'BTable', 'BModal'],
    directives: ['VBModal', 'VBPopover', 'VBTooltip', 'VBScrollspy'],
    componentPlugins: [
        'LayoutPlugin',
        'FormPlugin',
        'FormCheckboxPlugin',
        'FormInputPlugin',
        'FormRadioPlugin',
        'ToastPlugin',
        'ModalPlugin'
      ],
  }
}
