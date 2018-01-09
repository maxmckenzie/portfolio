<template>
    <div class="content">
      <ul class="projects">
        <li v-for="project in apiData.projects">
          <h2>{{ project.title }}</h2>
          <a :href="project.url">{{ project.url }}</a>
          <p>{{ project.description }}</p>
          <ul class="projects__tags">
            <li v-for="tag in project.tags">
              <small>{{ tag }},</small>
            </li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'projects',
  props: ['apiData']
}
</script>

<style lang="less" scoped>
.projects {
  list-style: none;
  margin:0;
  padding:0;
  max-width:50rem;
  p {
    padding-bottom:1rem;
    border-bottom: 1px solid #eee;
  }
  &__tags {
    list-style: none;
    max-width:40rem;
    margin:0;
    padding:0 0 0 0.5rem;
    li {
      display: inline-flex;
      padding:0.1rem;
    }
  }
}
</style>
