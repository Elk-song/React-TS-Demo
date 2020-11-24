export interface IRouteConfig {
  name: string;
  key:string;
  path: string;
  component: any;
  exact?: boolean;
  routes?: IRouteConfig[];
}