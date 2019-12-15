import React,{Component} from 'react'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Content } = Layout;
import Header from 'commont/header'
import Sider from 'commont/sider'


class AdminLayout extends Component{
	render(){
		return (
			<div className="AdminLayout">
				<Layout>
				    <Header />
				    <Layout>
				      <Sider />
				      <Layout style={{ padding: '0 24px 24px' }}>
				        <Content
				          style={{
				            background: '#fff',
				            padding: 24,
				            margin: 0,
				            minHeight: 280,
				          }}
				        >
				          {this.props.children}
				        </Content>
				      </Layout>
				    </Layout>
			    </Layout>
			</div>
		)
	}
}
export default AdminLayout
