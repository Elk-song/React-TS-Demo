export interface IRouteConfig {
  title: string;
  key: string;
  path: string;
  component?: any;
  exact?: boolean;
  redirect?: string;
  children?: IRouteConfig[];
}