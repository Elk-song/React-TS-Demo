import { IInjectDemo } from "@/core/domain/example/interface";
import { IocTypes } from "@/shared/config/ioc-types";
import Provider from "@/shared/utils/ioc-provider";
import React from "react";

class InjectClass extends React.Component {
  @Provider(IocTypes.InjectDemo)
  private injectTest!: IInjectDemo;
  componentDidMount() {
    console.log("------");
  }
  render() {
    return (
      <div>
        {this.injectTest.testName}
      </div>
    )
  }
}
export default InjectClass;