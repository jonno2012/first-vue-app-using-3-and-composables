export function addStorageItemByKey(newStorageItem, key = null) {
    let existingItems = getStorageItemsByKey(key)
    existingItems.push(newStorageItem)
    localStorage.setItem(key, JSON.stringify(existingItems))
}

export function getStorageItemsByKey(key) {
    let existingRecipes = JSON.parse(localStorage.getItem(key))
        return existingRecipes
            ? existingRecipes
            : []
}