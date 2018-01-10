<template>
  <div class="content">
    <a href="javascript:window.print()" class="print">Print CV</a>
    <article class="cv">
      <h1>Max M<sup>c</sup>Kenzie</h1>
      <h2>Full Stack Developer, QA tester and Technical writer</h2>
      <p><b>Portfolio:</b> <a href="http://maxmckenzie.uk">maxmckenzie.uk</a></p>
      <p><b>Email:</b> <a href="mailto:hello@maxmckenzie.uk">hello@maxmckenzie.uk</a></p>
      <br>
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
      <!-- <abilites></abilites> -->
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
.print {
  display:block;
}
@media print {
  body {
    font-size: 14px;
    line-height:1.1;
  }
  .print {
    display:none;
    margin-top:1rem;
  }
  .logo,
  header {
    display: none;
  }
  .cv {
    h1 {
      margin:0 0 1rem 0;
      font-size:2rem;
    }
    h2 {
      margin:0rem 0rem 0rem 0rem;
      font-weight: 800
    }
    h3 {
      margin:1rem 0rem 0.75rem 0rem;
    }
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
      padding:0;
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
