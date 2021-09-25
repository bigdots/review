import {
    ChangeInputValue,
    AddTodoItem,
    DeleteTodoItem
} from "./actionTypes"

export const getInputChangeAction = (value)=>({
    type: ChangeInputValue,
    value
})

export const getAddTodoItemAction = (vaue)=>({
    type: AddTodoItem,
})

export const getDeleteTodoItemAction = (index)=>({
    type: DeleteTodoItem,
    index
})