<template>
    <div class="content">
      <ul>
        <li v-for="institute in apiData.education">
          <h3>{{institute.title}}</h3>
          <p class="date">{{institute.date}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'education',
  props: ['apiData']
}
</script>

<style></style>