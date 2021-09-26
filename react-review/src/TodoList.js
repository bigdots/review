import {Component} from 'react'

// import TodoItem from './TodoItem'
import axios from 'axios';
import "./mock/tolist.js"
import ToDoListUi from "./TodoListUi"

//redux
import store from './store';
import {
  getInputChangeAction,
  getAddTodoItemAction,
  getDeleteTodoItemAction,
  // initListAciton,
  getTodoList
} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    // 可以提升性能,绑定只会执行一次
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)

    // store 监听数据变化
    store.subscribe(()=>{
      // 为什么会执行两遍?
      console.log('subscribe')
      this.setState(store.getState)
    })
  };

  render() {
    return (
      <ToDoListUi 
        inputValue ={this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleAddClick={this.handleAddClick}
        handleDeleteClick = {this.handleDeleteClick}
      />
    )
  }
  componentDidUpdate(){
    console.log("updated")
  }
  
  componentDidMount(){
    console.log("mounted")
    const action = getTodoList();
    // 调用dispatch，会自动执行action函数
    store.dispatch(action)
  }

  handleInputChange(e) {
    // console.log("onchange")
    const value = e.target.value;
    const action = getInputChangeAction(value)
    store.dispatch(action)
  }

  handleAddClick() {
    // 使用redux
    const action =getAddTodoItemAction()
    store.dispatch(action)
  }

  handleDeleteClick(index){
    const action = getDeleteTodoItemAction(index)
    store.dispatch(action)

    // immutable state不可直接改变；拷贝一个副本进行修改
    // this.setState((prevState)=>{
    //   const list = [...prevState.list];
    //   list.splice(index,1);
    //   return {
    //     list
    //   }
    // })
  }
}


export default TodoList;
