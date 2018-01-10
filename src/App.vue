<template>
  <div id="app">
    <header>
      <h1>I draw things, <br> then I code them</h1>
      <router-link :to=" { name: 'Index' }">H0ME</router-link>
      <router-link :to=" { name: 'WorkHistory' }">W0RK</router-link>
      <router-link :to=" { name: 'Skills' }">SKILLS</router-link>
      <!-- <router-link :to=" { name: 'Code' }">Code</router-link> -->
      <router-link :to=" { name: 'Projects' }">PR0JECTS</router-link>
      <router-link :to=" { name: 'CV' }">PRINT-CV</router-link>
      <a href="https://seam.es" target="_blank">/si:m/</a>
      <a href="https://stackoverflow.com/story/maxmckenzie" target="_blank"><img src="./assets/stackoverflow.svg"></a>
      <a href="https://github.com/maxmckenzie" target="_blank"><img src="./assets/github.svg"></a>
      <a href="https://es.linkedin.com/in/maxmckenzie" target="_blank"><img src="./assets/linkedin.svg"></a>
    </header>
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
#app .content {
  padding-top:1rem;
}
#app .content,
header h1 {
  padding-left:0.5rem;
}
#app header a {
  color:#2c2c2c;
  padding:0.25rem 0.25rem 0.25rem 0.25rem;
  margin:0.25rem;
  font-weight: 800;
  font-family: 'Space Mono', monospace;
  font-size:1.1rem;
  display:inline-block;
  text-decoration:none;
  position: relative;
  -webkit-font-smoothing: never;
  -moz-osx-font-smoothing: never;
  img {
    width:1.5rem;
    height:auto;
  }
}
#app header a:visited,
#app header a:active,
#app header a:focus {
  color:#2c2c2c;
}
#app header a:after {
  content: '';
  position: absolute;
  color:#2c2c2c;
  left: 0;
  display: inline-block;
  height: 1em;
  width: 100%;
  border-bottom: 0.15rem solid #2c2c2c;
  margin-top: 10px;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0,1);
  transform: scale(0,1);
}
#app header a:hover:after,
#app header a.router-link-exact-active:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.logo {
  position: fixed;
  top:1rem;
  right:0;
  width:250px;
  z-index: -1;
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

a {
  font-weight:500;
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
