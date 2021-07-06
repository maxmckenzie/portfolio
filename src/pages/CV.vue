<template>
  <div class="content cv-wrapper">
    <a href="javascript:window.print()" class="print"><span>Print CV</span>&nbsp;<i class="ri-printer-line"></i></a>
    <article class="cv">
      <h1>Max M<sup>c</sup>Kenzie <small>Full Stack developer &amp; designer</small></h1>
      <p class="intro">Based in Barcelona. I enjoy designing and building APIs and UIs with modern tools like ES6, Vue, React, Webpack, Cypress, Mocha, PostgreSQL, and GraphQL. Over the course of my fourteen-year career I’ve worked for agencies, SaaS providers and publishers; taking on the role of technical writer, tech lead, project manager, consultant, company director, and of course; front-line pixel pusher.</p>
      <div class="cv-content">
        <div class="work">
          <ul>
            <li v-for="role in apiData.workHistory">
              <div class="work-title">
                <h3>{{ role.title }}&nbsp;</h3>
                <span class="date">{{ role.date }}</span>
                <p>{{ role.description }}</p>
                <div class="cv-skills-alt">
                  <strong>Tech Stack</strong>: 
                  <span v-for="skill in role.tags">
                    {{ tagIndex(skill) }}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- <abilites></abilites> -->
        <div class="info">
          <h3>Contact</h3>
          <p><b>Portfolio:</b> <a href="https://maxmckenzie.uk">maxmckenzie.uk</a></p>
          <p><b>Email:</b> <a href="mailto:hello@maxmckenzie.uk">hello@maxmckenzie.uk</a></p>
          <p><b>GitHub:</b> <a href="https://github.com/maxmckenzie">/maxmckenzie</a></p>
          <p><b>StackOverflow:</b> <a href="https://stackoverflow.com/story/maxmckenzie">@xam</a></p>
          <div class="education">
            <h3>Education</h3>
            <ul>
              <li v-for="institute in apiData.education">
                <p>{{institute.title}}</p>
                <p class="date">{{institute.date}}</p>
              </li>
            </ul>
          </div>
          <div class="cv-skills">
            <h3>Skills</h3>
            <p><span>Go</span><span>JavaScript (ECMA Script)</span><span>TypeScript</span><span>PHP</span><span>Ruby</span><span>Vue</span><span>React</span><span>Redux</span><span>Babel</span><span>Parcel</span><span>Rollup</span><span>Grunt</span><span>Webpack</span><span>Nightwatch</span><span>Cypress</span><span>Jest</span><span>Mocha</span><span>Chai</span><span>Sinon</span><span>Supertest</span><span>Express</span><span>Koa</span><span>Heroku</span><span>AWS</span><span>Digitl Ocean</span><span>GCP</span><span>CI/CI</span><span>GraphQL</span><span>MySQl</span><span>PostgreSQl</span><span>Puppeteer</span><span>Mirage</span><span>Web Components</span><span>Stencil</span><span>Storybook</span><span>Less</span><span>Sass</span><span>Stylus</span><span>GitHub</span><span>GitLab</span><span>BitBucket</span><span>Atlassian Suite</span><span>JWT</span><span>OAuth</span><span>Gherkin</span><span>RSpec</span><span>Adobe Creative Cloud</span><span>Office suites</span><span>Affinity Design/Photo/Publisher</span><span>Sketch</span><span>Figma</span><span>Invision</span></p>
          </div>
          <div class="references">
            <h3>References</h3>
            <ul>
              <li class="reference">
                <p>"Max is one of the most bright, talented and creative developers I've ever met. He leads the team through any project in a natural way, with his outstanding communication and personal skills and his deep knowledge about the state of the art on any technical issue. He's a safe bet!".</p>
                <p>Pedro Costoya <br>Manager at BeRepublic</p>
              </li>
              <li class="reference">
                <p>"Max has a full understanding of web technologies, from designing bespoke solutions from the ground up in the command line to browser/UI automation and everything in between".</p>
                <p>Jack Fenton <br>Team Leader at BookingBug</p>
              </li>
              <li class="reference">
                <p>"Amazingly talented developer and technical writer. Max is a great self-starter who with loose guidelines can be trusted to return amazing work. Would recommend to anyone who was in need of his skill set".</p>
                <p>Greg Bock <br>Co-Founder at BookingBug</p>
              </li>
              <div class="page-break"></div>
              <li class="reference">
                <p>"Max, Max, Max. How I miss this man. I really put him through his paces when he joined the team. But he was more than up to the challenge. He's a great problem solver, a pragmatist and a pretty fine Developer".</p>
                <p>Stewart Birch <br>Head of Frontend at tribal Worldwide</p>
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
import Abilites from '../components/Abilities.vue'

export default {
  name: 'cv',
  props: ['apiData'],
  components: {
    abilites: Abilites
  },
  methods: {
    tagIndex(tag) {
      // hugeeeeeee switch case to format the tags from stackoverflow
      // future better solution pending :D 
      switch(tag) {
        case 'vue.js':
          return 'Vue'
        break;
        case 'reactjs':
          return 'React'
        break;
        case 'node':
          return 'Node'
        break;
        case 'web-component':
          return 'Web components'
        break;
        case 'stenciljs':
          return 'StencilJS'
        break;
        case 'storybook':
          return 'Storybook'
        break;
        case 'nightwatch.js':
          return 'Nightwatch'
        break;
        case 'jestjs':
          return 'Jest'
        break;
        case 'mocha.js':
          return 'Mocha'
        break;
        case 'chai':
          return 'Chai'
        break;
        case 'miragejs':
          return 'Mirage'
        break;
        case 'google-cloud-platform':
          return 'GCP'
        break;
        case 'graphql':
          return 'GraphQL'
        break;
        case 'heroku':
          return 'Heroku'
        break;
        case 'gitlab':
          return 'Gitlab'
        break;
        case 'cypress':
          return 'Cypress'
        break;
        case 'vercel':
          return 'Vercel'
        break;
        case 'cloudflare':
          return 'CloudFlare'
        break;
        case 'github-actions':
          return 'GitHub Actions CI/CD'
        break;
        case 'postgresql':
          return 'PostgreSQL'
        break;
        case 'three.js':
          return 'ThreeJS'
        break;
        case 'feathersjs':
          return 'FeathersJS'
        break;
        case 'devops':
          return 'Devops'
        break;
        case 'docker':
          return 'Docker'
        break;
        case 'azure':
          return 'Azure'
        break;
        case 'auth0':
          return 'OAuth'
        break;
        case 'apollo':
          return 'Apollo'
        break;
        case 'azure-devops':
          return 'Azure DevOps'
        break;
        case 'yaml':
          return 'YAML'
        break;
        case 'saml':
          return 'SAML'
        break;
        case 'jwt':
          return 'JWT'
        break;
        case 'sinon':
          return 'Sinon'
        break;
        case 'webpack':
          return 'Webpack'
        break;
        case 'encryption':
          return 'Encryption'
        break;
        case 'authentication':
          return 'OAuth'
        break;
        case 'oauth-2.0':
          return 'OAuth 2'
        break;
        case 'selenium-webdriver':
          return 'Selenium'
        break;
        case 'node.js':
          return 'Node'
        break;
        case 'babeljs':
          return 'Babel'
        break;
        case 'ruby':
          return 'Ruby'
        break;
        case 'capybara':
          return 'Capybara'
        break;
        case 'cucumber':
          return 'Cucumber'
        break;
        case 'rspec':
          return 'RSpec'
        break;
        case 'gherkin':
          return 'Gherkin'
        break;
        case 'cordova':
          return 'Cordova'
        break;
        case 'stylus':
          return 'Stylus'
        break;
        case 'gruntjs':
          return 'Grunt'
        break;
        case 'twig':
          return 'Twig'
        break;
        case 'express':
          return 'Express'
        break;
        case 'sass':
          return 'Sass'
        break;
        case 'less':
          return 'Less'
        break;
        case 'oojavascript':
          return 'ECMA6'
        break;
        case 'jquery':
          return 'JQuery'
        break;
        case 'svn':
          return 'SVN'
        break;
        case 'git':
          return 'Git'
        break;
        case 'css':
          return 'CSS'
        break;
        case 'oophp':
          return 'PHP'
        break;
        case 'html':
          return 'HTML'
        break;
        case 'mysql':
          return 'MySQL'
        break;
        case 'handlebars.js':
          return 'Handlebars'
        break;
        case 'underscore.js':
          return 'Underscore'
        break;
        case 'assemble':
          return 'Assemble'
        break;
        case 'larevel':
          return 'Larevel'
        break;
        case 'photoshop':
          return 'Photoshop'
        break;
        case 'commonjs':
          return 'CommonJS'
        break;
        case 'java':
          return 'Java'
        break;
        case 'grails':
          return 'Grails'
        break;
        case 'adobe-illustrator':
          return 'Adobe Illustrator'
        break;
        case 'php':
          return 'PHP'
        break;
        case 'adobe-indesign':
          return 'Adobe InDesign'
        break;
        case 'wordpress':
          return 'WordPress'
        break;
        case 'laravel':
          return 'Laravel'
        break;
        case 'symfony':
          return 'Symfony'
        break;
        case 'citrix':
          return 'Citrix'
        break;
        case 'vuex':
          return 'Vuex'
        break;
        default:
          return tag
      }
    }
  }
}
</script>