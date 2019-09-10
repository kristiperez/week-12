const redux = require('redux')
const createStore = redux.createStore

//create initial state
// this is the global state
const initialState = {
    counter: 0,
    isLoggedIn: false
}

//reducer
// if state is undefined then choose the initialState
// else if stae is ot undefined then just return state
const reducer = (state = initialState, action) => {
    console.log(action.type)
    if(action.type =='INC_COUNTER') {
        // update the counter global state
        // and returning the updated sate
        return {
            ...state, // copy the old state
            counter: state.counter + 1
        }
    } else if(action.type == 'ADD_COUNTER') {
        //increment the counter by value
        return {
            ...state,
            counter: state.counter + action.value
        }
    } else if(action.type == 'DEC_COUNTER') {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if(action.type == 'SUB_COUNTER') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    // return initial state
    return state
}

//store
const store = createStore(reducer)
console.log(store.getState())

//subscription
store.subscribe(() => {
    console.log('Subscription Fired')
})

//dispatch actions
store.dispatch({type: 'INC_COUNTER'})
console.log(store.getState())

//increment counter by certain value
store.dispatch({type: 'ADD_COUNTER', value: 100})
console.log(store.getState())

store.dispatch({type: 'DEC_COUNTER'})
console.log(store.getState())

store.dispatch({type: 'SUB_COUNTER', value:100})
console.log(store.getState())
