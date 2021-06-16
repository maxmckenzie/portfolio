<template>
  <div class="content">
    <p>I’m a full stack developer based in Barcelona. I enjoy designing and building APIs and UIs with modern tools like ES6, Vue, React, Webpack, Nightwatch, Mocha, PostgreSQL, and GraphQL.</p>
    <p>Over the course of my 14 year career, I have worked for agencies, SaaS providers, and publishers. Taking on the roles of technical writer, tech lead, project manager, consultant, company director, and of course, front-line pixel pusher.</p>
    <h3>Recent github contributions</h3>
    <div class="calendar">
      <div class="loading">
        <div>Loading github contributions</div>
      </div>
    </div>
    <h3>About this site</h3>
    <p>This portfolio is built with Vue and parcel. It uses a simple node <a href="https://portfolio-api-scraper.herokuapp.com/" target="_blank">API</a> which scrapes data from my GitHub and my StackOverflow. It then provides this data as JSON which is fetched and displayed this website. If you feel so inclined, you can access all my CV and portfolio data via the below curl command.</p>
    <pre class="request"><code class><i class="remixicon-terminal-line"></i>curl https://portfolio-api-scraper.herokuapp.com/</code></pre>
    <p>You can find the source code for <a href="https://github.com/maxmckenzie/portfolio">This vue app</a> and the <a href="https://github.com/maxmckenzie/portfolio-api">API</a> on Github</p>
    <p>The more data heavy endpoints on this site I've templated out to make it easier to read. But for simple lists (like below) I've just outputted the raw JSON</p>
    <pre><code>apiData.details</code></pre> 
    <pre class="responce">{{ apiData.details }}</pre>
    <blockquote cite="http://www.adultswim.com/videos/rick-and-morty/">
      <i class="remixicon-double-quotes-l"></i>
      Sometimes science is more art than science Morty
      <br>&#8230; Rick
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: ['apiData'],
  mounted() {
    const username = 'maxmckenzie'
    GitHubCalendar(".calendar", username, { responsive: true, tooltip: true });
  }
}
</script>

<style>
  .calendar {
    max-width: 35rem;
    border: 0;
    margin: 0;
    box-shadow: 0 1px 3px 0 hsla(0,0%,0%, 0.2);
  }
</style>