import { Fragment, Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      list: []
    }
    // 可以提升性能
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this)
  };

  render() {
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
  
  getTodoItem(){
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            item={item} 
            index={index} 
            key={index} 
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
    })

    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ""
    // });
  }
}


export default TodoList;
