<script setup>
// import { ref } from "vue"
import AddRecipeView from "@/views/AddRecipeView.vue";
import { getStorageItemsByKey, addStorageItemByKey } from '@/composables/storage'
import { recipes } from "@/stores/recipeStore";

// let recipes = ref([])

function addRecipe(r) {
  recipes.addRecipe({name: r.name, summary: r.summary, key: r.key, steps: r.steps})
}

fetch('http://localhost:3001/recipes')
    .then(response => response.json())
    .then(r => {
      let g = getStorageItemsByKey('recipes')
      recipes.setRecipes([...r, ...g])
    })

</script>
<template>
  <section>
    <div v-if="recipes.recipes.length" class="block">
      <h4>Recipes</h4>
      <ul>
        <li v-for="recipe in recipes.recipes" :key="recipe.key">{{ recipe.name }}</li>
      </ul>
    </div>

  <AddRecipeView @addRecipe="addRecipe" test-prop="A Test Prop"></AddRecipeView>

  </section>



</template>

<style scoped>
.formGroup {
  display: block;
}

.formGroup label {
  display: block;
}

.block {
  display: block;
  margin: 1em 0;
}
h4{ font-weight: bold;}


</style>