import {reactive, watch} from "vue";
import {getStorageItemsByKey} from '@/composables/storage'

export let recipes = reactive({
    recipes: fetch('http://localhost:3001/recipes')
        .then(response => response.json())
        .then(r => {
            let g = getStorageItemsByKey('recipes')

            recipes.setRecipes([...r, ...g])

            watch(recipes.recipes, async (newRecipes) => {
                console.log('newRecipes', newRecipes)
                localStorage.setItem('recipes', JSON.stringify(recipes.nonDefaultRecipes()))
            })
        }),

    addRecipe(r) {
        this.recipes.push({name: r.name, summary: r.summary, key: r.key, steps: r.steps})
    },

    setRecipes(recipes) {
        this.recipes = recipes
    },

    removeRecipe(recipe) {
        let index = this.recipes.findIndex((r) => {
            return r.key === recipe.key
        })
        this.recipes.splice(index, 1)
    },

    nonDefaultRecipes() {
        return this.recipes.filter((r) => {
            return !r.default
        })
    }
})