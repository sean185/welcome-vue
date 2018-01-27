<template lang='pug'>
#app-landing
  .ui.vertical.masthead.center.aligned.segment
    .ui.text.container
      h1.ui.header Hi, I'm Sean
      h2 I gravitate toward multidisciplinary intersections
      //- p Photography | Design | Psychology | Mathematics | Computing | Physics
      .ui.divider
      #pages.ui.four.item.huge.secondary.menu.stackable
        a.item(routerLink='/about') About
        a.item(routerLink='/uiux') UI / UX Design
        a.item(routerLink='/backend') Backend
        a.item(routerLink='/photos') Photography
      .ui.divider
  .ui.vertical.stripe.quote.segment
    .ui.equal.width.stackable.internally.celled.grid
      .center.aligned.row
        .column
          h3 Breadth
          p I love learning new technologies, getting my hands dirty, and witness its potential for myself.
          br
          p I am a unique problem solver due to a variety of experiences; ranging from leadership, to research.
        .column
          h3 Depth
          p I love diving in deep into a topic, accumulating an unshakeable mental model of it.
          br
          p I am a generalist, capable of being specialist when necessary, whilst melding cross-domain knowledge to aid in problem solving.
  .ui.vertical.stripe.segment
    h3.ui.center.aligned.header Projects I've worked on
    .ui.hidden.divider
    .ui.container
      .ui.three.stackable.cards
        .card
          .content
            .header HH
            .meta July 2015
            .description
              p Bacon ipsum dolor amet turkey ribeye venison meatloaf chuck kevin shoulder. Salami biltong cupim pig jowl, porchetta bresaola frankfurter. Ball tip corned beef turducken hamburger. Pork chop jerky t-bone pork loin jowl cow cupim doner swine biltong ribeye sausage rump shoulder. Ground round brisket cow ham pork chop sirloin jowl. Alcatra tail ground round, spare ribs pastrami short ribs shankle rump meatball ham drumstick turducken bacon pork loin. Flank kielbasa filet mignon, pig ribeye beef frankfurter.
        .card
          .content
            .header Thing 2
            .meta July 2015
            .description
              p Leberkas hamburger ball tip, porchetta biltong fatback chicken bacon chuck short ribs ground round prosciutto bresaola beef ribs capicola. Beef swine capicola tenderloin prosciutto ground round. Beef ribs kevin sirloin t-bone ribeye pastrami meatball doner strip steak jerky buffalo pork. Pork belly flank turkey beef ribs pastrami, ribeye bacon pancetta andouille biltong chuck ham shankle. Shank meatloaf short ribs jowl ham venison, hamburger buffalo chicken pancetta meatball shoulder cow.
        .card
          .content
            .header Thing 3
            .meta July 2015
            .description
              p Pork loin corned beef biltong, buffalo jerky sirloin shank kielbasa pork belly sausage bresaola short loin. Meatloaf boudin pig shank beef ribs rump. Filet mignon pig frankfurter turducken brisket pancetta short ribs t-bone tenderloin. Corned beef strip steak boudin hamburger pork loin jerky, ham jowl. Bresaola flank pork belly kielbasa chicken shank leberkas ball tip tri-tip short loin swine filet mignon turducken turkey.

  .ui.vertical.stripe.segment
    h3.ui.center.aligned.header Competencies
    .ui.hidden.divider
    .ui.text.container
      .ui.tiny.images
        a.ui.image(v-for='brand of brands' v-once:href='brand.link')
          img(:src='brand.src')
</template>

<script>
export default {
  name: 'Landing',
  data: function () {
    return {
      brands: [
        {
          link: 'https://angular.io',
          src: require('../assets/images/angular-icon.svg')
        },
        {
          link: 'https://reactjs.org',
          src: require('../assets/images/react-icon.svg')
        },
        {
          link: 'https://vuejs.org',
          src: require('../assets/images/vuejs-icon.svg')
        },
        {
          link: 'https://d3js.org/',
          src: require('../assets/images/d3js-logo.png')
        },
        {
          link: 'https://pugjs.org',
          src: require('../assets/images/pugjs-logo.svg')
        },
        {
          link: 'http://lesscss.org',
          src: require('../assets/images/less-logo.png')
        },
        {
          link: 'http://stylus-lang.com',
          src: require('../assets/images/stylus-logo.svg')
        },
        {
          link: 'https://semantic-ui.com',
          src: require('../assets/images/semantic-logo.png')
        },
        {
          link: 'https://getbootstrap.com',
          src: require('../assets/images/bootstrap-solid.svg')
        },
        {
          link: 'https://nodejs.org',
          src: require('../assets/images/nodejs-icon.svg')
        },
        {
          link: 'https://webpack.js.org',
          src: require('../assets/images/webpack-icon.png')
        },
        {
          link: 'https://www.python.org',
          src: require('../assets/images/opengraph-icon-200x200.png')
        },
        {
          link: 'https://www.djangoproject.com/',
          src: require('../assets/images/django-logo-positive.png')
        },
        {
          link: 'http://www.fabfile.org/',
          src: require('../assets/images/fabric-logo.png')
        },
        {
          link: 'https://nginx.org/en',
          src: require('../assets/images/nginx-logo.png')
        },
        {
          link: 'https://www.postgresql.org/',
          src: require('../assets/images/postgresql-logo.svg')
        },
        {
          link: 'https://www.mysql.com/',
          src: require('../assets/images/mysql-logo.png')
        },
        {
          link: 'https://www.mongodb.com/',
          src: require('../assets/images/mongo-logo.jpg')
        },
        {
          link: 'https://cloud.google.com/',
          src: require('../assets/images/gcp-logo.png')
        },
        {
          link: 'https://azure.microsoft.com',
          src: require('../assets/images/azure-logo.png')
        },
        {
          link: 'https://git-scm.com',
          src: require('../assets/images/git-logo.png')
        }
        // {
        //   link: '',
        //   src: require('../assets/images/',
        // },
      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
.ui.segment {
    &:not(.inverted) {
        background: white;
    }
}

.masthead {
    &.segment {
        min-height: 100vh;
        padding: 1em 0em;
        background: url('../assets/images/blue_mountains_taiwan.jpg') !important;
    }

    .logo {
        &.item {
            img {
                margin-right: 1em;
            }
        }
    }

    .ui {
        &.menu {
            .ui {
                &.button {
                    margin-left: 0.5em;
                }
            }
        }
    }

    h1 {
        &.ui {
            &.header {
                color: navy;
                margin-top: 30vh;
                margin-bottom: 0em;
                font-size: 4em;
                font-weight: normal;
            }
        }
    }

    h2 {
        color: darkblue;
        font-size: 1.7em;
        font-weight: normal;
        margin-bottom: 10vh;
    }

    p {
        color: darkblue;
    }

    #pages .item {
        font-weight: bold;
        color: midnightblue;
    }
}

.ui {
    &.vertical {
        &.stripe {
            padding: 10vh 0em;

            h3 {
                font-size: 2em;
            }

            .floated {
                &.image {
                    clear: both;
                }
            }

            p {
                font-size: 1.33em;
            }

            .horizontal {
                &.divider {
                    margin: 3em 0em;
                }
            }
        }
    }
}

.ui.vertical.stripe {
    .button + h3, .ui.vertical.stripe p + h3 {
        margin-top: 3em;
    }
}

.quote.stripe.segment {
    padding: 0em;

    p {
        max-width: 50%;
        margin: auto;
    }

    .grid {
        .column {
            padding-top: 5em;
            padding-bottom: 5em;
        }
    }
}

.footer.segment {
    padding: 5em 0em;
}

.secondary .pointing .menu .toc .item {
    display: none;
}

.ui.images {
    text-align: center;
}

@media only screen and (max-width: 700px) {
    .ui {
        &.fixed {
            &.menu {
                display: none !important;
            }
        }
    }

    .secondary {
        &.pointing {
            &.menu {
                .menu, .item {
                    display: none;
                }

                .toc {
                    &.item {
                        display: block;
                    }
                }
            }
        }
    }

    .masthead {
        &.segment {
            min-height: 100vh;
        }

        h1 {
            &.ui {
                &.header {
                    font-size: 2em;
                    margin-top: 20vh;
                }
            }
        }

        h2 {
            margin-top: 0.5em;
            font-size: 1.5em;
        }
    }
}
</style>
