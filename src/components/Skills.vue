<template>
    <div class="content">
      <pre class="responce">{{ apiData.skills }}</pre>
      <abilites></abilites>
    </div>
</template>

<script>
import Abilites from './Abilities.vue'

export default {
  name: 'skills',
  props: ['apiData'],
  components: {
    abilites: Abilites
  }
}
</script>
