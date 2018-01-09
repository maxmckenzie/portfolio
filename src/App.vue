<template>
  <div id="app">
    <header>
      <h1>I draw things, <br> then I code them</h1>
      <router-link :to=" { name: 'Index' }">Home</router-link>
      <router-link :to=" { name: 'WorkHistory' }">Work History</router-link>
      <router-link :to=" { name: 'Skills' }">Skills</router-link>
      <!-- <router-link :to=" { name: 'Code' }">Code</router-link> -->
      <router-link :to=" { name: 'Projects' }">Projects</router-link>
      <router-link :to=" { name: 'CV' }">Printable CV</router-link>
      <br>
      <a href="https://stackoverflow.com/story/maxmckenzie" target="_blank">StackOverflow</a>
      <a href="https://github.com/maxmckenzie" target="_blank">Github</a>
      <a href="https://es.linkedin.com/in/maxmckenzie" target="_blank">LinkedIn</a>
      <a href="https://seam.es" target="_blank">seam.es</a>
    </header>
    <br>
    <img src="./assets/logo.png" class="logo">
    <transition name="slide-fade">
      <router-view :apiData="apiData"></router-view>
    </transition>
    <back-to-top text="Back to top" visibleOffset="200"></back-to-top>
  </div>
</template>

<script>
import BackToTop from './components/BackToTop'

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
@import url('https://fonts.googleapis.com/css?family=Libre+Franklin:300,400,500,700,900');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');


#app {
  font-family: 'Libre Franklin', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  font-weight: 400;
  color: #2c3e50;
  padding:0 1rem 4rem 1rem;
  margin:0 auto;
  max-width:80rem;
}
#app header a {
  padding:0.25rem 0.5rem 0.25rem 0;
  font-weight: 500;
  display:inline-block;
}
.logo {
  position: fixed;
  top:1rem;
  right:0;
  width:250px;
  z-index: 0;
}
h1 {
  font-size: 4rem;
  margin:1.5rem 0 2rem 0;
  font-weight: 900;
  line-height: 1.2
}
pre, p {
  max-width:35rem;
  white-space: pre-line;
}
pre {
  white-space: pre-wrap;
  font-size:0.85rem;
  font-family: 'Space Mono', monospace;
  background-color:lighten(#eee, 5%);
  border:1px solid lighten(#ccc, 5%);
  box-shadow:0px 0px 1px 1px lighten(#ccc, 15%);
  border-radius:0.25rem;
  padding:0.5rem;
}

pre code {
  font-family: 'Space Mono', monospace;
  
}

.slide-fade-enter-active {
  transition: all .5s ease;
  transition-delay: .5s
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(40px);
  opacity: 0;
}
</style>
