<template>
    <div class="content">
      <ul class="projects">
        <li v-for="project in apiData.projects" class="projects__items">
          <h2 class="projects__title">{{ project.title }}</h2>
          <p class="projects__description">{{ project.description }}</p>
          <a class="projects__link" :href="project.url">{{ project.url }}</a>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'projects',
  props: ['apiData']
};
</script>

<style lang="less" scoped>
@import url('../styles/utils.less');

.projects {
  list-style:none;
  margin:0;
  padding:0;
  li {
    margin-bottom:2rem
  }
  &__url {
    color:@color-neutral-500;
    display: block;
    font-weight:500;
    line-height: 1;
    font-size: @e-1;
  }
  &__title {
    margin:0;
    line-height: 1.75;
    color:@color-neutral-700;
  }
  &__description {
    margin:0.5rem 0;
  }
}
</style>