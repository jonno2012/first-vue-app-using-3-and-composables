<script setup>
import {recipes} from "@/stores/recipeStore";

</script>

<template>
  <div v-if="recipes.recipes.length">
    <ul>
      <li v-for="recipe in recipes.recipes" :key="recipe.key">{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>