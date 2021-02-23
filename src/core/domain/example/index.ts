import { IocTypes } from "@/shared/config/ioc-types";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import { IOther } from "../other/IOhter";
import { IInjectDemo } from "./interface";
@injectable()
export default class InjectDemo implements IInjectDemo {
  testName: string = "测试注入的值"
  @inject(IocTypes.OtherDemo) private _other!: IOther;
  public get OtherService(): IOther {
    return this._other;
  }
  getData(): string {
    return "124";
  }
}
