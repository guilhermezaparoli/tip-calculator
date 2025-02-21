import { ITEM_ADDED, ITEM_PRICE_UPDATED, ITEM_QUANTITY_UPDATED, ITEM_REMOVED } from "./actions";

let id = 1;

export const initialItems = [
  { uuid: id++, name: 'Tofu Roast', price: 14, quantity: 1 },
  { uuid: id++, name: 'Vegan Ham', price: 12, quantity: 1 }
];

export const reducer = (state = initialItems, action) => {
console.log(state, action)
  if (action.type === ITEM_ADDED) {
    const item = { uuid: id++, quantity: 1, ...action.payload }

    return [...state, item]
  }

  if (action.type === ITEM_REMOVED) {
    const newArray = state.filter((item) => item.uuid !== action.payload.uuid)

    return newArray
  }

  if (action.type === ITEM_PRICE_UPDATED) {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, price: action.payload.price }
      }
      return item
    })
  }

  if (action.type === ITEM_QUANTITY_UPDATED) {
    return state.map((item) => {
      if (item.uuid === action.payload.uuid) {
        return { ...item, quantity: action.payload.quantity }
      }
      return item
    })
  }



  return state;
};

export default reducer;
