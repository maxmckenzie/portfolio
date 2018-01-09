<template>
    <div class="content">
      <ul class="work-history">
        <li v-for="job in apiData.workhistory">
          <h2>{{ job.title }}</h2>
          <p class="date">{{ job.date }}</p>
          <ul class="work-history__tags">
            <li><small><b>Tech Stack:</b></small></li>
            <li v-for="tag in job.tags">
              <small>{{ tag }},</small>
            </li>
          </ul>
          <p>{{ job.description }}</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'workhistory',
  props: ['apiData']
}
</script>

<style lang="less" scoped>
.work-history {
  list-style: none;
  margin:0;
  padding:0;
  max-width:50rem;
  &__tags {
    display:inline-block;
    vertical-align: top;
    list-style: none !important;
    margin: 0;
    padding:0rem 0.25rem 0.25rem 0.5rem;
    border-left: 0rem solid lighten(#2c2c2c, 15%);
    max-width:50%;
    line-height:1.0;
    li {
      display: inline-block;
      padding:0.1rem;
      font-weight:300;
      font-size:0.95rem;
      small {
        display: block;
      }
    }
  }
  p {
    padding-bottom:1rem;
    border-bottom: 1px solid #eee;
  }
  .date {
    background-color:lighten(#eee, 5%);
    border:1px solid lighten(#ccc, 5%);
    box-shadow:0px 0px 1px 1px lighten(#ccc, 20%);
    padding:0.25rem;
    display:inline-block;
    width:8rem;
    margin:0;
    border-radius:0.25rem;
    font-size:0.7rem;
    line-height:1.2;
    vertical-align: top;
  }
}
</style>
