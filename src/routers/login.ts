import {asyncComponent as async} from "@/components/AsyncComponent";

const LoginView = async(()=>import(/* webpackChunkName: "login" */ "@/pages/login/login")); //配置webpackChunkName，打包出来的异步chunk的名称

const login = [
	{
		path: '/login',
		component: LoginView,
		exact: true,
		key:"login",
		title:"login"
	}
];

export default login;
