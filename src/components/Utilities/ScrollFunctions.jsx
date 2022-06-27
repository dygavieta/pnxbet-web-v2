import * as Scroll from 'react-scroll'
const scroller = Scroll.scroller

export const scrollToHero = () => {
  scroller.scrollTo('hero', {
    spy: true,
    smooth: true,
    duration: 1000,
    delay: 200,
  })
}

export const scrollToAbout = () => {
  scroller.scrollTo('about', {
    spy: true,
    smooth: true,
    offset: -150,
    duration: 1000,
  })
}

export const scrollToGuide = () => {
  scroller.scrollTo('guide', {
    spy: true,
    smooth: true,
    offset: 50,
    duration: 1000,
    delay: 300,
  })
}
