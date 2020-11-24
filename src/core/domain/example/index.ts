import { injectable } from "inversify";
import "reflect-metadata";
import { IInjectDemo } from "./interface";

@injectable()
export default class InjectDemo implements IInjectDemo {
  getData():string{
    return "124";
  }
}