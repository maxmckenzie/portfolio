<template>
  <div id="app" class="container">
    <header>
      <h1>I draw things, <br> then I code them</h1>
      <router-link :to=" { name: 'Index' }">H0ME</router-link>
      <router-link :to=" { name: 'WorkHistory' }">W0RK</router-link>
      <router-link :to=" { name: 'Skills' }">SKILLS</router-link>
      <!-- <router-link :to=" { name: 'Code' }">Code</router-link> -->
      <router-link :to=" { name: 'Projects' }">PR0JECTS</router-link>
      <router-link :to=" { name: 'CV' }">CV (Résumé)</router-link>
      <a href="https://seam.es" target="_blank">seam.es</a>
      <div class="icon-links">
        <a href="https://stackoverflow.com/story/maxmckenzie" target="_blank" class="icon-link"><img src="./static/stackoverflow.svg"></a>
        <a href="https://github.com/maxmckenzie" target="_blank" class="icon-link"><img src="./static/github.svg"></a>
        <a href="https://es.linkedin.com/in/maxmckenzie" target="_blank" class="icon-link"><img src="./static/linkedin.svg"></a>
      </div>
    </header>
    <img src="./static/logo.png" class="terrance">
    <transition name="slide-fade">
      <router-view :apiData="apiData"></router-view>
    </transition>
    <back-to-top text="Back to top" visibleOffset="200"></back-to-top>
    <footer>
      
    </footer>
  </div>
</template>

<script>
import BackToTop from './components/BackToTop'
import 'remixicon/fonts/remixicon.css'

export default {
  name: 'app',
  components: { BackToTop },
  data () {
    return {
      apiData: {
        details: null,
        projects: null,
        workhistory: null,
        skills: null,
        code: null,
        education: null
      }
    }
  },
  methods: {
    getDetails () {
      this.$http.get('https://api.maxmckenzie.uk')
        .then((responce) => {
          this.apiData = responce.data
        }, (error) => {
          console.log(error.statusText)
        })
    }
  },
  mounted () {
    this.getDetails()
  }
}
</script>

<style lang="less">
  @import './styles/index.less';
</style>
