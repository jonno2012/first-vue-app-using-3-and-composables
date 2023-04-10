import { reactive} from "vue";
import { removeItemByKey, addStorageItemByKey } from '@/composables/storage'

export let recipes = reactive({
    recipes: [],

    addRecipe(r) {
        addStorageItemByKey({name: r.name, summary: r.summary, key: r.key, steps: r.steps}, 'recipes')
        this.recipes.push({name: r.name, summary: r.summary, key: r.key, steps: r.steps})
    },

    setRecipes(recipes) {
        this.recipes = recipes
    },

    removeRecipe(recipe) {
        this.recipes = this.recipes.filter((r) => {
            return r.key !== recipe.key
        })

        removeItemByKey(recipe.key, 'recipes')
    }
})