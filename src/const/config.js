const HOME = 'home'
const MOVIE = 'movie'

export default Object.freeze({
  type: {
    HOME: 'home',
    MOVIE: 'movie'
  },
  init: [
    {
      type: HOME,
      icon: 'mdi-home',
      title: 'ほーむ'
    },
    {
      type: MOVIE,
      icon: 'mdi-video',
      title: 'むーびー'
    },
  ]
})