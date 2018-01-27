<template lang="pug">
.ui.inverted.vertical.center.aligned.footer.segment
  .ui.container
    h3.ui.inverted.header Not the droids you are looking for?
    br
    .ui.divider
    #pages.ui.five.item.huge.secondary.menu.inverted.stackable
      a.item(routerLink="/about") About
      a.item(routerLink="/uiux") UI / UX Design
      a.item(routerLink="/backend") Backend
      a.item(routerLink="/photos") Photography
      a.item(routerLink="/contact") Contact
    .ui.divider
    br
    br
    a.ui.basic.inverted.button Top
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
