import { memo, useState, useEffect, Suspense } from "react";
import { UserOutlined } from '@ant-design/icons';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { Avatar } from 'antd';
import imgLogo from '../../assets/img/logo.png'
import { Outlet, Link, useLocation } from "react-router-dom";
import { routes } from '../../router';


const defaultProps = {
	routes: routes.filter(item => item.path === "layout")[0].children
};

export default memo(function InitLayout() {
	let itemPath:any = useLocation();
	const [pathname, setPathname] = useState(itemPath.pathname);
	useEffect(() =>{
		setPathname(itemPath.pathname)
	},[itemPath])
	return (
		<>
			<ProLayout
				title=""
				logo={imgLogo}
				route={defaultProps}
				location={{pathname}}
				fixSiderbar
				menuItemRender={(item:any, dom:any) => {
					return (<Link to={item.path} onClick={() => setPathname(item.path)}>{dom}</Link>)
				}}
				menuHeaderRender={(logo: string, title:string) => (
					<div id="customize_menu_header">{logo}</div>
				)}
				rightContentRender={() => (
					<div>
						<Avatar shape="square" size="small" icon={<UserOutlined />} />
					</div>
				)}
			>
				<PageContainer>
					<div style={{height: '120vh',}}>
						<Suspense>
							<Outlet/>
						</Suspense>
					</div>
				</PageContainer>
			</ProLayout>
		</>
	);
});
