<template>
    <div class="content">
      <ul class="code">
        <li v-for="repo in apiData.code">
          <h2>{{ repo.title }}</h2>
          <p>
            {{ repo.description }}
          </p>
          <ul class="code__tags">
            <li v-for="tag in repo.tags">
              <small>{{ tag }},</small>
            </li>
          </ul>
          <ul class="code__tags">
            <li v-for="stat in repo.numbers">
              <small>{{ stat }},</small>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
  name: 'code',
  props: ['apiData']
}
</script>

<style lang="less" scoped>
.code {
  list-style: none;
  margin:0;
  max-width:50rem;
  &__tags {
    list-style: none;
    max-width:40rem;
    margn:0;
    padding:0 0 0 0.5rem;
    li {
      display: inline-flex;
      padding:0.1rem;
    }
  }
}
</style>
