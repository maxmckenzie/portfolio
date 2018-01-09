<template>
  <div class="content">
    <article class="cv">
      <h1>Max M<sup>c</sup>Kenzie</h1>
      <h2>Full Stack Developer, QA tester and Technical writer</h2>
      <p><b>Portfolio:</b> <a href="http://maxmckenzie.uk">maxmckenzie.uk</a></p>
      <p><b>email:</b> <a href="mailto:hello@maxmckenzie.uk">hello@maxmckenzie.uk</a></p>
      <p><b>Stack Overflow:</b> <a href="https://stackoverflow.com/users/3593217/xam">stackoverflow.com/users/3593217/xam</a></p>
      <p><b>Github:</b> <a href="https://github.com/maxmckenzie">github.com/maxmckenzie</a></p>
      <p><b>Linkedin:</b> <a href="https://www.linkedin.com/in/maxmckenzie">linkedin.com/in/maxmckenzie</a></p>
      <hr>
      <p>Originally from Bath, Somerset. I started out with music technology when I was fourteen, then moved into the computer development world, introduced by the majority of my friends, who also work in the trade.
      <p>I created a record label in 2008 and found the need to learn a multitude of development skills when creating the website. From that point onwards, I was asked by people around me to build websites for them on a freelance basis. I moved to London to do a degree in commercial music at Westminster but soon discovered that I didn't want to pursue commercial music as a career and I made the jump to become a full-time developer.</p>
      <p>I've spent most of my time on the front end but then, that line got very blurred in recent years, and I directed my learning towards NodeJS, APIs, DevOps, and testing</p>
      <h2>Work History</h2>
      <ul>
        <li v-for="role in apiData.workhistory">
          <h3>{{ role.title }}</h3>
          <p class="date">{{ role.date }}</p>
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
  </div>
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
  }
}
.cv__tags {
  list-style: none !important;
  margin: 1rem 0.5rem 2rem 0rem !important;
  border-left: 0.25rem solid lighten(#2c2c2c, 15%);
  padding:0 0 0 0.5rem !important;
  li {
    display: inline-block;
    padding:0.1rem;
    small {
      display: block;
    }
  }
}
</style>
