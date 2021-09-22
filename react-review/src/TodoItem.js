import { Component } from "react";

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this.props.contxt,this.props.index)
    }

    render(){
			return(
				<li
						onClick={this.handleDeleteClick}
						dangerouslySetInnerHTML={{__html:this.props.item}}
				>
				</li>
			)
    }

    handleDeleteClick(index){
			//immutable state不可直接改变；拷贝一个副本进行修改
			this.setState((prevState)=>{
				const list = [...prevState.list];
				list.splice(index,1);
				return {
					list
				}
			})

			// this.setState({
			// 		list
			// })
    }
}

export default TodoItem