export const ITEM_ADDED = "ITEM_ADDED"

export const addNewItem = (name, price) => ({
    type: ITEM_ADDED,
    paylod: {
        name, price
    }
})