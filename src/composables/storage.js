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

export function removeItemByKey(itemKey, key) {
    let existingItems = getStorageItemsByKey(key)
    existingItems = existingItems.filter((i) => {
        return i.key !== itemKey
    })
    localStorage.setItem(key, JSON.stringify(existingItems))
}