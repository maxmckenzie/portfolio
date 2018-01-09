<template>
    <div class="content">
      <ul class="work-history">
        <li v-for="job in apiData.workhistory">
          <h2>{{ job.title }}</h2>
          <p>{{ job.date }}</p>
          <p>
            {{ job.description }}
          </p>
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
  max-width:50rem;
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
</style>
