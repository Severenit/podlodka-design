import React from "react";
import Icon from "../icon";
import { ReactComponent as SettingsComponents } from "./Settings.svg";

import s from './Settings.module.css';

export class IconSettings extends React.Component {
  static propTypes = Icon.propTypes;

  render() {
    return (
      <Icon className={s.root} {...this.props} name="settings">
        <SettingsComponents />
      </Icon>
    );
  }
}
