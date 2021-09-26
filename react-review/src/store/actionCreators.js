import axios from 'axios';

import {
    ChangeInputValue,
    AddTodoItem,
    DeleteTodoItem,
    InitListAciton
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

export const initListAciton = (list)=>({
    type: InitListAciton,
    list
})

// 使用thunks，ation可以是个函数,这个函数会自动接受dispatch作为参数
// 异步放到actions里，第一是为了拆分业务逻辑，不至于组件太过臃肿，第二是为了方便自动化测试
export const getTodoList = ()=>{
    return  (dispatch)=>{
        axios.get("/todolist.json",{dateType:'json'}).then((res)=>{
            const action = initListAciton(res.data.list);
            dispatch(action)
          }).catch((e)=>{
            console.log(e)
        })
    }
}