<template>
  <div class="content cv-wrapper">
    <a href="javascript:window.print()" class="print"><span>Print CV</span>&nbsp;<i class="remixicon-printer-line"></i></a>
    <article class="cv">
      <h1>Max M<sup>c</sup>Kenzie</h1>
      <h2>Full Stack Developer and UI Designer</h2>
      <p class="intro">Based in Barcelona. I enjoy designing and building APIs and UIs with modern tools like ES6, Vue, React, Webpack, Nightwatch, Mocha, PostgreSQL, and GraphQL.</p>
      <p class="intro">Over the course of my nine-year career, I have worked for agencies, SaaS providers, and publishers. Taking on the roles of technical writer, tech lead, project manager, consultant, company director, and of course, front-line pixel pusher.</p>
      <div class="cv-content">
        <div class="work">
          <ul>
            <li v-for="role in apiData.workHistory">
              <div class="work-title">
                <h3>{{ role.title }}</h3>
                <span class="date">{{ role.date }}</span>
              </div>
              <!-- <ul class="cv__tags">
                <li v-for="tag in role.tags">
                  <small>{{ tag }},</small>
                </li>
              </ul> -->
              <p>{{ role.description }}</p>
            </li>
          </ul>
        </div>
        <!-- <abilites></abilites> -->
        <div class="info">
          <h3>Contact</h3>
          <p><b>Portfolio:</b> <a href="https://maxmckenzie.uk">maxmckenzie.uk</a></p>
          <p><b>Email:</b> <a href="mailto:hello@maxmckenzie.uk">hello@maxmckenzie.uk</a></p>
          <p><b>GitHub:</b> <a href="https://github.com/maxmckenzie">/maxmckenzie</a></p>
          <p><b>StafckOverflow:</b> <a href="https://stackoverflow.com/story/maxmckenzie">@xam</a></p>
          <div class="education">
            <h3>Education</h3>
            <ul>
              <li v-for="institute in apiData.education">
                <p>{{institute.title}}</p>
                <p class="date">{{institute.date}}</p>
              </li>
            </ul>
          </div>
          <div class="references">
            <h3>References</h3>
            <ul>
              <li class="reference">
                <p>"Max has a full understanding of web technologies, from designing bespoke solutions from the ground up in the command line to browser/UI automation and everything in between".</p>
                <p>Jack Fenton <br>Test Lead at BookingBug</p>
              </li>
              <li class="reference">
                <p>"Amazingly talented developer and technical writer. Max is a great self-starter who with loose guidelines can be trusted to return amazing work. Would recommend to anyone who was in need of his skill set".</p>
                <p>Greg Bock <br>Co-Founder at BookingBug</p>
              </li>
              <div class="page-break"></div>
              <li class="reference">
                <p>"Max, Max, Max. How I miss this man. I really put him through his paces when he joined the team. But he was more than up to the challenge. He's a great problem solver, a pragmatist and a pretty fine Developer".</p>
                <p>Stewart Birch <br>Technical Director at Cohaesus</p>
              </li>
              <li class="reference">
                <p>"Max is a highly skilled and reliable developer. I worked with Max for one year at Tribal Worldwide and during that time I quickly got to know and appreciate Max’s skills. Max has good knowledge of front end development, he has experience with working on large scale web sites for big name clients, he is able to work under pressure and can be relied upon to devise fitting solutions given tight time constraints which I feel is a valuable trait which is lacking in a lot of todays developers".</p>
                <p>Daniel Ivanovic <br>Creative &amp; Technical Director, Antiblanks Ltd</p>
              </li>
              <li class="reference">
                <p>"Max is a good at what he does: he's one of those developers you can rely on to deliver the build on time or fix the bug. He's a talented front-end coder, is sharp and gets it, and ultimately is a doer - someone you want on your team. He came for a couple of weeks contract, and stayed over a year".</p>
                <p>Justin Vir <br>Operations Director at Tribal Worldwide</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Abilites from '@/components/Abilities.vue'

export default {
  name: 'cv',
  props: ['apiData'],
  components: {
    abilites: Abilites
  }
}
</script>