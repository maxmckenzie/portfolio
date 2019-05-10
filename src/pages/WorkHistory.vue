<template>
    <div class="content work">
      <ul class="no-list-style">
        <li v-for="job in apiData.workHistory">
          <h2 class="work__title">{{ job.title }}</h2>
          <ul class="no-list-style work__tags">
            <li><small><b><i class="remixicon-stack-line"></i></b></small></li>
            <li v-for="tag in job.tags">
              <small>{{ tag }},</small>
            </li>
          </ul>
          <p class="work__date">{{ job.date }}</p>
          <p class="work__description">{{ job.description }}</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'workHistory',
  props: ['apiData']
};
</script>

<style lang="less" scoped>
@import url('../styles/utils.less');

.work {
  &__tags {
    margin:0;
    padding:0;
    max-width: 35rem;
    i {
      vertical-align: middle;
    }
    li {
      display: inline-block;
      padding:0 0.15rem;
      font-weight: 500;
      line-height: 1;
    }
  }
  &__date {
    font-size:@e-1;
    color:@color-neutral-500;
    font-weight:500;
    line-height: 1;
  }
  &__title {
    margin:0;
    line-height: 1.75;
    color:@color-neutral-700;
  }
  &__description {
    margin-bottom:2rem;
  }
}
</style>
