// cartReducer.js

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] };
        }
        case "REMOVE_FROM_CART": {
            const updatedCart = state.cart.filter((_, index) => index !== action.index);
            return { ...state, cart: updatedCart };
        }
    
    case "UPDATE_CART": {
      return { ...state, cart: action.updatedCart };
    }
        default: {
            return state;
        }
    }
};
