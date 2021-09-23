import { Fragment, Component } from 'react';
import TodoItem from './TodoItem'
import axios from 'axios';
import "./mock/tolist.js"

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      list: []
    }
    // 可以提升性能,绑定只会执行一次
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  };

  render() {
    // console.log("ul render")
    return (
      <Fragment>
        <div>
          <label htmlFor="insert">请输入内容</label>
          <input
            id="insert"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddClick}>添加</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
  
  componentDidMount(){
    axios.get("/todolist.json",{dateType:'json'}).then((res)=>{
      this.setState(()=>({
        list : [...res.data.list]
      }))
      console.log(res)
    }).catch((e)=>{
      console.log(e)
    })
  }

  getTodoItem(){
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            item={item} 
            index={index} 
            // key值最好选择独一无二且不变的，index会变
            key={item}
            handleClick = {this.handleDeleteClick} 
            contxt={this} 
          />
          )
      })
    )
  }

  handleInputChange(e) {
    // this.state.inputValue = e.target.value;
    const value = e.target.value;
    this.setState(()=>{
      return {
        inputValue: value
      }
    })
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handleAddClick() {
    this.setState((prevState)=>{
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ""
      }
    },()=>{
      // setState 异步完成后执行的回调函数
    })
  }
  handleDeleteClick(index){
    // immutable state不可直接改变；拷贝一个副本进行修改
    this.setState((prevState)=>{
      const list = [...prevState.list];
      list.splice(index,1);
      return {
        list
      }
    })
  }
}


export default TodoList;
