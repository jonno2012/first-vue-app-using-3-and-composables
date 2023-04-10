<script setup>
import AddRecipeView from "@/views/AddRecipeView.vue";
import {recipes} from "@/stores/recipeStore";

function addRecipe(r) {
  recipes.addRecipe({name: r.name, summary: r.summary, key: r.key, steps: r.steps})
}

</script>
<template>
  <section>
    <div v-if="recipes.recipes.length" class="block">
      <h4>Recipes</h4>
      <ul>
        <li v-for="recipe in recipes.recipes" :key="recipe.key">
          {{ recipe.name }}
          <button
              v-show="! recipe.default"
              @click="recipes.removeRecipe(recipe)"
          >x
          </button>
        </li>
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

h4 {
  font-weight: bold;
}


</style>