<template>
    <div class="content">
      <pre class="responce">Currently working with {{ apiData.skills }}</pre>
      <abilites></abilites>
    </div>
</template>

<script>
import Abilites from '@/components/Abilities.vue'

export default {
  name: 'skills',
  props: ['apiData'],
  components: {
    abilites: Abilites
  }
};
</script>
