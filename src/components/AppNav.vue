<template lang="pug">
#topnav.ui.top.fixed.huge.secondary.menu
  a.mobile.only.item
    i.sidebar.icon
  .right.menu.mobile.only
    .ui.dropdown.item
      i.setting.icon
      .secondary.menu
        .header Web Framework
        a.item(href="/")
          img.ui.avatar.image(src='../assets/images/angular-icon.svg')
          | Angular 2
        a.react.item(href="/react")
          img.ui.avatar.image(src='../assets/images/react-icon.svg')
          | React
        a.item(href="/vue")
          img.ui.avatar.image(src='../assets/images/vuejs-icon.svg')
          | Vue JS
  .right.menu.computer.only
    a.item(title='Check it out in Angular2!', href="/")
      img.mini.circular.ui.image(src='../assets/images/angular-icon.svg')
    a.react.item(title='Check it out in React!', href="/react")
      img.mini.circular.ui.image(src='../assets/images/react-icon.svg')
    a.item(title='Check it out in VueJS!', href="/vue")
      img.mini.circular.ui.image(src='../assets/images/vuejs-icon.svg')
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
