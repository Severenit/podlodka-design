import React from "react";
import Icon from "../icon";
import { ReactComponent as CloseComponents } from "./Close.svg";

export class IconClose extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon {...this.props} name="bookmark">
        <CloseComponents />
      </Icon>
    );
  }
}
