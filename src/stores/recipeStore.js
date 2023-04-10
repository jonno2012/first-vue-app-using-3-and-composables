import { reactive} from "vue";
import { getStorageItemsByKey, addStorageItemByKey } from '@/composables/storage'

export let recipes = reactive({
    recipes: [],

    addRecipe(r) {
        addStorageItemByKey({name: r.name, summary: r.summary, key: r.key, steps: r.steps}, 'recipes')
        this.recipes.push({name: r.name, summary: r.summary, key: r.key, steps: r.steps})
    },

    setRecipes(recipes) {
        this.recipes = recipes
    }
})