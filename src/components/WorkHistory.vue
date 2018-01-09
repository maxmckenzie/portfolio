<template>
    <div class="content">
      <ul class="work-history">
        <li v-for="job in apiData.workhistory">
          <h2>{{ job.title }}</h2>
          <p class="date">{{ job.date }}</p>
          <p>{{ job.description }}</p>
          <ul class="work-history__tags">
            <li v-for="tag in job.tags">
              <small>{{ tag }},</small>
            </li>
          </ul>
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
    list-style: none !important;
    margin: 1rem 0.5rem 2rem 0rem !important;
    border-left: 0.25rem solid lighten(#2c2c2c, 15%);
    padding:0 0 0 0.5rem !important;
    max-width:50rem;
    li {
      display: inline-block;
      padding:0.1rem;
      small {
        display: block;
      }
    }
  }
  h2 {
    margin:0.5rem 0;
  }
  .date {
    background-color:lighten(#eee, 5%);
    padding:0.25rem;
    display:inline-block;
    margin:0;
    border-radius:0.25rem;
    font-size:0.8rem;
    line-height:1.2;
    border:1px solid lighten(#ccc, 5%);
    box-shadow:0px 0px 1px 1px lighten(#ccc, 20%);
  }
}
</style>
