import React, { Component } from "react";
import styled from "./header.module.css";

export default class InfoBox extends Component {
  render() {
    let props = this.props;
    
    return (
      <div className={styled.infoBox}>
        <div className={styled.infoIcon}>
          {props.icon}
        </div>
        <div className={styled.infodesc}>
          <h4>{props.title}</h4>
        </div>
      </div>
    );
  }
}
