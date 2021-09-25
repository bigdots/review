import { Fragment, Component } from 'react';
// import TodoItem from './TodoItem'
import axios from 'axios';
import "./mock/tolist.js"

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import { Typography } from 'antd';
//redux
import store from './store';
// const {dispatch} = store;
import {getInputChangeAction,getAddTodoItemAction,getDeleteTodoItemAction} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    // 可以提升性能,绑定只会执行一次
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this)
    // this.handleDeleteClick = this.handleDeleteClick.bind(this);

    store.subscribe(()=>{
      // 为什么会执行两遍
      // console.log('sub1')
      this.setState(store.getState)
    })
  };

  render() {
    // console.log("ul render")
    return (
      <Fragment>
        <div style={{width:400,margin:30}}>
        <div>
          {/* <label htmlFor="insert">请输入内容</label> */}
          <Input
          placeholder="请输入内容" 
          style={{marginBottom: 30,width:300}}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          />
          <Button 
          type="primary" 
          style={{marginLeft: 35}}
          onClick={this.handleAddClick}
          >
            添加
          </Button>
        </div>
        <List
          header={<div>备忘录</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item onClick={this.handleDeleteClick.bind(this,index)}>
              <Typography.Text mark>[事项]</Typography.Text> {item}
            </List.Item>
          )}
        />
        </div>
      </Fragment>
    );
  }
  
  componentDidMount(){
    // axios.get("/todolist.json",{dateType:'json'}).then((res)=>{
    //   this.setState(()=>({
    //     list : [...res.data.list]
    //   }))
    //   console.log(res)
    // }).catch((e)=>{
    //   console.log(e)
    // })
  }

  handleInputChange(e) {
    // this.state.inputValue = e.target.value;
    const value = e.target.value;

    const action = getInputChangeAction(value)
    // console.log("onchange")
    store.dispatch(action)

    // this.setState(()=>{
    //   return {
    //     inputValue: value
    //   }
    // })
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handleAddClick() {
    // this.setState((prevState)=>{
    //   return {
    //     list: [...prevState.list, prevState.inputValue],
    //     inputValue: ""
    //   }
    // },()=>{
    //   // setState 异步完成后执行的回调函数
    // })

    // 使用redux
    const action =getAddTodoItemAction()
    store.dispatch(action)
  }
  handleDeleteClick(index){
    // immutable state不可直接改变；拷贝一个副本进行修改
    // this.setState((prevState)=>{
    //   const list = [...prevState.list];
    //   list.splice(index,1);
    //   return {
    //     list
    //   }
    // })

    const action = getDeleteTodoItemAction(index)
    store.dispatch(action)
  }
  
  // getTodoItem(){
  //   return (
  //     this.state.list.map((item, index) => {
  //       return (
  //         <TodoItem 
  //           item={item} 
  //           index={index} 
  //           // key值最好选择独一无二且不变的，index会变
  //           key={item}
  //           handleClick = {this.handleDeleteClick} 
  //           contxt={this} 
  //         />
  //         )
  //     })
  //   )
  // }

}


export default TodoList;
