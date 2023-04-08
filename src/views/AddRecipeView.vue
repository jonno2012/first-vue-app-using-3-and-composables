<script setup>
import {ref} from "vue"

let name = ref('')
let summary = ref('')
let key = ref('')
let steps = ref([])
let newStep = ref('')
let recipe = ref(null)
let recipeSubmitted = ref(false)
function addRecipe() {
  recipe.value = {
    name: name.value,
    summary: summary.value,
    steps: steps.value,
    key: key.value
  }
  name.value = ''
  summary.value = ''
  steps.value = []
  key.value = ''
  recipeSubmitted.value = true
}
function addStep() {
  steps.value.push(newStep.value)
  newStep.value = ''
}

let emit = defineEmits(['updateRecipe']);

</script>

<template>
  <section>
    <div class="block">
      <form @submit.prevent="addRecipe"></form>
      <h3>
        <slot>Add Recipe</slot>
      </h3>
      <div class="formGroup">
        <label for="recipeName">Name</label>
        <input id="recipeName" type="text" v-model="name" placeholder="Recipe name">
      </div>

      <div class="formGroup">
        <label for="recipeSummary">Summary</label>
        <textarea @click="addSummary" v-model="summary" name="summary" id="recipeSummary" cols="30"
                  rows="2"></textarea>
      </div>

      <div class="formGroup">
        <label for="key">Key</label>
        <input id="key" v-model="key" type="text">
      </div>

      <div class="formGroup">
        <input v-model="newStep" type="text" placeholder="add step...">
        <button @click="addStep">Add</button>
        <ol v-if="steps.length">
          <li v-for="step in steps" :key="step">{{ step }}</li>
        </ol>
      </div>

      <div class="formGroup">
        <button @click="addRecipe">Go</button>
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
        <button @click="emit('addRecipe', recipe); recipeSubmitted = false;">Confirm</button>
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
h4{ font-weight: bold;}


</style>