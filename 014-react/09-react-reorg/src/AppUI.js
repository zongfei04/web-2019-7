
import React,{Component,Fragment} from 'react'
import './App.css'
import { DatePicker,Input,Button,Row,Col,List,Typography} from 'antd';



//UI组件
class AppUI extends Component{
	render(){
		return (
			<div className="box">
				<Row>
					<Col span={20}>
						<Input 
							onChange={this.props.handleInput}
							value = {this.props.task}
						/>
					</Col>
					<Col span={4}>
						<Button type="primary" onClick={this.props.handleAdd}>提交</Button>
					</Col>
				</Row>
				<Row>
					<Col span={22}>
						<List
						    style={{marginTop:15}}
						      bordered
						      dataSource={this.props.list}
						      renderItem={(item,index) => (
						        <List.Item onClick={()=>{this.props.handleDel(index)}}>
						           {item}
						        </List.Item>
						      )}
						/>
					</Col>
				</Row>
				<DatePicker />
			</div>
		)
	}
}
export default AppUI
