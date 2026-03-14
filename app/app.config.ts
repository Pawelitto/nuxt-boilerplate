export default defineAppConfig({
  ui: {
    colors: {
      neutral: 'neutral',
      primary: 'black',
      secondary: 'purple'
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      }
    },
    select: {
      slots: {
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
      }
    },
    selectMenu: {
      slots: {
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
      }
    }
  }
})
