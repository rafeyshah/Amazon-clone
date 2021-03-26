export const initialState = {
    basket: [],
    user: null
}

function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // logic for adding into basket
            return {
                ...state, 
                basket: [...state.basket, action.item],

            }
        case 'REMOVE_FROM_BASKET':
            // logic for removing basket
            return {state}
        default:
            return state;
    }
}

export default reducer