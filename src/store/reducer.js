import * as actionType from './actions';

const intialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        meat: 1,
        bacon: 0
    },
    totalPrice: 350.00,
};


const INGREDEINTS_PRICE = {
    salad: 20.35,
    cheese: 50.75,
    meat: 120.40,
    bacon: 80.70
}

const reducer = (state = intialState, action) => {
    switch(action.type) {
        case actionType.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1 
                },
                totalPrice: state.totalPrice + INGREDEINTS_PRICE[action.ingredientName]
            }
        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1 
                },
                totalPrice: state.totalPrice - INGREDEINTS_PRICE[action.ingredientName]
            }
        default:
            return state;
    }    
}

export default reducer;