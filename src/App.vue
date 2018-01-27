<template lang="pug">
#app
  app-nav
  .pushable
    .thin.large.ui.vertical.inverted.sidebar.menu.visible
      a.active.item Home
      a.item About Me
      a.item UI / UX Design
      a.item Backend
      a.item Photography
      a.item Contact
    .pusher
      router-view
      app-footer
</template>

<script>
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
import Landing from './components/Landing.vue'

export default {
  name: 'App',
  components: { AppNav, AppFooter, Landing },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
#app, .pushable
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%

.mobile.only
  @media only screen and (min-width: 700px)
    display none !important

.computer.only
  @media only screen and (max-width: 700px)
    display none !important

#topnav
  .react .image
    background dimgray

.pusher
  overflow-y scroll !important
  max-height 100% !important

.footer.segment
  padding 5em 0em
</style>
