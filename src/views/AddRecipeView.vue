<script setup>
import {ref} from "vue"

let newStep = ref('')
let recipeSubmitted = ref(false)
let recipe = ref({steps: []})

let emit = defineEmits(['addRecipe']);

function addRecipe(r) {
  emit('addRecipe', r)
  recipe.value = {steps: []}
  recipeSubmitted.value = false
}

function addStep() {
  recipe.value.steps.push(newStep.value)
  newStep.value = ''
}

defineProps({
  'testProp': String,
})


</script>

<template>
  <section>
    <div class="block">
      <!--      <form @submit.prevent="addRecipe"></form>-->
      <h3>
        <slot>Add Recipe</slot>
      </h3>
      <div class="formGroup">
        <label for="recipeName">Name</label>
        <input id="recipeName" type="text" v-model="recipe.name" placeholder="Recipe name">
      </div>

      <div class="formGroup">
        <label for="recipeSummary">Summary</label>
        <textarea v-model="recipe.summary" name="summary" id="recipeSummary" cols="30"
                  rows="2"></textarea>
      </div>

      <div class="formGroup">
        <label for="key">Key</label>
        <input id="key" v-model="recipe.key" type="text">
      </div>

      <div class="formGroup">
        <input v-model="newStep" type="text" placeholder="add step...">
        <button @click="addStep">Add</button>
        <ol v-if="recipe.steps.length">
          <li v-for="step in recipe.steps" :key="step">{{ step }}</li>
        </ol>
      </div>

      <div class="formGroup">
        <button @click="recipeSubmitted = true">Go - {{ testProp }}</button>
      </div>

    </div>
    <div v-if="recipeSubmitted" class="block">
      <div v-if="recipe.name" class="block">
        <h4>name</h4>
        {{ recipe.name }}
      </div>

      <div v-if="recipe.summary" class="block">
        <h4>Summary</h4>
        {{ recipe.summary }}
      </div>

      <div v-if="recipe.key" class="block">
        <h4>Key</h4>
        {{ recipe.key }}
      </div>

      <div v-if="recipe.steps.length" class="block">
        <h4>Steps</h4>
        <div>
          <ol>
            <li v-for="step in recipe.steps" :key="step">{{ step }}</li>
          </ol>
        </div>
      </div>
      <div class="formGroup">
        <button @click="addRecipe(recipe)">Confirm</button>
      </div>

    </div>
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