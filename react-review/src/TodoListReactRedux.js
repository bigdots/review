import {Component} from 'react'
import "./mock/tolist.js"
import ToDoListUi from "./TodoListUi"

import { connect } from 'react-redux';

//redux
import store from './store';
import {
  getInputChangeAction,
  getAddTodoItemAction,
  getDeleteTodoItemAction,
  sagaGetTodoList
} from './store/actionCreators'


class TodoListReactRedux extends Component {
  render() {
    const {
      inputValue,
      list,
      handleInputChange,
      handleAddClick,
      handleDeleteClick
    } = this.props
    return (
      <ToDoListUi 
        inputValue ={inputValue}
        list = {list}
        handleInputChange = {handleInputChange}
        handleAddClick={handleAddClick}
        handleDeleteClick = {handleDeleteClick}
      />
    )
  }
  
  componentDidMount(){
    console.log("mounted")
    const action = sagaGetTodoList();
    // 调用dispatch，会自动执行action函数
    store.dispatch(action)
  }
}

const mapStateToProps = (state)=>{
  return{
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {
    handleInputChange(e){
      const value = e.target.value;
      const action = getInputChangeAction(value)
      dispatch(action)
    },
    handleAddClick(){
      const action =getAddTodoItemAction()
      dispatch(action)
    },
    handleDeleteClick(index){
      const action = getDeleteTodoItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoListReactRedux);
