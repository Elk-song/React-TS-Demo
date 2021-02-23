import InjectDemo from "@/core/domain/example";
import { IInjectDemo } from "@/core/domain/example/interface";
import { IOther } from "@/core/domain/other/IOhter";
import OtherServie from "@/core/domain/other/OtherService";
import { Container } from "inversify";
import { IocTypes } from "./ioc-types";

const container = new Container();
container.bind<IInjectDemo>(IocTypes.InjectDemo).to(InjectDemo);
container.bind<IOther>(IocTypes.OtherDemo).to(OtherServie);


export default container;