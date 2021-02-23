import React, { Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import RouterAuth from "@/components/RouteAuth";
import NotFound from './notFound';
import Login from "./login";
const routes = [
	...Login,
	...NotFound
];
function BasicRoute() {
	return (
		<BrowserRouter>
			<Switch>
				<Suspense fallback={<div>Loading...</div>}>
					<RouterAuth config={routes} />
				</Suspense>
			</Switch>
		</BrowserRouter>
	)
}


export default BasicRoute;
