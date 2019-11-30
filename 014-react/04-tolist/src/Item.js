


import React,{Component,Fragment} from 'react'
import PropTypes from 'prop-types';

class Item extends Component{
	constructor(props){
		super(props)

	}
	render(){
		const {handleDel,task} = this.props
		return (
			<li onClick={handleDel}>{task}</li>
		)
	}
}
Item.propTypes = {
	handleDel:PropTypes.func,
	task:PropTypes.string
}
Item.defaultProps = {
	task:'learn react'
}
export default Item
