<script setup>
import AddRecipeView from "@/views/AddRecipeView.vue";
import {ref} from "vue";

let showModal = ref(false)
</script>

<template>
  <button
      class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      @click="showModal = true"
  >Add Recipe
  </button>
  <Teleport to="body">
    <AddRecipeView
        :show="showModal"
        @close="showModal = false"
    ></AddRecipeView>
  </Teleport>
</template>

<style scoped>

</style>