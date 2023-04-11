<script setup>
import {ref} from "vue"
import {useRecipeStore} from "@/stores/recipeStore";

let newStep = ref('')
let recipeSubmitted = ref(false)
let recipe = ref({steps: []})
let recipeStore = useRecipeStore()

let close = defineEmits(['close'])

function addRecipe(r) {
  recipeStore.addRecipe(r)
  recipe.value = {steps: []}
  close('close')
  // this.show = false
  recipeSubmitted.value = false
}

function addStep() {
  recipe.value.steps.push(newStep.value)
  newStep.value = ''
}

defineProps({
  'testProp': {
    type: String,
    default: ''
  },
  show: Boolean
})


</script>

<template>
  <Transition
      enter-from-class="transition opacity-0 scale-125"
      enter-to-class="transition opacity-100 scale-100"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-125"
  >
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <section>
          <div class="block">
            <form @submit.prevent class="mt-6">
              <h3>
                <slot>Add Recipe</slot>
              </h3>

              <div class="formGroup">
                <label for="recipeName">Name</label>
                <input class="flex-1 p-1" id="recipeName" type="text" v-model="recipe.name" placeholder="Recipe name">
              </div>

              <div class="formGroup">
                <label for="recipeSummary">Summary</label>
                <textarea class="flex-1 p-1" v-model="recipe.summary" name="summary" id="recipeSummary" cols="30"
                          rows="2"></textarea>
              </div>

              <div class="formGroup">
                <label for="key">Key</label>
                <input class="flex-1 p-1" id="key" v-model="recipe.key" type="text">
              </div>

              <div class="formGroup">
                <input class="flex-1 p-1" v-model="newStep" type="text" placeholder="add step...">
                <button
                    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                    @click="addStep"
                >Add
                </button>
                <ol v-if="recipe.steps.length">
                  <li v-for="step in recipe.steps" :key="step">{{ step }}</li>
                </ol>
              </div>

              <div class="formGroup">
                <button @click="recipeSubmitted = true">Go - {{ testProp }}</button>
              </div>
            </form>
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
              <button
                  class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                  @click="addRecipe(recipe)"
              >Confirm
              </button>
            </div>

          </div>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <button
                class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
                @click="$emit('close')"
            >Default Close!
            </button>
          </slot>
        </footer>
      </div>
    </div>

  </Transition>


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

.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .4);
  display: grid;
  place-items: center;
}

.modal-container {
  background: white;
  padding: 1rem;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}

.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding: 0.5rem;
  font-size: .8rem;
}

.modal-footer button {
  background: #ddd;
  padding: .25rem .5rem;
  border-radius: 20px;
}

.modal-footer button:hover {
  background: #c8c8c8;
}

</style>