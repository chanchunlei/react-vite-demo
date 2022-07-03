import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { PieChartOutlined, FileSearchOutlined, SettingOutlined } from '@ant-design/icons';

const TMLogin = React.lazy(() => import("../pages/login"));
const TMLayout = React.lazy(() => import("../pages/layout"));
const TMHome = React.lazy(() => import("../pages/home"));
const TMLogList = React.lazy(() => import("../pages/log-list"));
const TMPushConfig = React.lazy(() => import("../pages/push-config"));
const ErrorPage = React.lazy(() => import("../pages/error"));

export interface RouterProps {
	name?: string;//名称 (可选)
	path: string;//路径
	element?: any; //(可选)
	icon?: any;
	children?: RouterProps[] //(可选)
}
export const routes:RouterProps[] = [
	{
		path: "",
		element: <Navigate to="/layout"/>
	},
	{
		path: "login",
		element: <TMLogin/>
	},

	{
		path: "layout",
		element: <TMLayout/>,
		children: [
			{
				path: "/layout",
				element: <Navigate to="/layout/home"/>,
			},
			{
				path: "/layout/home",
				name: "推送统计",
				icon: <PieChartOutlined />,
				element: <TMHome/>,
			},
			{
				path: "/layout/log-list",
				name: "推送记录",
				icon: <FileSearchOutlined />,
				element: <TMLogList/>,
			},
			{
				path: "/layout/push-config",
				name: "推送设置",
				icon: <SettingOutlined />,
				element: <TMPushConfig/>,
			},
			{
				path: "/layout/error/:code",
				element: <ErrorPage/>
			}
		]
	},
	{
		path: '*',
		element: <Navigate to="/layout/error/404"/>
	},
];

export default (function RouteElement() {
	const element:any = useRoutes(routes);
	return element;
})
