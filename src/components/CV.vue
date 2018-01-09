<template>
    <div class="content">
      <article class="cv">
        <p><b>CV Max McKenzie</b> <br>UX/UI Developer, Automation Tester and Techincal Writer</p>
        <br>
        <p><b>Portfolio:</b> <a href="http://maxmckenzie.uk">maxmckenzie.uk</a></p>
        <p><b>email:</b> <a href="mailto:hello@maxmckenzie.uk">hello@maxmckenzie.uk</a></p>
        <p><b>Stack Overflow:</b> <a href="https://stackoverflow.com/users/3593217/xam">stackoverflow.com/users/3593217/xam</a></p>
        <p><b>Github:</b> <a href="https://github.com/maxmckenzie">github.com/maxmckenzie</a></p>
        <p><b>Linkedin:</b> <a href="https://www.linkedin.com/in/maxmckenzie">linkedin.com/in/maxmckenzie</a></p>
        <hr>
        <p>I concentrate on UX and UI Development. Sketching ideas out with clients, prototyping in HTML and CSS, keeping detailed documentation and managing the project from design prototype to production-ready deployment. Mainly working on the front end, I have also been spotted tinkering in the back end and occasionally do API work on the side. For example this CV is generated from api.maxmckenzie.uk</p>
        <h2>Work History</h2>
        <ul>
          <li v-for="role in apiData.workhistory">
            <h3>{{ role.title }}</h3>
            <p class="date">{{ role.date }}</p><br>
            <p>{{ role.description }}</p>
            <ul class="cv__tags">
              <li v-for="tag in role.tags">
                <small>{{ tag }},</small>
              </li>
            </ul>
          </li>
        </ul>
        <abilites></abilites>
        <h2>Education</h2>
        <ul>
          <li v-for="institute in apiData.education">
            <h3>{{institute.title}}</h3>
            <p class="date">{{institute.date}}</p>
          </li>
        </ul>
    </article>
</template>

<script>
import Abilites from './Abilities.vue'

export default {
  name: 'cv',
  props: ['apiData'],
  components: {
    abilites: Abilites
  }
}
</script>


<style lang="less">
@media print {
  body {
    font-size: 16px;
  }
  .logo,
  header {
    display: none;
  }
  .cv {
    h2 {
      margin:1.5rem 0rem 0rem 0rem;
      font-weight: 800
    }
    h3 {
      margin:1rem 0rem 0.75rem 0rem;
    }

    margin:0 auto;
    width:55rem;
    .date {
      font-size: 0.9rem;
      color: lighten(#2c2c2c, 10%);
    }
    p {
      max-width:100%;
      margin:0;
      white-space: pre-line;
    }
    ul {
      list-style: none;
      margin:0;
      padding:0.5rem;
      max-width:100%;
    }
    &__tags {
      list-style: none !important;
      margin: 1rem 0.5rem 2rem 0.5rem !important;
      border-left: 0.5rem solid lighten(#2c2c2c, 15%);
      padding:0 0 0 0.5rem !important;
      li {
        display: inline-block;
        padding:0.1rem;
        small {
          display: block;
        }
      }
    }
  }
}
</style>
