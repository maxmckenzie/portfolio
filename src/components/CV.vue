<template>
  <div class="content">
    <a href="javascript:window.print()" class="print">Print CV</a>
    <article class="cv">
      <h1>Max M<sup>c</sup>Kenzie</h1>
      <h2>Full Stack Developer, QA tester and Technical writer</h2>
      <div class="cv-content">
        <div class="work">
          <h2>Work History</h2>
          <ul>
            <li v-for="role in apiData.workhistory">
              <h3>{{ role.title }}</h3>
              <p class="date">{{ role.date }}</p>
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
          <div class="referances">
            <h3>References</h3>
            <ul>
              <li class="referance">
                <p>"Max has a full understanding of web technologies, from designing bespoke solutions from the ground up in the command line to browser/UI automation and everything in between".</p>
                <p>Jack Fenton <br>Test Lead at BookingBug</p>
              </li>
              <li class="referance">
                <p>"Amazingly talented developer and technical writer. Max is a great self-starter who with loose guidelines can be trusted to return amazing work. Would recommend to anyone who was in need of his skill set".</p>
                <p>Greg Bock <br>Co-Founder at BookingBug</p>
              </li>
              <li class="referance">
                <p>"Max, Max, Max. How I miss this man. I really put him through his paces when he joined the team. But he was more than up to the challenge. He's a great problem solver, a pragmatist and a pretty fine Developer".</p>
                <p>Stewart Birch <br>Technical Director at Cohaesus</p>
              </li>
              <li class="referance">
                <p>"Max is a highly skilled and reliable developer. I worked with Max for one year at Tribal Worldwide and during that time I quickly got to know and appreciate Max’s skills. Max has good knowledge of front end development, he has experience with working on large scale web sites for big name clients, he is able to work under pressure and can be relied upon to devise fitting solutions given tight time constraints which I feel is a valuable trait which is lacking in a lot of todays developers".</p>
                <p>Daniel Ivanovic <br>Creative &amp; Technical Director, Antiblanks Ltd</p>
              </li>
              <li class="referance">
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

article {
  border:1px solid #ddd;
  padding: 1rem;
  background-color:white;
  z-index:9999;
  max-width:50rem;
  box-shadow:0px 0px 1px 1px lighten(#ccc, 10%);
}

.cv-content > div {
  display:inline-block;
  vertical-align:top;
}

.cv-content > div.work {
  width:65%;
  margin-right:2%;
  p {
    column-count: 2;
    column-gap:0.75rem;
    orphans: 3;
  }
}

.cv-content > div.info {
  width:32%;
}

.referance {
  display:block;
  background-color: #eee;
  padding:0.5rem;
  border-radius:0.25rem;
  border:1px solid #ddd;
  margin-bottom: 1rem;
}

.referance p {
  margin-bottom:0.5rem;
  display:block;
  font-size:0.75rem;
}

.referance p + p {
  font-size:0.75rem;
  font-weight:600;
  padding:0.5rem 0 0 0;
  text-align:right;
}

.cv {
  h1 {
    margin:0 0 1rem 0;
    font-size:2rem;
  }
  h2 {
    margin:1rem 0rem 0rem 0rem;
    font-weight: 800;
    font-size:1.1rem;
  }
  h3 {
    margin:1rem 0rem 0.25rem 0rem;
    font-size:1rem;
  }
  h4 {
    margin:0.5rem 0rem 0.25rem 0rem;
    font-weight:500;
    font-size:0.9rem;
  }
  .date {
    font-size: 0.65rem;
    margin:0 0 0.5rem 0;
    color: lighten(#2c2c2c, 10%);
    display:inline-flex;
    width:9rem;
    padding: 0 0 0.25rem 0;
    border-bottom:0rem solid #2c2c2c;
  }
  p {
    max-width:100%;
    margin:0;
    font-size:0.85rem;
    white-space: pre-line;
  }

  ul {
    list-style: none;
    margin:0;
    padding:0;
    max-width:100%;
    li {
      vertical-align:top;
    }
  }
}
.cv__tags {
  list-style: none !important;
  display: inline-flex;
  margin: 1rem 0.5rem 1rem 0rem !important;
  border-left: 0.25rem solid lighten(#2c2c2c, 15%);
  padding:0 0 0 0.5rem !important;
  width:30rem;
  li {
    display: inline-flex;
    padding:0.1rem;
    small {
      display: block;
    }
  }
}

@media print {
  article {
    border:0;
    padding: 0;
    background-color:transparent;
    max-width:100%;
    box-shadow:0 0 0 0 lighten(#ccc, 10%);
  }
  @page {
    size: A4;
    margin: 5mm 5mm 5mm 5mm; /* change the margins as you want them to be. */
  }
  h1, h2, h3, h4, h5 {
    page-break-after: avoid;
  }
  h3 {
    page-break-before: always;
  }
  p {
    page-break-inside: avoid;
    page-break-after: avoid;
  }
  @page:right{
    @bottom-right {
      content: "Page " counter(page) " of " counter(pages);
    }
  }

  .print {
    display:none;
    margin-top:1rem;
  }
  .logo,
  header {
    display: none;
  }
}
</style>
