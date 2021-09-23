import { Component } from "react";
import PropTypes from "prop-types"

class TodoItem extends Component {
	shouldComponentUpdate(nextProps,nextState){
		return nextProps.item !== this.props.item
	}

	// 当组件的state或者props发生改变时，render函数就会被重新执行
    render(){
		// console.log("child render")
		// console.log("li render")
		const {handleClick,item,index} = this.props;
		return(
			<li
				onClick = {()=> {handleClick(index)}}
				dangerouslySetInnerHTML={{__html:item}}	
			>
			</li>
		)
    }

}
// 类型定义
TodoItem.propTypes = {
	handleClick:PropTypes.func,
	item:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
	index:PropTypes.number
}


export default TodoItem