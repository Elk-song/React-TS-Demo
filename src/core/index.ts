import { Container, inject, injectable } from "inversify";
import "reflect-metadata";
import InjectDemo from "./domain/example";
import { IInjectDemo } from "./domain/example/interface";


const IocTypes = {
  main: Symbol("Main"),
  examples: Symbol("Example")
}
const container = new Container();


@injectable()
class MainService {
  // private exampleDemo: IInjectDemo;
  // public get Example(): IInjectDemo {
  //   return this.exampleDemo;
  // }
  // constructor(
  //   @inject(IocTypes.examples) _example: IInjectDemo
  // ) {
  //   this.exampleDemo = _example;
  // }
}


container.bind<MainService>(IocTypes.main).to(MainService);
container.bind<IInjectDemo>(IocTypes.examples).to(InjectDemo);

export const service = container.get(MainService);

