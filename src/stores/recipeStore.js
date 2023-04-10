import {watch} from "vue";
import {getStorageItemsByKey} from '@/composables/storage'
import {defineStore} from "pinia"

export let useRecipeStore = defineStore('recipes', {
    state: () => ({
        recipes: []
    }),
    actions: {
        async fill() {
            let response = await fetch('http://localhost:3001/recipes')
            let r = await response.json()
            let g = getStorageItemsByKey('recipes')
            this.$state.recipes = [...r, ...g]

            watch(this.$state.recipes, async () => {
                localStorage.setItem('recipes', JSON.stringify(this.nonDefaultRecipes()))
            })
        },

        addRecipe(r) {
            console.log('store addRecipe', {name: r.name, summary: r.summary, key: r.key, steps: r.steps})
            this.$state.recipes.push({name: r.name, summary: r.summary, key: r.key, steps: r.steps})
        },

        removeRecipe(recipe) {
            let index = this.$state.recipes.findIndex((r) => {
                return r.key === recipe.key
            })
            this.$state.recipes.splice(index, 1)
        },

        nonDefaultRecipes() {
            return this.$state.recipes.filter((r) => {
                return !r.default
            })
        }
    }
})