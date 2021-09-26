import {
    ChangeInputValue,
    AddTodoItem,
    DeleteTodoItem,
    InitListAciton} from "./actionTypes"

const defaultState ={
    inputValue: "",
    list: []
}

function deepClone (obj) {
    return JSON.parse(JSON.stringify(obj));
}

// reducer 可以接收state，但是不能修改state
function reducer(state = defaultState, action) {
    // console.log('reduce')
    switch (action.type){
        case ChangeInputValue:{
            // console.log(1)
            let newState = deepClone(state)
            newState.inputValue = action.value
            return newState
        }
            
        case AddTodoItem:{
            // console.log(2)
            let newState = deepClone(state)
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        }
        case DeleteTodoItem:{
            let newState = deepClone(state)
            newState.list.splice(action.index,1);
            return newState;
        }
        case InitListAciton:{
            let newState = deepClone(state)
            newState.list= action.list;
            return newState;
        }
        default:{
            return state; 
        }
    }
}

export default reducer;