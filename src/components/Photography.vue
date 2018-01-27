<template lang='pug'>
#photography
  .ui.padded.grid
    .row
      .column
        .ui.text.container
          .ui.header Photography
          p Just what I see, when I go where I go.
        .ui.text.container
          .ui.divider
          #pages.ui.four.item.huge.secondary.menu.stackable
            a.item(routerLink='/about') About
            a.item(routerLink='/uiux') UI / UX Design
            a.item(routerLink='/backend') Backend
            a.item(routerLink='/photos') Photography
          .ui.divider
    .row
      .column
        .ui.container.reel
          .ui.two.cards.stackable
            .card(v-for='photo of photos', @click='open(photo)')
              .image
                img(:src='photo.src')
              .content
                .meta #[i.marker.icon] {{photo.location}}
                .description {{photo.caption}}
  //- ng-template(let-context, let-modal='modal', #modalTemplate)
  //-   .image.content(style='flex-direction: column;', (document:keydown)='modal.deny(); handleArrows($event.key, context)', autofocus)
  //-     img.image(src='{{context.src}}', style='object-fit: contain; width: 100%;')
  //-     .meta #[i.marker.icon] {{context.location}}
  //-     .caption {{context.caption}}
  //-   .arrows.prev((click)='modal.deny(); prev(context);')
  //-     i.left.angle.icon
  //-   .arrows.next((click)='modal.deny(); next(context);')
  //-     i.right.angle.icon
</template>

<script>
export default {
  name: 'Photography',
  data: function () {
    return {
      photos: [
        {
          caption: 'Olive-backed sunbird in midflight, with just enough light from the morning sun.',
          location: 'Pulau Ubin, Singapore',
          src: require('../assets/photos/ubin-sunbird.jpg')
        },
        {
          caption: 'Pumpfest 2017 - Open women\'s category competitor getting chalked up.',
          location: 'Tampines, Singapore',
          src: require('../assets/photos/pumpfest-2017-chalk-dust.jpg')
        },
        {
          caption: 'Hiking in the moss covered landscape of Alishan National Scenic Area.',
          location: 'Alishan, Taiwan',
          src: require('../assets/photos/alishan-hiking-mel.jpg')
        },
        {
          caption: 'Rolling clouds bathe the valleys at sunrise, spied from the top of Alishan',
          location: 'Alishan, Taiwan',
          src: require('../assets/photos/blue_mountains_taiwan.jpg')
        },
        {
          caption: 'Star trails of a 10 minute exposure from Alishan Lauya Homestay.',
          location: 'Alishan, Taiwan',
          src: require('../assets/photos/alishan-night-star-trails.jpg')
        },
        {
          caption: 'Catching the sunset at the local attraction isn\'t just for tourists at this fine-grained sandy beach.',
          location: 'Tainan, Taiwan',
          src: require('../assets/photos/tainan-beach-sunset.jpg')
        },
        {
          caption: 'Monkey with a wry look, posing.',
          location: 'Kaohsiung, Taiwan',
          src: require('../assets/photos/kaohsiung-park-monkey.jpg')
        },
        {
          caption: 'The burning sunset raising a fog around huge ships in the distance.',
          location: 'Kaohsiung, Taiwan',
          src: require('../assets/photos/kaohsiung-sea-sunset.jpg')
        },
        {
          caption: 'A glimpse of daily life at a food cart on the streets of Bangkok.',
          location: 'Bangkok, Thailand',
          src: require('../assets/photos/bangkok-street-cart.jpg')
        },
        {
          caption: 'Green tranquility of the Arashiyama Bamboo Grove.',
          location: 'Kyoto, Japan',
          src: require('../assets/photos/arashiyama-bamboo.jpg')
        },
        {
          caption: 'View of Mount Fuji at dusk, a self-portrait.',
          location: 'Yamanashi, Japan',
          src: require('../assets/photos/fujisan-self.jpg')
        },
        {
          caption: 'A sudden heavy snowfall entertains a toddler.',
          location: 'Kyoto, Japan',
          src: require('../assets/photos/kyoto-snowing-baby.jpg')
        },
        {
          caption: 'Winter is a happy time for most, the happiest time for some.',
          location: 'Kyoto, Japan',
          src: require('../assets/photos/kyoto-streets-happy.jpg')
        },
        {
          caption: 'Sunrise view from a vantage point of the Tokyo Skytree. Woke up freezing for this.',
          location: 'Tokyo, Japan',
          src: require('../assets/photos/tokyo-sky-tower-sunrise.jpg')
        }
      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
#photography
  background-color #d4d4d5
.ui.container
  padding-top 10vh
  &.reel
    padding-bottom 10vh
.ui.modal img
  object-fit contain
</style>
