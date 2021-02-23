import { injectable } from "inversify";
import "reflect-metadata";
import { IOther } from "./IOhter";
@injectable()
export default class OtherServie implements IOther {
  name: string = "1111";
}