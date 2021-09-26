import {Fragment} from 'react'
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'antd/dist/antd.css';
import { Input,Button,List,Typography } from 'antd';

// 无状态组件，性能更高
const ToDoListUi = (props)=>{
    const {
        inputValue,
        list,
        handleInputChange,
        handleAddClick,
        handleDeleteClick
    } = props

    return (
        <Fragment>
            <div style={{width:400,margin:30}}>
            <div>
            {/* <label htmlFor="insert">请输入内容</label> */}
            <Input
            placeholder="请输入内容" 
            style={{marginBottom: 30,width:300}}
            value={inputValue}
            onChange={handleInputChange}
            />
            <Button 
            type="primary" 
            style={{marginLeft: 35}}
            onClick={handleAddClick}
            >
                添加
            </Button>
            </div>
            <List
            header={<div>备忘录</div>}
            bordered
            dataSource={list}
            renderItem={(item,index) => (
                <List.Item 
                onClick={()=>{handleDeleteClick(index)}}>
                <Typography.Text mark>[事项]</Typography.Text> {item}
                </List.Item>
            )}
            />
            </div>
        </Fragment>
    )
}



export default ToDoListUi;