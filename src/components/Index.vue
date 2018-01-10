<template>
  <div class="content">
    <p>This portfolio is built with Vue and Webpack. It uses a simple node <a href="http://api.maxmckenzie.uk/" target="_blank">API</a> which scrapes data from GitHub and StackOverflow. If you feel so inclined, you can access all my CV and portfolio data via the below curl command.</p>
    <pre class="request"><code class>$ curl http://api.maxmckenzie.uk/</code></pre>
    <p>You can find the source code for <a href="https://github.com/maxmckenzie/portfolio">This vue app</a> and the <a href="https://github.com/maxmckenzie/portfolio-api">API</a> on Github</p>
    <p>The more data heavy endpoints on this site I've templated out to make it easier to read. But for simple lists (like below) I've just outputted the raw JSON</p>
    <pre><code>apiData.details</code></pre> 
    <pre class="responce">{{ apiData.details }}</pre>
    <blockquote cite="http://www.adultswim.com/videos/rick-and-morty/">
      Sometimes science is more art than science Morty
      <br>... Rick
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['apiData']
}
</script>

<style>
  blockquote {
    font-weight: 600;
    position: fixed;
    bottom: 0;
    right: 1rem;
    width: 10rem;
  }
  blockquote:before {
    content: '"';
    position: absolute;
    font-size: 2rem;
    font-weight: 900;
    top:-0.75rem;
    left:-1.25rem;
  }
</style>
