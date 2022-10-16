import { 
    LOAD_CARDS,
    // ////////////////////////////////////////
    SET_LOADING,
    ADD_DINNERS,
    REMOVE_DINNER,
    SET_ACTUAL_DINNER,
    ADD_FOOD_DINNER,
    CLEAR_STATE,
    SET_TABLE,
    // ////////////////////////////////////////
    LOAD_OPERATIONS,
    EDIT_OPERATION,
    SET_BALANCE
} from './actions';

import { order } from './functionsFilters';
const initialState = {
    // ******************************
    // amountForPage: 10,
    // loading: true,
    // // ******************************
    operations: [],
    balance: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_OPERATIONS:
            return {
                ...state,
                operations: [...action.payload]
            };
        case SET_LOADING:
            let loading;
            console.log(!state.loading);
            if ( action.payload === null ) 
                loading = !state.loading
            else 
                loading = action.payload;
            return {
                ...state,
                loading
            };
        case SET_BALANCE:
            const balance = state.operations.reduce( (total, op)=> {
                    if(op.type === 'withdraw')
                        return total -= op.amount;
                    else
                        return total += op.amount;
                }, 0);
            return {
                ...state,
                balance
            };
            // ///////////////////////////////////
        default: return {...state};
    
    }
};