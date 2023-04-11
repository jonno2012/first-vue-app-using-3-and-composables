<script setup>
import AddRecipeView from "@/views/AddRecipeView.vue";
import {useRecipeStore} from "@/stores/recipeStore";
import RecipeModal from "@/components/RecipeModal.vue";

let recipeStore = useRecipeStore()

// function addRecipe(r) {
//   recipeStore.addRecipe({name: r.name, summary: r.summary, key: r.key, steps: r.steps})
// }

</script>
<template>
  <section>
    <div v-if="recipeStore.recipes.length" class="block">
      <h4>Recipes</h4>
      <ul>
        <li v-for="recipe in recipeStore.recipes" :key="recipe.key">
          {{ recipe.name }}
          <button
              v-show="! recipe.default"
              @click="recipeStore.removeRecipe(recipe)"
          >x
          </button>
        </li>
      </ul>
    </div>

    <AddRecipeView test-prop="A Test Prop"></AddRecipeView>
    <RecipeModal/>

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