import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from './movie'
import MineRouter from './Mine'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
        MovieRouter,
        MineRouter,
        cinemaRouter,
        {
          path:'/*',
          redirect:'movie'
        }
  ]
})
